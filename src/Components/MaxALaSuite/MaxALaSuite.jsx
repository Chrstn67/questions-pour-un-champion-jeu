import React, { useState } from "react";
import { Link } from "react-router-dom";

import Questions from "./Questions/Questions";
import Scores from "./Scores/Scores";
import Regles from "./Regles/Regles";
import "./MaxALaSuite.scss";

const MaxALaSuite = () => {
  return (
    <>
      <section className="title">
        <h2>Max à la Suite</h2>

        <Regles />
      </section>
      <section className="max-suite-container">
        <section className="questions-section">
          <Questions />
        </section>
        <section className="scores-section">
          <Scores />{" "}
          <Link to="/master-duel" target="_blank">
            <button className="play-button">Manche 3</button>
          </Link>
        </section>
      </section>
    </>
  );
};

export default MaxALaSuite;
