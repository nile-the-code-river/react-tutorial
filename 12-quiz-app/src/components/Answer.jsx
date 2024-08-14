import React from "react";

function Answer({ quiz, onPickingAnswer }) {
  const answers = quiz.answers;

  return (
    <div className="answer">
      {answers.map((answer, index) => (
        <button key={index} onClick={() => onPickingAnswer(index)}>
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Answer;
