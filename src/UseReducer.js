import React, { useReducer } from 'react';

const reducer = (state, action) => {

    if (action.type === "inc") {
        return state + 1;
    }
    if (action.type === "dec") {
        return state - 1;
    }
}

export default function UseReducer() {
    const initialstate = 0;
    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <div>
            <h2 style={{ marginLeft: "470px", marginBottom: "50px", color: "#00b894" }}>useEffect</h2>
            <h2 style={{ marginLeft: "480px", marginBottom: "50px" }}>{state}</h2>

            <button className='btn btn-success' style={{ marginLeft: "450px", }} onClick={() => dispatch({ type: "inc" })} > Increament </button>
            <button className='btn btn-primary ms-5' onClick={() => dispatch({ type: "dec" })} >Decreament</button>

        </div>
    )
}
