import React from "react";

import completeImg from "../assets/quiz-complete.png";

function Result({ result }) {
  const correctAnswers = result.quizzes.filter(
    (x) => x.userAnswerIndex === x.rightAnswerIndex
  );
  const wrongAnswers = result.quizzes.filter(
    (x) => x.userAnswerIndex != x.rightAnswerIndex
  );
  const skippedAnswers = result.quizzes.filter(
    (x) => x.userAnswerIndex === null
  );

  return (
    <div id="summary">
      <img src={completeImg} alt="completed" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">12%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">12%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">12%</span>
          <span className="text">answered incorrectly</span>
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
