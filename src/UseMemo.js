import React, { useState } from 'react'

export default function UseMemo() {
    const [number, setNumber] = useState(0)
    const squaredNum = squareNum(number);
    const [counter, setCounter] = useState(0);

    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h2 style={{ marginBottom: "50px", color: "#00b894" }}>useMemo</h2>

            <input type="number" placeholder="Enter a number"
                value={number} onChange={onChangeHandler}>
            </input>
            <br />

            <div>Square: {squaredNum}</div>
            <br />
            <button onClick={counterHander} className="btn btn-danger">Counter ++</button>
            <br />
            <div>Counter : {counter}</div>
            <br />


        </div>
    )
}
// function to square the value
function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}

