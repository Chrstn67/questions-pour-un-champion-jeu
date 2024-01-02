import React, { useState } from "react";
import "./Scores.scss";

const Scores = () => {
  const [scores, setScores] = useState([0, 0, 0]);
  const [names, setNames] = useState(["", "", ""]);
  const [qualifications, setQualifications] = useState([false, false, false]);

  const updateScore = (index, value) => {
    if (!qualifications[index]) {
      const updatedScores = [...scores];
      updatedScores[index] += value;
      setScores(updatedScores);

      if (updatedScores[index] >= 22) {
        setQualifications((prevQualifications) => {
          const updatedQualifications = [...prevQualifications];
          updatedQualifications[index] = true;
          return updatedQualifications;
        });
      }
    }
  };

  const handleNameChange = (index, e) => {
    const updatedNames = [...names];
    updatedNames[index] = e.target.value;
    setNames(updatedNames);
  };

  const resetScore = (index) => {
    setScores((prevScores) => {
      const updatedScores = [...prevScores];
      updatedScores[index] = 0;
      return updatedScores;
    });

    setQualifications((prevQualifications) => {
      const updatedQualifications = [...prevQualifications];
      updatedQualifications[index] = false;
      return updatedQualifications;
    });
  };

  return (
    <section className="score-section">
      {[0, 1, 2].map((index) => (
        <div key={index} className="players">
          <h3>{`${index + 1}`}</h3>
          <input
            type="text"
            placeholder={`Équipe ${index + 1}e qualifiée`}
            value={names[index]}
            onChange={(e) => handleNameChange(index, e)}
          />
          <div className="buttons-points">
            <button
              className="button-score-1"
              onClick={() => updateScore(index, 1)}
            >
              +1
            </button>
            <button className="button-reset" onClick={() => resetScore(index)}>
              0
            </button>
          </div>
          <div>
            {scores[index] >= 22 ? (
              <p className="victory">MAX À LA SUITE</p>
            ) : (
              <>
                <p className="actual-score">{scores[index]}</p>
                <div>
                  {[...Array(22)].map((_, i) => (
                    <div
                      key={i}
                      className={`dot ${i < scores[index] ? "lit" : ""}`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Scores;
