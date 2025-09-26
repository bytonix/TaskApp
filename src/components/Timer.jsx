import React, { useState, useEffect } from "react";
import { use } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleStartPause = () => setIsRunning((prev) => !prev);
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

//   useEffect(()=>{
//     console.log("Timer component mounted");
//   }, [seconds]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg border-0 rounded-4 text-center p-4" style={{ maxWidth: 350 }}>
        <h3 className="fw-bold mb-3">⏱ Stopwatch</h3>
        <h1 className="display-3 fw-bold text-primary mb-4">
          {seconds}
          <span className="fs-5 text-muted ms-1">sec</span>
        </h1>
        <div className="d-flex justify-content-center gap-3">
          <button
            className={`btn px-4 rounded-pill ${isRunning ? "btn-warning" : "btn-success"}`}
            onClick={toggleStartPause}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            className="btn btn-outline-danger px-4 rounded-pill"
            onClick={reset}
            disabled={!seconds}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;


