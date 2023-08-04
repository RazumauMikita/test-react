import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Timer() {

    const [[min, sec], stateFunc] = useState([0,0])
    const [paused, setPaused] = useState(false);
 const start = () => {
    setPaused(true)
  }


  const step = (): void => {
    if (paused) {
        if (sec === 59) {
          stateFunc([min + 1, 0])
        } else {
          stateFunc([min, sec + 1])
        }
       
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
      <p>
        {min.toString().padStart(2, '0')}
        :
        {sec.toString().padStart(2, '0')}

        </p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}

export default Timer;