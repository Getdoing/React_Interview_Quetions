import React from 'react'

export default function Day2() {
    return (
        <>
            <div>
                <h2 style={{ color: "#e84393", textAlign: "center" }}>----- Day 2 -----</h2>
            </div>
            <br />

            <div>
                <h3> 1) What is the Difference between react and react native ? Which one is library or framework ?</h3>
                <p>
                    - Reactjs is a JavaScript library, which enables the developers and programmers can develope a high-performance user interface(UI)  as their own js library <span style={{ color: "#3742fa", fontSize: "25px" }}>while</span> React Native is an entire framework for building cross-platform apps, be it web, iOS or Android. <br />
                    -For ReactJS, code is rendered from the DOM <span style={{ color: "#3742fa", fontSize: "25px" }}>while</span> with React Native, APIs are used in mobile applications. <br />
                    -Offers better and more animation <span style={{ color: "#3742fa", fontSize: "25px" }}>while</span> Offers less animation functionality. <br />
                    - CSS is used for creating styling in Reactjs <span style={{ color: "#3742fa", fontSize: "25px" }}>while</span> a stylesheet is used for styling in React Native. <br />
                </p>
                <br />
                <h3> 2) What is the package name you are using for routing ? </h3><br />
                <p>react router dom package is used,for routing.</p> <br />
                <h3> 3) How do you Switch/ Navigate from one component to another in React ?</h3><br />
                <p> Switch from One Screen to another using React Navigation (Router). We will use react-navigation library for the Navigation. <br />

                </p>
                <br />
                <h3> 4) What is the lazy loading in react ?</h3>
                <p> In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching. <br />
                    Talking about React specifically, it bundles the complete code and deploys react added React Suspense which performs lazy loading. <br />
                    all of it at the same time. <br /> Now, usually, that's not a bad idea, since React SPAs (Single page application) are quite small and do not affect the performance. <br />
                </p> <br />



                <h3> 5) Difference between Stateful and Stateless Component ?</h3>
                <p>Stateless components are those components which don’t have any state at all, which means you can’t use this.
                    setState inside these components. It is like a normal function with no render method. <br />
                    It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks.  <br />
                    When react renders our stateless component, is just call the stateless component and pass down the props.</p> <br />

                <p>Stateful components are those components which have a state. The state gets initialized in the constructor. <br />
                    It stores information about the component’s state change in memory. </p>
                <br />

                <h3> 6) Difference between Axios and fetch ?</h3>
                <p>
                    Axios:- <br />
                    Axios has url in request object. <br />
                    Axios is a stand-alone third party package that can be easily installed. <br />
                    Axios uses the data property. <br />
                    Axios performs automatic transforms of JSON data. <br />
                    Axios has built-in support for download progress. <br />
                    Axios “GET” call can have body Content.	<br /> <br />

                    fetch:  <br />
                    Fetch has no url in request object. <br />
                    Fetch is built into most modern browsers; <br />
                    Fetch uses the body property. <br />
                    Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response. <br />
                    Fetch does not support upload progress. <br />
                    Fetch “GET” call cannot have body Content. </p>

                <br />
            </div>

        </>
    )
}
