import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Buttons from './buttons'
import Display from './display'





export default function App() {
  //APP STATES
  const [answer, setAnswer] = useState('0')
  const [logic, setLogic] = useState('')
  const [prevAnswer, setPrevAnswer] = useState('')
  const [currNumber, setCurrNumber] = useState('')
  const [lastOp, setLastOp] = useState('')
  const [currOp, setCurrOp] = useState('')

  let isOperator = /[*/+‑]/
  let endsWithOperator =/[*|+|‑|/]$/
  let endsWithNegativeSign = /\d[‑]$/

  //HANDLE NUMBERS INPUTS
  function numbers(e) {
    //setLastOp(number)
    let number = e.target.value
    if (answer.includes('*' || '/')) {
      let num = answer.slice(0, 0)
      setAnswer(num + number)
    }
    if (logic !== '') {
      setLogic(logic + number)
    }
    if (answer !== '0' && answer !== 'maths error') {
      setCurrNumber(currNumber + number)
      setAnswer(answer + number)
    } else {
      let pure = answer.slice(0,0)
      setCurrNumber(pure + number)
      setAnswer(pure + number)
    }

  }


  //HANDLE OPERATORS

  function operators(e) {
    let operator = e.target.value
    setCurrOp(operator)
    setLastOp(currOp)
  
  if(answer !== ''){
   if (logic !== '') {
        setLogic(logic + operator)
   }
  if (prevAnswer !== '') {
      setAnswer(operator)
      setLogic(prevAnswer + operator)
    } else {
      setCurrNumber(currNumber + operator)
      setLogic(currNumber + operator)
      setAnswer(operator)
    }
  }
  }

  //HANDLE DECIMAL IMPUTS
  function decimal(e) {
    let decimal = e.target.value
    if (answer.includes('.')) {
      setAnswer(answer + '')
    } else {
      setAnswer(answer + decimal)
      setLogic(currNumber + decimal)
      setCurrNumber(currNumber + decimal)
    }
  }


  //RESOLVE OPERATION
  function evaluate() {
    try {
   let exp =  logic.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('')
      let resolved =
        String(eval(exp)) > 3 &&
        String(eval(exp)).includes('.') ?
        String(eval(exp).toFixed(1)) :
        String(eval(exp))
      if (resolved === 'undefined') {
        if (answer !== '') {
          setLogic(answer)
        }
      } else {
        setLogic(logic + '=' + resolved)
        setPrevAnswer(resolved)
        setAnswer(resolved)
      }
    } catch (err) {
      console.log(err);
    }

  };
  //DELETE FIGURES
  function deleteItem() {
    setLogic(logic.substr(0, logic.length - 1))
    setCurrNumber(currNumber.substr(0, currNumber.length - 1))
    setAnswer(answer.substr(0, answer.length - 1))
  }
  //CLEAR FIGURES
  function clear() {
    setLogic('')
    setAnswer('0')
    setPrevAnswer('')
    setCurrNumber('')
    setLastOp('')
    setCurrOp
  };


  return (
    <div className="container">
    <Display 
    answer={answer}
    logic={logic}
    />
    <Buttons
    clear={clear}
    operators={operators}
    numbers={numbers}
    evaluate={evaluate}
    decimal={decimal}
    deleteItem={deleteItem}
    />
    </div>
  )
}
var mountNode = document.getElementById("react-app");
ReactDOM.render(<App />, mountNode);
//