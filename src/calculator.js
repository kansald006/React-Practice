import { Component, useEffect, } from 'react';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import styles from './calculator.css';

function Calculator() {
    var resultArray=[];
    const [textA, setTextA] = useState();
    const [inputText, setText] = useState();
    const [operator, setOpertor] = useState("");
    const handleOperator = async (val) => {
        let x=document.getElementById("result").value;
        resultArray.push(x)
        resultArray.push(val);
        document.getElementById("result").value="";
    }
    const displayValue = (value) => {
        console.log(value);
        document.getElementById("result").value+=value;

    }
    const solve = () => {
        let x = document.getElementById("result").value;
        resultArray.push(x);
        console.log(resultArray);
        let join = resultArray.toString();
        join= join.replace( /,/g," ");
        let y = eval(join);
        console.log(y)
        document.getElementById("result").value = y;
        resultArray=[];
    }
    const allClear = () => {
        document.getElementById("result").value = "";
        resultArray=[];
    }
    
    return (
        <div class="container">
            <input id="result" className="calc-input" onChange={event => setTextA(event.target.value)} type="number" style={{ width: "80vw", height: "50vw" }} pattern="\d{1,5}" rows="6" cols="60"></input>
            <div class="wrapper">
                <button value="7" onClick={event => displayValue(event.target.value)} class="one">7</button>
                <button value="8" onClick={event => displayValue(event.target.value)} class="two">8</button>
                <button value="9" onClick={event => displayValue(event.target.value)} class="three">9</button>
                <button className="btnBlue"  value="*" onClick={event=>handleOperator(event.target.value)} class="four">x</button>
                <button value="4" onClick={event => displayValue(event.target.value)} class="five">4</button>
                <button value="5" onClick={event => displayValue(event.target.value)} class="six">5</button>
                <button value="6" onClick={event => displayValue(event.target.value)} class="seven">6</button>
                <button className="btnBlue"  value="-" onClick={event=>handleOperator(event.target.value)} class="eight">-</button>
                <button value="1" onClick={event => displayValue(event.target.value)} class="five">1</button>
                <button value="2" onClick={event => displayValue(event.target.value)} class="six">2</button>
                <button value="3" onClick={event => displayValue(event.target.value)} class="seven">3</button>
                <button className="btnBlue"  value="+" onClick={event=>handleOperator(event.target.value)} class="eight">+</button>
                <button className="btnEqual" onClick={solve}>=</button>
                <button className="btnBlue" value="/" onClick={event=>handleOperator(event.target.value)}>/</button>
                <button className="btnBlue" onClick={allClear}>AC</button>
            </div>
            <div style={{ marginTop: "20px" }}>
               
            </div>

        </div>
    )
}

export default Calculator;