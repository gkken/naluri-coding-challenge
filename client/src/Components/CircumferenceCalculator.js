import { useState } from "react";
import "./CircumferenceCalculator.css";

function CalculateCircumference() {
  const [piValue, setPiValue] = useState("");
  const [circumference, setCircumference] = useState("");

  async function handleClick() {
    try {
      const response = await fetch("http://localhost:8080/api/values");
      const jsonData = await response.json();

      setPiValue(jsonData.piValue);
      setCircumference(jsonData.circumference);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <section className="main-wrapper">
      <header>Sun Circumference Calculator </header>
      <p>
        Calculates the circumference of the sun based on an increasingly precise
        value of Pi calculated by the server and assuming a radius of&nbsp;
        <strong>696,340 km</strong>. The server will calculate a new digit of Pi
        every 0.5 seconds. The value of Pi is calculated using an&nbsp;
        <a href="http://www.cs.ox.ac.uk/jeremy.gibbons/publications/spigot.pdf">
          Unbounded Spigot Algorithm
        </a>
        .
        <br />
        <br />
        Click the button below to retrieve the most accurate value of Pi
        calculated by the server and calculate the circumference of the sun.
      </p>
      <div className="subheader">Pi Value:</div>
      <textarea
        className="data-field"
        value={piValue}
        readOnly={true}
      ></textarea>
      <div className="subheader">Circumference of the Sun (KM):</div>
      <textarea
        className="data-field"
        value={circumference}
        readOnly={true}
      ></textarea>
      <button onClick={handleClick} className="calculate-btn">
        Retrieve Pi Value and Calculate Circumference
      </button>
    </section>
  );
}

export default CalculateCircumference;
