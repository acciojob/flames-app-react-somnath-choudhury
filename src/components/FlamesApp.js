import React, { useState } from "react";

const FlamesApp = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateFlames = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }

    // Convert names to arrays for manipulation
    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common characters (case-sensitive)
    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--; // adjust after removal
      }
    }

    const count = arr1.length + arr2.length;
    const flames = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
    const relationship = flames[count % 6];

    setResult(relationship);
  };

  const clearAll = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div style={styles.container}>
      <h2>🔥 FLAMES Game 🔥</h2>

      <input
        type="text"
        data-testid="input1"
        name="name1"
        value={name1}
        placeholder="Enter first name"
        onChange={(e) => setName1(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        data-testid="input2"
        name="name2"
        value={name2}
        placeholder="Enter second name"
        onChange={(e) => setName2(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={calculateFlames}
          style={styles.button}
        >
          Calculate
        </button>
        <button
          data-testid="clear"
          name="clear"
          onClick={clearAll}
          style={{ ...styles.button, backgroundColor: "#f44336" }}
        >
          Clear
        </button>
      </div>

      <h3 data-testid="answer" style={styles.result}>
        {result}
      </h3>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    margin: "10px",
    padding: "10px",
    width: "200px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
  result: {
    marginTop: "30px",
    color: "#333",
  },
};

export default FlamesApp;
