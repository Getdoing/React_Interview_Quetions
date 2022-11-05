import React from 'react'

export default function Day3() {
    return (
        <>
            <div>
                <h2 style={{ color: "#44bd32", textAlign: "center" }}>----- Day 3 -----</h2>
            </div>
            <div>
                <br />
                <h3> 1) What is Context API </h3>
                <p>Context allows passing data through the component tree without passing props down manually at every level. <br />
                    In React application, we passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. <br />
                    Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree. <br />
                    The React Context API is a component structure, which allows us to share data across all levels of the application. The main aim of Context API is to solve the problem of prop drilling (also called "Threading"). <br />
                    The Context API in React are given below.

                    React.createContext <br />
                    Context.provider <br />
                    Context.Consumer </p>
                <br />

                <h3> 2) Difference between callback and useCallback Hook ?</h3>

                <p>The useCallback hook is used when a child component is rerendering over and over again without any need. <br />
                    By using useCallback, you can prevent unnecessarily re-rendering components by returning the same instance of the function that is passed instead of creating a new one each time. </p>

                <br />
                <h3> 3) What is Props Drilling Concepts ? What is State Uplifting ?</h3>
                <p>Prop drilling is a method where we pass a props with another component with the help of all the components that come between them. <br />
                    In React also if we want to pass props to any other component then we have to pass props to all the components which come between them and This whole process is known as React Prop Drilling.
                    Often there will be a need to share state between different components. <br />
                    The common approach to share state between two components is to move the state to common parent of the two components. <br />
                    This approach is called as lifting state up in React.js
                    With the shared state, changes in state reflect in relevant components simultaneously. <br />
                    This is a single source of truth for shared state components.
                </p>
                <br />
                <h3> 4) Difference between useEffect and useContext ?</h3>
                <p>The useEffect React Hook is used for performing the side effects in functional components. <br />
                    With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change. <br />
                    The function you have passed(can be referred to as “effect”) will be remembered by React and call afterwards the performance of DOM updates is over. <br />
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level. <br />
                    Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.
                    zContext is primarily used when some data needs to be accessible by many components at different nesting levels. </p>

                <br />
                <h3> 5)  What are React Life Cycles Explain Each one with Example</h3>
                <p>React web apps are actually a collection of independent components that run according to the interactions made with them. <br />
                    Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. <br />
                    A React Component can go through four stages of its life as follows. <br />
                    Initialization: This is the stage where the component is constructed with the given Props and default state. <br />
                    This is done in the constructor of a Component Class. <br />
                    Mounting: Mounting is the stage of rendering the JSX returned by the render method itself. <br />
                    Updating: Updating is the stage when the state of a component is updated and the application is repainted. <br />
                    Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</p>


            </div>

        </>
    )
}
