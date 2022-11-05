import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UseState() {
    const [state, setState] = useState(0);

    return (
        <div>
            <h2 style={{ marginLeft: "520px", marginBottom: "50px", color: "#18dcff" }} >useState</h2>
            <h2 style={{ marginLeft: "550px", marginBottom: "50px" }} > {state} </h2>
            <button className='btn btn-warning ' style={{ marginLeft: "450px" }} onClick={() => { setState(state + 1) }}>Increament</button>

            <button className='btn btn-danger mx-5' onClick={() => {
                if (state > 0) {
                    setState(state - 1)

                } else {
                    setState(0);
                    alert("values reach to the zero point")
                }
            }} >decrement</button>

        </div>
    )
}
