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

            <p>
              L'objectif de cette manche est de marquer un maximum de points
              avec un minimun d'indices.
            </p>
            <p>
              A tour de rôle, chaque équipe devra deviner le nom d'un personnage
              biblique grâce aux indices donnés, en 60 secondes maximum.
            </p>
            <p>Les indices sont aléatoires.</p>
            <p>Dès le lancement du chrono, un indice sera dévoilé.</p>

            <p>
              L'équipe n'est pas obligé d'attendre la fin du chrono pour donner
              sa réponse.
            </p>

            <p>
              Dès qu'elle pense avoir trouvée la réponse, l'équipe prononce 'On
              valide !', l'animateur vérifie et accorde ou non les points
              affichés.
            </p>
            <p>Plus le personnage est trouvé tôt, plus le score sera élevé.</p>
            <p>
              La première équipe à atteindre 15 points gagne la manche et le
              jeu.
            </p>

            <button onClick={handleCloseModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Regles;
