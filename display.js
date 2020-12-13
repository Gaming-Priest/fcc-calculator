import React from 'react';

export default function Display({ answer, logic, onChange }) {

  return (
    <div className="screen">
  <input className="solved" disabled value={logic}></input>
    <h4 className="evaluating" id="display">{ answer}</h4>
    </div>
  )
}