import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="home-page">
      <p>Es-tu prêt à mettre tes connaissances à l'épreuve ?</p>
      <p>
        Donne un maximum de bonnes réponses et porte ton équipe jusqu'en finale
        !
      </p>
      <Link to="/10-points-gagnants">
        <button className="play-button">Jouer</button>
      </Link>
    </section>
  );
};

export default HomePage;
