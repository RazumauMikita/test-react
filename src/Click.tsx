import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Click() {

  const [counter, stateFunc] = useState(0)

 const plus = () => {
    stateFunc(counter + 1)
  }
  const minus = () => {
    stateFunc(counter - 1)
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={minus}>Minus</button>
      <button onClick={plus}>Plus</button>
    </div>
  );
}

export default Click;
