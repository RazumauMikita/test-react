import React from 'react';
import ReactDOM from 'react-dom/client';

import Click from'./Click';
import Timer from './Timer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
  <Click/>
  <Timer/>
  </div>

);

