import React from "react";
import cy from "./cy";
import "./App.css";

function App() {
  return (
    <div className="App">
      {cy.map((v, i) => (
        <img src={v} key={i} />
      ))}
    </div>
  );
}

export default App;
