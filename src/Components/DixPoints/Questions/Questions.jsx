import React, { useState, useEffect } from "react";
import { question_11pts } from "./constantes";

import "./Questions.scss";
const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [countdown, setCountdown] = useState(15);

  const getRandomQuestion = () => {
    const min = 0;
    const max = question_11pts.length;
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (usedQuestions.length === max) {
      alert("Toutes les questions ont été posées !");
      return null;
    } else if (usedQuestions.indexOf(random) === -1) {
      setUsedQuestions([...usedQuestions, random]);
      return random;
    } else {
      return getRandomQuestion();
    }
  };

  const handleShowQuestion = () => {
    setCountdown(15);
    const randomIndex = getRandomQuestion();
    if (randomIndex !== null) {
      setQuestionIndex(randomIndex);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setCountdown(0);
  };

  useEffect(() => {
    let interval;

    if (countdown > 0 && showAnswer === false && questionIndex !== null) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown, showAnswer, questionIndex]);

  return (
    <section className="questions-section">
      <p className="countdown">{countdown} secondes</p>
      <button onClick={handleShowQuestion}>Question</button>
      {questionIndex !== null && (
        <div className="question-container">
          <p className="question">{question_11pts[questionIndex][1]}</p>
          <p className="value-question">{question_11pts[questionIndex][2]}</p>
          {showAnswer && (
            <div className="answer-container">
              <p className="reponse">{question_11pts[questionIndex][3]}</p>
            </div>
          )}
          <button onClick={handleShowAnswer}>Réponse</button>
        </div>
      )}
    </section>
  );
};

export default Questions;
