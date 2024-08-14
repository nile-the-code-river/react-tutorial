import { useState } from "react";

import { QuizContextProvider } from "./store/QuizContextProvider";

import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState({
    quizzes: [],
    completed: false,
  });

  function handleCompleteQuiz(quizzes) {
    quizzes.map((x) => console.log("completed: " + JSON.stringify(x)));

    setResult((prevValue) => {
      return {
        quizzes,
        completed: true,
      };
    });
  }

  return (
    <>
      <Header />
      <QuizContextProvider>
        {result.completed ? (
          <Result result={result} />
        ) : (
          <Quiz onCompleteQuiz={handleCompleteQuiz} />
        )}
      </QuizContextProvider>
    </>
  );
}

export default App;
