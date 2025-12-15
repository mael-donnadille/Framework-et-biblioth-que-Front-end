import React, { useState } from "react";

function Person(props) {
  const [age, setAge] = useState(props.age);
  const augmenterAge = () => {
    setAge(age + 1);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>{props.name}</h2>
      <p>age : {age} ans</p>
    <input>type:button onClick={augmenterAge}+ age</input>

      <button onClick={augmenterAge}>+ age</button>
    </div>
  );
}

export default Person;
