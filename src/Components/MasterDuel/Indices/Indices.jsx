import React, { useState, useEffect } from "react";
import { personnages } from "./constantes";

import "./Indices.scss";

const Indices = () => {
  const [pioche, setPioche] = useState([]);
  const [tempsRestant, setTempsRestant] = useState(60);
  const [indicesAffiches, setIndicesAffiches] = useState([]);
  const [personnagePioche, setPersonnagePioche] = useState(null);
  const [score, setScore] = useState(0);
  const [afficherReponse, setAfficherReponse] = useState(false);
  const [compteARebours, setCompteARebours] = useState(null);
  const [timeouts, setTimeouts] = useState([]);

  const piocherPersonnage = () => {
    resetCompteARebours(); // Réinitialise le compte à rebours
    clearTimeouts(); // Réinitialise les timeouts
    const personnagesNonPioches = personnages.filter(
      (perso) => !pioche.includes(perso.id)
    );

    if (personnagesNonPioches.length > 0) {
      const personnagePioche =
        personnagesNonPioches[
          Math.floor(Math.random() * personnagesNonPioches.length)
        ];

      setPioche((prevPioche) => [...prevPioche, personnagePioche.id]);
      setIndicesAffiches([]);
      setPersonnagePioche(personnagePioche);
      setAfficherReponse(false);
      console.log("Personnage pioché:", personnagePioche.nom);
    } else {
      alert("Tous les personnages ont été piochés.");
    }
  };

  const genererIndicesAleatoires = () => {
    const indicesRestants = [1, 2, 3, 4, 5];
    const indicesAleatoires = [];

    while (indicesAleatoires.length < 5) {
      const indiceAleatoire =
        indicesRestants[Math.floor(Math.random() * indicesRestants.length)];

      indicesAleatoires.push(indiceAleatoire);

      const indiceIndex = indicesRestants.indexOf(indiceAleatoire);
      indicesRestants.splice(indiceIndex, 1);
    }

    return indicesAleatoires;
  };

  const calculerScore = (temps) => {
    if (temps === 0) {
      return 0;
    } else if (temps >= 49) {
      return 6;
    } else if (temps >= 37) {
      return 4;
    } else if (temps >= 25) {
      return 3;
    } else if (temps >= 13) {
      return 2;
    } else {
      return 1;
    }
  };

  const afficherReponseEtArreterCompteARebours = () => {
    setAfficherReponse(true);
    clearTimeouts();
    clearInterval(compteARebours);
  };

  const lancerCompteARebours = () => {
    resetCompteARebours(); // Réinitialise le compte à rebours
    setTempsRestant(60);
    setScore(calculerScore(60));

    const intervalIds = [];

    const nouveauCompteARebours = setInterval(() => {
      setTempsRestant((prevTemps) => {
        const newScore = calculerScore(prevTemps - 1);
        setScore(newScore);
        return prevTemps - 1;
      });
    }, 1000);

    // Affiche les indices aux moments spécifiques
    const indicesAleatoires = genererIndicesAleatoires();

    indicesAleatoires.forEach((indice, index) => {
      const timeoutId = setTimeout(() => {
        setIndicesAffiches((prevIndices) => [...prevIndices, indice]);
      }, index * 12000);

      setTimeouts((prevTimeouts) => [...prevTimeouts, timeoutId]);
    });

    // Arrête le compte à rebours après 60 secondes
    setTimeout(() => {
      clearInterval(nouveauCompteARebours);
      intervalIds.forEach((intervalId) => clearInterval(intervalId));
      clearTimeouts();
    }, 60000);

    setCompteARebours(nouveauCompteARebours);
  };

  const resetCompteARebours = () => {
    clearInterval(compteARebours);
    setCompteARebours(null);
  };

  const clearTimeouts = () => {
    timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    setTimeouts([]);
  };

  useEffect(() => {
    if (tempsRestant === 0) {
      console.log("Temps écoulé!");
      clearInterval(compteARebours);
      clearTimeouts();
    }
  }, [tempsRestant, compteARebours]);

  return (
    <>
      <section className="masterDuel-commands">
        <button onClick={piocherPersonnage}>Pioche</button>
        <button onClick={lancerCompteARebours}>Go !!</button>
        <button
          className="button-reponse"
          onClick={afficherReponseEtArreterCompteARebours}
        >
          Réponse
        </button>
        <p>
          <span>{tempsRestant}</span> secondes - <span>{score}</span> points
        </p>
      </section>
      <section className="indices">
        {indicesAffiches.map((indice, index) => (
          <p key={index}>{personnagePioche["indice_" + indice]}</p>
        ))}

        {afficherReponse && (
          <p className="reponse">{personnagePioche && personnagePioche.nom}</p>
        )}
      </section>
    </>
  );
};

export default Indices;
