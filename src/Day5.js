import React from 'react'

export default function Day5() {
    return (
        <>
            <div>

            </div>
            <div>
                <h2 style={{ color: "#74b9ff", textAlign: "center" }}>----- Day 5 -----</h2>
                <br />
                <h3> 1) What is an Event in react ?</h3>
                <p>An event is an action that could be triggered as a result of the user action or system generated event. <br />
                    For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events. <br />
                    React has its own event handling system which is very similar to handling events on DOM elements. <br />
                    The react event handling system is known as Synthetic Events. <br />
                    The synthetic event is a cross-browser wrapper of the browser's native event. </p>
                <br />
                <h3> 2) What is the memmory leak and how to overcome ?</h3>
                <p>Memory leaks in React applications are primarily a result of not canceling subscriptions made when a component was mounted before the component gets unmounted.</p>
                <br />
                <h3> 3) Explain reducer as pure function in redux </h3>
                <p> In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state. <br />
                    These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state. <br />
                    This updated state is sent back to the view components of the react to make the necessary changes. Basically, In short, we can say that Reducer’s work is to return the updated state and to also describe how the state changes.</p>
                <br />
                <h3> 4) What do you know about NPM ?</h3>
                <p>npm is an abbreviation used for the node package manager. It is a package manager for JavaScript. <br />
                    It is the default package manager that comes with NodeJS when you install it. <br />
                    It consists of a command-line interface and an online database of public packages and private packages that are paid which is called the npm Registry.</p>
                <br />

            </div>
        </>
    )
}
