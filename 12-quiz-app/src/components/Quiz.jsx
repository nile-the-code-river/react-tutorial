import { useState, useContext, useEffect, useCallback } from "react";

import Answer from "./Answer";
import QuizTimer from "./QuizTimer";
import { QuizContext } from "../store/QuizContextProvider";

function getRandomIndexes() {
  const quizNum = 7;
  const indexArr = [];
  while (indexArr.length < 3) {
    const numToPush = Math.floor(Math.random() * quizNum);
    if (indexArr.find((x) => x === numToPush) === undefined) {
      indexArr.push(numToPush);
    }
  }
  return indexArr;

  //   const quizNum = 7;
  //   const indexArr = new Set(); // Using a Set to ensure uniqueness

  //   while (indexArr.size < 3) {
  //     const numToPush = Math.floor(Math.random() * quizNum);
  //     indexArr.add(numToPush); // Adds only unique values
  //   }

  //   return Array.from(indexArr); // Convert the Set back to an array
}

let count = 0;

export default function Quiz({ onCompleteQuiz }) {
  const randIndexes = getRandomIndexes();
  const ctxValue = useContext(QuizContext);
  const randomQuizzes = randIndexes.map((idx) => ctxValue[idx]);
  const [quizResult, setQuizResult] = useState([]);

  const [currentQuiz, setCurrentQuiz] = useState(randomQuizzes[count]);

  function handlePickingAnswer(answerIndex) {
    setQuizResult((prev) => {
      const newResult = currentQuiz;
      newResult.userAnswerIndex = answerIndex;

      return [...prev, newResult];
    });

    count++;
  }
  const handleSkipAnswer = useCallback(
    () => handlePickingAnswer(null),
    [handlePickingAnswer]
  );

  useEffect(() => {
    if (randomQuizzes[count] === undefined) {
      onCompleteQuiz(quizResult);
    } else {
      setCurrentQuiz((prev) => randomQuizzes[count]);
    }
  }, [count]);

  return (
    <div id="quiz">
      {<QuizTimer timeout={5000} onTimerExpired={handleSkipAnswer} />}
      <div id="question">
        <h2>{currentQuiz.question}</h2>
      </div>
      <Answer quiz={currentQuiz} onPickingAnswer={handlePickingAnswer} />
    </div>
  );
}
