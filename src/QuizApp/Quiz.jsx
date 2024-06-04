import React, { useState } from "react";
import data from "../data/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const checkAnswer = (e, ans) => {
    // Checking if the lock is false and the answer is correct
    if (lock === false) {
      if (questions.ans === ans) {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        setLock(true);
        setScore(score + 1);
      } else {
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
        setLock(true);
      }
    }
  };

  const nextQuestion = () => {
    // Checking if the lock is true and the index is less than the length of the data
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(index + 1);
      setQuestions(data[index + 1]);
      setLock(false);

      // Resetting the background color of li
      const li = document.querySelectorAll("li");
      li.forEach((li) => {
        li.style.backgroundColor = "white";
        li.style.color = "#666";
      });
    }
  };
  return (
    <div>
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        {result ? (
          <h2>You scored {score} / {data.length} </h2>
        ) : (
          <>
            <h2>
              {index + 1}. {questions.question}
            </h2>
            <ul>
              <li onClick={(e) => checkAnswer(e, 1)}>{questions.option1}</li>
              <li onClick={(e) => checkAnswer(e, 2)}>{questions.option2}</li>
              <li onClick={(e) => checkAnswer(e, 3)}>{questions.option3}</li>
              <li onClick={(e) => checkAnswer(e, 4)}>{questions.option4}</li>
            </ul>
            <button onClick={nextQuestion}>Next</button>
            <div className="index">
              {index + 1} of {data.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
