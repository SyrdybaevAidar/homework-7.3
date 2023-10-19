import { useState } from 'react'
import PanelComponent from './panel/panelComponent';

import './App.css'

const randomInteger = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateNumbers = () => {
  return [
    randomInteger(5, 36),
    randomInteger(5, 36),
    randomInteger(5, 36),
    randomInteger(5, 36),
    randomInteger(5, 36)
  ];
};

function App() {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);
  
  return (
    <>
      <div>
        <PanelComponent numbers={numbers}/>
        <button onClick={setNumbers => {
          this.Se
        }}>new Numbers</button>
      </div>
    </>
  )
}

export default App
