import React, { useState } from "react";
import { Link } from "react-router-dom";

import Indices from "./Indices/Indices";
import Scores from "./Scores/Scores";
import Regles from "./Regles/Regles";
import "./MasterDuel.scss";

const MasterDuel = () => {
  return (
    <>
      <section className="title">
        <h2>Master Duel</h2>

        <Regles />
      </section>
      <section className="masterduel-container">
        <section className="indices-section">{<Indices />}</section>
        <section className="scores-section">
          <Scores />{" "}
        </section>
      </section>
    </>
  );
};

export default MasterDuel;
