import React, { useState } from "react";
import "./Scores.scss";

const Scores = () => {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [names, setNames] = useState(["", "", "", ""]);
  const [qualifications, setQualifications] = useState([
    false,
    false,
    false,
    false,
  ]);

  const updateScore = (index, value) => {
    if (!qualifications[index]) {
      const updatedScores = [...scores];
      updatedScores[index] += value;
      setScores(updatedScores);

      if (updatedScores[index] >= 10) {
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

  return (
    <section className="score-section">
      {[0, 1, 2, 3].map((index) => (
        <section key={index} className="players">
          <h3>{`${index + 1}`}</h3>
          <input
            type="text"
            placeholder={`Équipe ${index + 1}`}
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
            <button
              className="button-score-2"
              onClick={() => updateScore(index, 2)}
            >
              +2
            </button>
            <button
              className="button-score-3"
              onClick={() => updateScore(index, 3)}
            >
              +3
            </button>
            <button
              className="button-score-penalty"
              onClick={() => updateScore(index, -1)}
            >
              -1
            </button>
          </div>
          <div>
            {scores[index] >= 10 ? (
              <p className="victory">Qualifiés !</p>
            ) : (
              <>
                <p className="actual-score">{scores[index]}</p>
                <div>
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`dot ${i < scores[index] ? "lit" : ""}`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      ))}
    </section>
  );
};

export default Scores;
