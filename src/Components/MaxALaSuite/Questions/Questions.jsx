import React, { useState, useEffect } from "react";
import { themes4alasuite } from "./constantes";
import "./Questions.scss";

const Questions = () => {
  const [randomThemes, setRandomThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [disabledThemes, setDisabledThemes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [timer, setTimer] = useState(80);

  const generateRandomThemes = () => {
    const shuffledThemes = themes4alasuite.sort(() => Math.random() - 0.5);
    const selectedThemes = shuffledThemes.slice(0, 7);
    setRandomThemes([]);

    selectedThemes.forEach((theme, index) => {
      setTimeout(() => {
        setRandomThemes((prevThemes) => [...prevThemes, theme]);
      }, index * 3000);
    });
  };

  const selectTheme = (theme) => {
    if (!disabledThemes.includes(theme.id)) {
      // Mélanger les questions du thème
      const shuffledQuestions = theme.questions.sort(() => Math.random() - 0.5);
      theme.questions = shuffledQuestions;

      setSelectedTheme(theme);
      setCurrentQuestionIndex(0);
      setShowQuestion(false);
      setShowAnswer(false);
      setTimer(80);

      // Désactiver le thème sélectionné
      setDisabledThemes((prevThemes) => [...prevThemes, theme.id]);
    }
  };

  const [intervalId, setIntervalId] = useState(null);

  const startQuestion = () => {
    if (
      selectedTheme &&
      !showQuestion &&
      currentQuestionIndex < selectedTheme.questions.length
    ) {
      // Nettoyer l'intervalle précédent s'il existe
      clearInterval(intervalId);

      setShowQuestion(true);
      setShowAnswer(false);

      const id = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(id);
            return prevTimer;
          }
        });
      }, 1000);

      setIntervalId(id);
    }
  };

  const nextQuestion = () => {
    // Nettoyer l'intervalle lorsque toutes les questions ont été posées
    if (currentQuestionIndex + 1 === selectedTheme.questions.length) {
      clearInterval(intervalId);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setShowAnswer(false);

    if (currentQuestionIndex + 1 === selectedTheme.questions.length) {
      // Toutes les questions ont été posées
      showAlert();
    }
  };

  const showAlert = () => {
    alert("Toutes les questions ont été posées.");
    // Nettoyer l'intervalle
    clearInterval(intervalId);

    // Réinitialiser les états pour permettre de sélectionner un nouveau thème
    setSelectedTheme(null);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setShowQuestion(false);
    setTimer(0);
  };

  const showAnswerHandler = () => {
    setShowAnswer(true);
  };

  const currentTheme = randomThemes.find((theme) => theme === selectedTheme);
  const currentQuestion =
    currentTheme && currentTheme.questions[currentQuestionIndex];

  return (
    <section className="themes-list">
      <button className="select-theme-btn" onClick={generateRandomThemes}>
        7 Thèmes
      </button>
      {randomThemes.map((theme) => (
        <div key={theme.id}>
          <button
            className={`theme-btn ${
              selectedTheme && selectedTheme.id === theme.id ? "selected" : ""
            }`}
            onClick={() => selectTheme(theme)}
            disabled={disabledThemes.includes(theme.id)}
          >
            {theme.theme}
          </button>
        </div>
      ))}
      {selectedTheme && (
        <section className="questions-list">
          <h3>{selectedTheme.theme}</h3>
          <p>
            {" "}
            <span>{timer}</span> secondes
          </p>{" "}
          <br />
          {!showQuestion && <button onClick={startQuestion}>Question</button>}
          {showQuestion && currentQuestion ? (
            <section className="question-reponse">
              <div className="question">
                <p>{currentQuestion.question}</p>
                <button onClick={showAnswerHandler}>Réponse</button>
              </div>
              {showAnswer && (
                <div className="reponse">
                  <p>{currentQuestion.reponse}</p>
                </div>
              )}
              <button onClick={nextQuestion}>&rarr;</button>
            </section>
          ) : null}
        </section>
      )}
    </section>
  );
};

export default Questions;
