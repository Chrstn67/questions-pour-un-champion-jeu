import React from "react";
import { Link } from "react-router-dom";
import Questions from "./Questions/Questions";
import Scores from "./Scores/Scores";
import Regles from "./Regles/Regles";
import "./DixPoints.scss";

const DixPoints = () => {
  return (
    <>
      <section className="title">
        <h2>10 Points Gagnants</h2>

        <Regles />
      </section>
      <section className="dix-points-container">
        <section className="questions-section">
          <Questions />
        </section>
        <section className="scores-section">
          <Scores />{" "}
          <Link to="/max-a-la-suite">
            <button className="play-button">Manche 2</button>
          </Link>
        </section>
      </section>
    </>
  );
};

export default DixPoints;
