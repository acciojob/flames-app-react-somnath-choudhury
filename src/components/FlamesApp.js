import React, { useState } from "react";

const FlamesApp = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const getRelationship = (n1, n2) => {
    if (!n1.trim() || !n2.trim()) return "Please Enter valid input";

    let arr1 = n1.split("");
    let arr2 = n2.split("");

    // Remove common characters (case-sensitive)
    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = "";
        arr2[index] = "";
      }
    }

    const remaining = arr1.join("") + arr2.join("");
    const count = remaining.length;

    const flames = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
    const index = count % 6;

    return flames[index];
  };

  const handleCalculate = () => {
    setResult(getRelationship(name1, name2));
  };

  const handleClear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div className="container mt-5 text-center">
      <h1>FLAMES Game</h1>

      <input
        type="text"
        name="name1"
        data-testid="input1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
        className="form-control my-2"
      />

      <input
        type="text"
        name="name2"
        data-testid="input2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
        className="form-control my-2"
      />

      <button
        name="calculate_relationship"
        data-testid="calculate_relationship"
        onClick={handleCalculate}
        className="btn btn-primary mx-2"
      >
        Calculate Relationship Future
      </button>

      <button
        name="clear"
        data-testid="clear"
        onClick={handleClear}
        className="btn btn-danger mx-2"
      >
        Clear
      </button>

      <h3 data-testid="answer" className="mt-3">{result}</h3>
    </div>
  );
};

export default FlamesApp;
