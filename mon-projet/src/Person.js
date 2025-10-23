import React, { useState } from "react";

function Person(props) {
  // état local pour l'âge
  const [age, setAge] = useState(props.age);

  const augmenterAge = () => {
    setAge(age + 1);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>{props.name}</h2>
      <p>Âge : {age} ans</p>
      <button onClick={augmenterAge}>Augmenter âge</button>
    </div>
  );
}

export default Person;
