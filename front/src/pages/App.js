// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./Game";
import NotFound from "../support/NotFound"


function App() {
  return (
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
