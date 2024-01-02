import React, { useState } from "react";
import "./Regles.scss";

const Regles = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Règles</button>

      {modalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <h3>Règles de la manche</h3>

            <p>7 thèmes sont proposées.</p>
            <p>
              Ce sont les autres joueurs qui imposeront deux thèmes à l'équipe
              joueuse.
            </p>
            <p>
              Les joueurs de l'équipe répondront à tour de rôle (Joueur A, puis
              B, puis C, puis A etc...).
            </p>
            <p>
              L'équipe a 80 secondes pour répondre à un maximum de questions sur
              chaque thème.
            </p>

            <p>
              Les questions sont posées aléatoirement. Chaque réponse rapporte 1
              point.
            </p>
            <p>
              En cas de mauvaise réponse, le score retombe à 0 et ne sera
              conservé que le score affiché en fin de chrono.
            </p>
            <p>
              Le but est d'avoir le plus de points à la suite, les deux thèmes
              cumulés, sans retomber à 0.
            </p>
            <p>
              En cas d'égalité, le thème qui ne sera pas choisi sera joué, façon
              '10 points Gagnants'
            </p>
            <p>
              Les 2 équipes ayant les meilleures scores seront qualifiées pour
              la manche finale. Les joueurs éliminés intégreront une autre
              équipe.
            </p>

            <button onClick={handleCloseModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Regles;
