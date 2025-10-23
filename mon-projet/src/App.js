import React from "react";
import Person from "./Person";

function App() {
  return (
    <div>
      <h1>Liste de personnes</h1>
      <Person name="Mael" age={20} />
      <Person name="Julie" age={19} />
      <Person name="Thomas" age={21} />
    </div>
  );
}

export default App;