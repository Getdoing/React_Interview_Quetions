import React from 'react'

export default function Day4() {
    return (
        <>
            <div>
                <h2 style={{ color: "#e84393", textAlign: "center" }}>----- Day 4 -----</h2>
            </div>
            <div>
                <h3> 1) High Order Component in react js ? </h3>
                <p>a higher-order component is a function that takes a component and returns a new component. <br />
                    Higher-order components or HOC is the advanced method of reusing the component functionality logic. <br />
                    It simply takes the original component and returns the enhanced component. </p>
                <br />

                <h3> 2) Do You know about SEO ? Is it true that react js supports SEO support</h3>
                <p>No, absolutely not. React.js, just as Angular.js or Vue.js, helps the developer to create a great user experience which is positive for SEO.</p>
                <br />

                <h3> 3) Clean up in useEffect</h3>
                <p>Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. <br />
                    When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
                    The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.</p>
                <br />


                <h3> 4) do you know about redux </h3>
                <p>Redux is an open-source JavaScript library used to manage application state. <br />
                    React uses Redux for building the user interface. <br />
                    React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. <br />
                    React Redux is conceptually simple. It subscribes to the Redux store, checks to see if the data which your component wants have changed, and re-renders your component.</p>

                <br />
            </div>

        </>
    )
}
