import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [first, setsecond] = useState(0);
    useEffect(() => {
        document.title = `you have ${first} messages📱📃`
        alert(`you have messages ${first}`)
    })
    return (
        <div>
            <h2 style={{ marginLeft: "470px", marginBottom: "50px", color: "#cd84f1" }}>useEffect</h2>

            <h2 style={{ marginLeft: "470px", marginBottom: "50px" }}>you have messages {first}</h2>
            <button class=" btn btn-warning" style={{ marginLeft: "490px", marginBottom: "50px", }} onClick={() => { setsecond(first + 1) }}>click mee🪶</button>
        </div>
    )
}
