import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Timer() {

    const [counter, stateFunc] = useState(0)
    const [paused, setPaused] = useState(false);
 const start = () => {
    setPaused(true)
  }


  const step = (): void => {
    if (paused) {
        stateFunc(counter + 1)
    } else {
        return
    }
  }
  React.useEffect(() => {
    const timerID = setInterval(() => step(), 1000);
    return () => clearInterval(timerID);
  });
  const stop = () => {
    setPaused(false)
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}

export default Timer;