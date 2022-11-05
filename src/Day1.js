import React from 'react'

export default function Day1() {
  return (
    <>
      <div>
        <h2 style={{ color: "#55efc4", textAlign: "center" }}>----- Day 1 -----</h2>
      </div>
      <br />
      <div>

        <h3> 1)What is Virtul DOM ? </h3>
        <p> -React uses Virtual DOM exists which is like a lightweight copy of the actual DOM.<br />
          -So for every object that exists in the original DOM, there is an object for that in React Virtual DOM.<br />
          -It is exactly the same, but it does not have the power to directly change the layout of the document.<br />
          -Manipulating DOM is slow, but manipulating Virtual DOM is fast .<br />
          -This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then it updated those objects only, on real DOM.<br />
          <h3>Reconciliation:</h3>
          This significantly improves the performance and is the main reason why React and its Virtual DOM are much loved by developers all around.</p><br />
        <br />
        <h3> 2)What is SPA?</h3>
        <p>UI/UX: Single Page Applications (SPA) are a great way to create a fantastic user experience on mobile devices.<br />
          -They consist of a single web page that loads all content using JavaScript.<br />
          -They request the markup and data independently and render pages straight to the browser.<br />
          -Reloading: Single-page applications are web pages that only require a single HTML page to load.<br />
          <h3>Advantages</h3>
          -Simplicity: SPAs are easier to develop and maintain than traditional web applications.<br />
          Developers only need to build a single HTML file for the SPA.<br />
          No server-side changes are necessary.<br />
          Reusability: You can reuse the same JavaScript, CSS, and HTML code for multiple pages, and there are tools that allow developers to package these components into reusable modules.<br />
          Security: SPAs make it easier to secure web pages, because they can be protected by a firewall or require login credentials.</p>
        <br />
        <br />
        <h3> 3) What is difference between class and functional component?</h3>
        <h3>function components</h3>
        <p>1) A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).<br />
          2) here is no render method used in functional components.<br />
          3) Functional component run from top to bottom and once the function is returned it cant be kept alive.<br />
          4) Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.<br />
          5) React lifecycle methods (for example, componentDidMount) cannot be used in functional components.<br />
          6) Constructors are not used.</p>
        <h3>class component</h3>
        <p>1) A class component requires you to extend from React. Component and create a render function which returns a React element.<br />
          2) It must have the render() method returning JSX (which is syntactically similar to HTML)<br />
          3) Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.<br />
          4) Also known as Stateful components because they implement logic and state.<br />
          5) React lifecycle methods can be used inside class components (for example, componentDidMount)<br />
          6) Constructor are used as it needs to store state. </p>
        <br />
        <br />
        <h3> 4) What do you mean by state and its use in react?</h3>
        <p>-The state is a built-in React object that is used to contain data or information about the component.<br />
          -A component’s state can change over time; whenever it changes, the component re-renders.<br />
          -Every time the state of an object changes, React re-renders the component to the browser.<br />
          -The state object is initialized in the constructor.<br />
          -The state object can store multiple properties.<br />
          -this.setState() is used to change the value of the state object.<br /> </p>
        <br />
        <br />
        <h3> 5) What is JSX and why do we use it instead of js?</h3>
        <p>-JSX stands for JavaScript XML.JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.<br />
          -It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).<br />
          -So to convert it to browser understandable JavaScript code, we use a tool like Babel which is a JavaScript compiler/transpiler.<br />
        </p>
        <br />
        <br />
        <h3> 6) What is package json?</h3>
        <p>-json holds important information about the project.<br />
          -It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.<br />
        </p>
      </div>
    </>
  )
}
