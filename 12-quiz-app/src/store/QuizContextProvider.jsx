import { createContext, useState } from "react";

import data from "../data/data";

const QUIZ_PLACE_HOLDER = [
  {
    id: "test",
    question: "test1",
    answers: [],
    rightAnswerIndex: 0,
    userAnswerIndex: 0,
  },
];

export const QuizContext = createContext(QUIZ_PLACE_HOLDER);

// reducer
export function QuizContextProvider({ children }) {
  const [quizState, setQuizState] = useState(QUIZ_PLACE_HOLDER);

  if (quizState === QUIZ_PLACE_HOLDER) {
    console.log("populating quizzes");

    setQuizState((prev) => {
      return data.map((x) => {
        return {
          id: x.id,
          question: x.text,
          answers: x.answers,
          rightAnswerIndex: x.rightAnswerIndex,
          userAnswerIndex: null,
        };
      });
    });
  }

  return (
    <QuizContext.Provider value={quizState}>{children}</QuizContext.Provider>
  );
}
