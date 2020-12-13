import React from 'react';
import { figures, operators } from './data'

export default function Buttons({ clear, decimal, deleteItem, numbers, evaluate, operators }) {


  return (
    <div className="buttons-container">
    <button onClick={clear} id="clear" value="">CE</button>
    <button onClick={deleteItem} id="deleteItem" value=""> DEL  </button>
    <button onClick={operators} id="add" value="+">+</button>
    <button onClick={numbers} id="seven" value="7">7</button>
    <button onClick={numbers} id="eight" value="8">8</button>
    <button onClick={numbers} id="nine" value="9">9</button>
    <button onClick={operators} id="subtract" value="-">-</button>
    <button onClick={numbers} id="four" value="4">4</button>
    <button onClick={numbers} id="five" value="5">5</button>
    <button onClick={numbers} id="six" value="6">6</button>
    <button onClick={operators} id="multiply" value="*">X</button>
    <button onClick={numbers} id="one" value="1">1</button>
    <button onClick={numbers} id="two" value="2">2</button>
    <button onClick={numbers} id="three" value="3">3</button>
    <button onClick={operators} id="divide" value="/">/</button>
    <button onClick={decimal} id="decimal" value=".">.</button>
    <button onClick={numbers} id="zero" value="0">0</button>
    <button onClick={evaluate} id="equals" value="=">=</button>
    </div>
  )
}