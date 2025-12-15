import React from "react";
import Person from "./Person";

function App() {
  return (
    <div>
      <h1>Liste de personnes</h1>
      <Person name="Mael" age={21} />
      <Person name="J" age={20} />
      <Person name="T" age={22} />
    </div>
  );
}

export default App;
