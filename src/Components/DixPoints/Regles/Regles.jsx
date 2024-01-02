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
              Les questions sont posées aléatoirement. Chaque question a une
              valeur de point.
            </p>
            <p>Tous les joueurs des 4 équipes peuvent jouer.</p>
            <p>
              Le joueur qui lève la main le plus rapidement a le droit de
              répondre. S'il répond juste, il marque les points pour son équipe.{" "}
            </p>
            <p>
              /!\ ATTENTION /!\: Le joueur qui lève la main empêche les autres
              de répondre.
            </p>

            <p>
              En cas de mauvaise réponse ou d'abandon de parole, l'équipe est
              pénalisée d'un point.
            </p>
            <p>
              Si un joueur prend la main juste avant la fin du temps imparti, il
              peut répondre et fera gagner les points à son équipe.
            </p>
            <p>
              Les questions 'QPUC' sont des questions peut-être plus difficiles
              ou qui appellent une réponse autre que ce qu'on attend réellement.
            </p>
            <p>
              En cas de bonne réponse à ces questions, cela permettra à l'équipe
              de s'attribuer un bonus d'un point ou de sanctionner d'un point
              une autre équipe.
            </p>
            <p>
              Les 3 premières équipes atteignant 10 points sont qualifiées pour
              la manche suivante. Les autres joueurs seront répartis dans les
              équipes.
            </p>

            <button onClick={handleCloseModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Regles;
