import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import DixPoints from "../DixPoints/DixPoints";
import MaxALaSuite from "../MaxALaSuite/MaxALaSuite";
import MasterDuel from "../MasterDuel/MasterDuel";
// import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import MentionsLegales from "../Footer/MentionsLegales/MentionsLegales";
import Footer from "../Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/10-points-gagnants" element={<DixPoints />} />
            <Route path="/max-a-la-suite" element={<MaxALaSuite />} />
            <Route path="/master-duel" element={<MasterDuel />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      {/* <ScrollToTopButton /> */}
    </div>
  );
}

export default App;
