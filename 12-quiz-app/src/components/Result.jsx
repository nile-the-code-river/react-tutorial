import React from "react";

import completeImg from "../assets/quiz-complete.png";

function Result({ result }) {
  const correctAnswerNum = result.quizzes.filter(
    (x) => x.userAnswerIndex === x.rightAnswerIndex
  ).length;

  const wrongAnswerNum = result.quizzes.filter(
    (x) => x.userAnswerIndex != x.rightAnswerIndex
  ).length;

  const skippedAnswerNum = result.quizzes.filter(
    (x) => x.userAnswerIndex === null
  ).length;

  const answerNum = correctAnswerNum + wrongAnswerNum + skippedAnswerNum;

  return (
    <div id="summary">
      <img src={completeImg} alt="completed" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.floor((skippedAnswerNum / answerNum) * 100)}%
          </span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.floor((correctAnswerNum / answerNum) * 100)}%
          </span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">
            {Math.floor((wrongAnswerNum / answerNum) * 100)}%
          </span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {result.quizzes.map((quiz, index) => (
          <li key={quiz.id}>
            <h3>{index + 1}</h3>
            <p className="question">{quiz.question}</p>
            <p
              className={
                "user-answer " +
                (quiz.userAnswerIndex === quiz.rightAnswerIndex
                  ? "correct"
                  : "wrong")
              }
            >
              {quiz.answers[quiz.userAnswerIndex]}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Result;
