
# React Interview QnA

Basics: [GFG Links](https://www.geeksforgeeks.org/reactjs-interview-questions-and-answers/)

## Q1. Features of React  
- Its virtual DOM boosts performance by minimizing actual DOM manipulations.
- The component-based architecture promotes modular and reusable code, enhancing maintainability.
- React's one-way data flow simplifies state management, reducing potential bugs.
- The JSX syntax allows for a seamless blend of HTML and JavaScript, making the code more readable.
- Additionally, React has strong community support and is backed by Facebook, ensuring continuous updates and improvements. These factors collectively make React a powerful and popular choice for building dynamic and efficient user interfaces.

---

## Q2. Why React was made

- React was introduced by Facebook to address challenges in building large, dynamic interfaces.
- Developers needed a solution that could efficiently update the UI in response to changing data
- The virtual DOM was introduced for efficient UI updates.
- React's declarative approach simplified development by allowing developers to describe the desired state.
- Improved code predictability

---

## Q3. What problems Javascript had that react solved

- Inefficient DOM Manipulation: Traditional JavaScript frameworks manipulated the DOM directly, causing performance bottlenecks. React's virtual DOM optimized this process, updating only the necessary parts for improved efficiency.
  
- Complex UI Logic: Handling complex UI logic and state management in JavaScript was error-prone. React's component-based architecture and declarative syntax simplified UI development, making code more modular and readable.
  
- Data Synchronization: Keeping UI in sync with changing data was a challenge. React's one-way data flow and virtual DOM ensured efficient data synchronization, reducing bugs and enhancing predictability.
  
- Code Maintainability: As applications grew, maintaining and organizing JavaScript code became challenging. React's component-based structure promoted code modularity, reusability, and easier maintenance

---

## Q4. How React Works

React works by using a virtual DOM (Document Object Model) and a component-based architecture. 

1. **Component-Based Structure:**
   - React applications are built using components, which are modular and reusable pieces of code that represent parts of the user interface.

2. **Declarative Syntax:**
   - Developers describe the desired state of the UI using a declarative syntax, specifying how the UI should look at any given moment.

3. **Virtual DOM:**
   - React maintains a virtual DOM, a lightweight copy of the actual DOM. When the state of the application changes, React first updates the virtual DOM rather than the real DOM.

4. **Reconciliation:**
   - React then performs a process called reconciliation, where it calculates the most efficient way to update the actual DOM based on the changes made to the virtual DOM.

5. **Efficient Updates:**
   - Only the specific parts of the actual DOM that need updating are modified, reducing the overall amount of work and making updates more efficient.

6. **One-Way Data Flow:**
   - React follows a one-way data flow, meaning data changes propagate down the component hierarchy. This ensures predictable and manageable state changes.

7. **Lifecycle Methods:**
   - React components have lifecycle methods that allow developers to hook into different stages of a component's existence, enabling actions like fetching data or cleaning up resources.

8. **Event Handling:**
   - React handles user interactions and events through a synthetic event system, providing a consistent interface for handling various browser events.

---

## Q5. How React works internally.

1. **Component Rendering:**
   - React applications are built using components. When a component's state or props change, React triggers a re-render of that component.

2. **Virtual DOM:**
   - React maintains a virtual DOM, which is an in-memory representation of the actual DOM. The virtual DOM allows React to optimize the process of updating the UI.

3. **Reconciliation Algorithm:**
   - React uses a diffing algorithm during the reconciliation process to efficiently identify the differences between the current virtual DOM and the new virtual DOM.

4. **Reconciliation Process:**
   - React compares the new virtual DOM with the previous one element by element, determining additions, removals, and changes.
   - It calculates the minimal set of changes needed to update the actual DOM.

5. **Fiber Architecture:**
   - React Fiber is a reimplementation of the core algorithm for rendering and updating components. It introduces features like asynchronous rendering and incremental updates.
   - Fiber allows React to interrupt rendering to work on high-priority tasks, improving responsiveness.

6. **Concurrent Mode:**
   - Concurrent Mode, introduced in React 18, enables React to work on multiple tasks concurrently. This enhances the responsiveness of the application.

7. **Time Slicing:**
   - Time Slicing is a feature within Concurrent Mode that divides rendering work into smaller chunks (time slices). This supports incremental rendering and prevents long-running tasks from blocking the main thread.

8. **Priority Scheduling:**
   - Concurrent Mode introduces priority scheduling, allowing React to prioritize high-priority tasks over less critical rendering work. This helps in maintaining a responsive user interface.

9. **Suspense and Error Boundaries:**
   - Suspense is a mechanism for handling asynchronous operations more effectively.
   - Error Boundaries allow components to catch JavaScript errors during rendering and handle them gracefully.

10. **React Server Components (Experimental):**
    - React Server Components is an experimental feature that enables server rendering of certain components to reduce client-side rendering needs.

Remember, the internal workings of React are subject to change as the library evolves. For the latest and most accurate information, it's recommended to check the official React documentation and release notes.


---

## Q6. Explain the building blocks of React?

- Components: These are reusable blocks of code that return HTML.
- JSX: It stands for JavaScript and XML and allows to write HTML in React.
- Props and State: props are like function parameters and State is similar to variables.
- Context: This allows data to be passed through components as props in a hierarchy.
- Virtual DOM: It is a lightweight copy of actual DOM which makes DOM manipulation easier.

---

## Q7.  npm and npx

 - `npm` is primarily a package manager for installing and managing Node.js packages
 - while npx is a tool for executing packages, especially for one-off commands or tools that you don't want to install globally.


---

## Q8. React flow and structure

Now, when we talk about "React flow and structure," we're likely referring to the flow of data and the overall structure of a React application.

**1. Flow of Data:**
   - **Unidirectional Data Flow:** React follows a unidirectional data flow. This means that data in a React application flows in one direction, from parent components to child components. This helps in maintaining a clear and predictable data flow, making it easier to understand how the application behaves.

**2. Component Structure:**
   - **Components:** In React, everything is a component. A component can be a simple button, a form, or even a whole page. Components can be functional or class-based.
   - **Hierarchy:** Components are arranged in a hierarchical structure. You have a main or root component that contains child components, and these child components may further contain more child components. This hierarchy makes it easy to manage and organize your UI.

**3. Virtual DOM:**
   - **Virtual DOM:** React uses a Virtual DOM to improve performance. Instead of directly manipulating the actual DOM (which can be slow), React creates a virtual representation of the DOM in memory. When there are changes, React first updates the virtual DOM and then efficiently updates only the necessary parts of the actual DOM. This minimizes the amount of DOM manipulation, resulting in a faster user interface.

**4. State and Props:**
   - **State:** React components can have state, which represents the data that the component manages. When the state of a component changes, React re-renders the component to reflect the updated state.
   - **Props:** Components can receive data through props (short for properties). Props are passed down from parent components to child components, allowing for the flow of data between different parts of the application.

**5. JSX:**
   - **JSX:** JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like.

In summary, the flow and structure in React revolve around the unidirectional flow of data, the component-based architecture, the use of a Virtual DOM for performance optimization, and the concepts of state and props for managing and passing data between components.


---

## Q9. Creating react element using JSX syntax

```jsx
import React from 'react';

const MyElement = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React element.</p>
    </div>
  );
};

export default MyElement;
```

In this example, `MyElement` is a functional component that returns a JSX element. You can then use this component in your application by importing and rendering it. For instance:

```jsx
import React from 'react';
import MyElement from './MyElement';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <MyElement />
    </div>
  );
};

export default App;
```


---


## Q9. Creating react element using createElement

- The `React.createElement` function is used to create React elements without using JSX. It takes three arguments:

1. The type of the element (either a string for HTML elements or a React component).
2. An optional object for element properties (or `null` if there are none).
3. The children of the element, which can be additional `React.createElement` calls or strings for text content.

Here's an example of creating a React element using `React.createElement`:

```jsx
import React from 'react';

const MyElement = () => {
  return React.createElement('div', null,
    React.createElement('h1', null, 'Hello, React!'),
    React.createElement('p', null, 'This is a simple React element.')
  );
};

export default MyElement;
```

- Here `MyElement` is a functional component that uses `React.createElement` to create a `div` element containing an `h1` heading and a `p` paragraph. You can use this component in your application in the same way as before:

```jsx
import React from 'react';
import MyElement from './MyElement';

const App = () => {
  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'My React App'),
      React.createElement(MyElement)
    )
  );
};

export default App;
```

While using JSX is more common and readable, understanding `React.createElement` can be helpful, especially in situations where JSX isn't available or suitable. If you have any questions or need further clarification, feel free to ask!


---


## How above react code runs internally

Great question! Understanding how the code runs internally in React can help you grasp the React rendering process.

1. **JSX Compilation:**
   When you write JSX code, like in the examples I provided, it needs to be compiled into JavaScript before it can run. This compilation step is typically done using tools like Babel. JSX gets translated into `React.createElement` calls. For example, the JSX:

   ```jsx
   <div>
     <h1>Hello, React!</h1>
     <p>This is a simple React element.</p>
   </div>
   ```

   gets compiled into:

   ```jsx
   React.createElement('div', null,
     React.createElement('h1', null, 'Hello, React!'),
     React.createElement('p', null, 'This is a simple React element.')
   );
   ```

2. **React.createElement Execution:**
   The `React.createElement` calls create a virtual DOM representation of your UI. Each call returns a JavaScript object representing a React element. This virtual DOM is a lightweight copy of the actual DOM elements.

3. **Reconciliation and Rendering:**
   React then takes this virtual DOM and compares it with the previous one (if any) using a process called reconciliation. React identifies the differences (changes in state or props) and updates only the parts of the actual DOM that need to change, rather than re-rendering the entire DOM.

   In the example:

   ```jsx
   React.createElement('div', null,
     React.createElement('h1', null, 'Hello, React!'),
     React.createElement('p', null, 'This is a simple React element.')
   );
   ```

   React would create a virtual DOM structure with a `div` containing an `h1` and a `p`. If there were changes in state or props, React would efficiently update the actual DOM.

4. **Component Lifecycle Methods (if applicable):**
   If you have class components, React also invokes lifecycle methods like `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount` at appropriate times during the component's lifecycle.

This process ensures that React applications are efficient and only update what is necessary, providing a smooth user experience.

---

## In depth understanding

When you write JSX code in a React application, the code needs to be transpiled into JavaScript that can be understood by browsers. This transpilation process is typically done using a tool like Babel. Here's a step-by-step overview of how React code, written in JSX, is converted into JavaScript objects:

1. **Writing JSX:**
   - You write JSX code, which looks similar to HTML but is actually a syntactic extension of JavaScript.

    ```jsx
    const element = <h1>Hello, JSX!</h1>;
    ```

2. **Babel Transpilation:**
   - JSX code is not directly understood by browsers. Therefore, it needs to be transpiled into regular JavaScript.
   - Babel is a popular JavaScript compiler that performs this transpilation. It takes JSX code as input and produces equivalent JavaScript code.

3. **React.createElement Function:**
   - During transpilation, JSX elements are converted into `React.createElement` function calls.
   - The `React.createElement` function is responsible for creating React elements, which are JavaScript objects that represent the virtual DOM.

    ```javascript
    const element = React.createElement('h1', null, 'Hello, JSX!');
    ```

   - The first argument to `React.createElement` is the type of the element (e.g., 'h1'), the second argument is for properties or attributes (null in this case), and the subsequent arguments are the children of the element.

4. **JavaScript Object Representation:**
   - The result is a JavaScript object representing the JSX element. The structure of this object typically includes `type`, `props`, and other properties.

    ```javascript
    {
      type: 'h1',
      props: {
        children: 'Hello, JSX!'
      }
    }
    ```

---

[Note]: 
- React creates a virtual representation of your UI in memory, and when something changes, it creates a new virtual tree.
- The reconciliation process then compares these virtual trees to figure out what has changed and efficiently updates the actual DOM.
- So, it's like comparing the before and after snapshots of your UI tree.
    
---

5. **Rendering Process:**
   - React uses these JavaScript objects to efficiently update the virtual DOM.
   - During the rendering process, React compares the current virtual DOM with the new one, determining the minimal set of changes needed to update the actual DOM.

In summary, JSX code is transpiled into JavaScript using tools like Babel, and JSX elements are converted into `React.createElement` function calls. The resulting JavaScript objects represent the structure of the virtual DOM, which React uses for efficient updates and rendering.


---

## Q10. Functional Component in react

In React, a functional component is a simpler way to define a component using a JavaScript function. It's also known as a stateless component or a "dumb" component because it doesn't have its own internal state or lifecycle methods.

Here's a basic example of a functional component in React:

```jsx
import React from 'react';

const MyFunctionalComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
};

export default MyFunctionalComponent;
```

In this example, `MyFunctionalComponent` is a functional component that takes `props` as an argument and returns JSX to define the component's structure. Functional components are commonly used for simpler UI elements or when state and lifecycle methods are not needed.

With the introduction of React Hooks, functional components can also manage state and have side effects, blurring the line between functional and class components.

---


## Q11. React Flow and Structure

In React, the flow and structure of an application typically follow a component-based architecture. Here's a high-level overview:

1. **Components:**
   - React applications are built using components, which are reusable, self-contained building blocks of the UI.
   - Components can be functional or class-based, with the former being simpler and recommended when state and lifecycle methods are not needed.

2. **Component Hierarchy:**
   - Components are organized in a hierarchical structure, forming a tree.
   - The top-level component is usually the "App" component, and it contains other components as its children.

3. **Props (Properties):**
   - Components can receive data from their parent components through props.
   - Props are read-only and are used to pass data down the component tree.

4. **State:**
   - State is used to manage a component's internal data and state changes.
   - Class components use the `setState` method to update state, while functional components can use React Hooks like `useState`.

5. **Rendering:**
   - React components render UI elements based on their current props and state.
   - When props or state change, React efficiently updates and re-renders only the necessary parts of the DOM.

6. **Event Handling:**
   - Components can respond to user interactions through event handling.
   - Event handlers are functions that are triggered when a specific event occurs, such as a button click.

7. **Lifting State Up:**
   - State can be lifted up to a common ancestor component when multiple components need to share the same state.
   - This promotes a unidirectional flow of data.

8. **Conditional Rendering:**
   - Components can conditionally render parts of the UI based on certain conditions using conditional statements or ternary operators.

9. **React Router:**
   - For single-page applications, React Router is often used to handle navigation and routing.

10. **Services and API Integration:**
    - Interaction with external services and APIs is typically done in separate service files or through the use of `fetch` or third-party libraries.

11. **Styling:**
    - Styles can be applied using regular CSS, CSS-in-JS libraries, or pre-processors like SCSS.

12. **State Management (optional):**
    - For larger applications, state management libraries like Redux or context API can be used to manage global state.

13. **Testing:**
    - Unit tests, integration tests, and end-to-end tests can be implemented to ensure the reliability of the application.

Remember that the specific structure may vary based on project requirements, team preferences, and best practices. React provides flexibility, allowing developers to choose the architecture that best fits their needs.

---

## Q.12 Functional component in react

In React, hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to allow developers to use state and lifecycle features in functional components, which were previously only available in class components. Here are some commonly used React hooks:

1. **useState:**
   ```jsx
   const [state, setState] = useState(initialState);
   ```
   This hook is used to add state to functional components. It returns an array with the current state value and a function that lets you update it.

2. **useEffect:**
   ```jsx
   useEffect(() => {
     // Side effect code (e.g., fetching data, subscriptions, etc.)
     return () => {
       // Cleanup code (optional)
     };
   }, [dependencies]);
   ```
   `useEffect` is used for side effects in your components, such as data fetching, subscriptions, or manually changing the DOM. The second parameter, `dependencies`, is an array of values that the effect depends on. If any of these values change, the effect will re-run.

3. **useContext:**
   ```jsx
   const contextValue = useContext(MyContext);
   ```
   This hook is used to subscribe to React context without introducing nesting. It allows you to access the value of the nearest `MyContext.Provider` up the component tree.

4. **useReducer:**
   ```jsx
   const [state, dispatch] = useReducer(reducer, initialState);
   ```
   `useReducer` is often preferred over `useState` for managing more complex state logic. It accepts a reducer function and an initial state, and returns the current state and a dispatch function.

5. **useCallback and useMemo:**
   ```jsx
   const memoizedCallback = useCallback(() => {
     // Callback logic
   }, [dependencies]);

   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   ```
   `useCallback` is used to memoize functions, preventing unnecessary renders in child components. `useMemo` is similar but is used for memoizing values, like the result of a computation.


---

## Q.13 Counter using useStateHook

```js

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function countUp() {
    if (count < 20) {
      setCount(count + 1)
    }
  }

  function countDown() {

    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Counter Value is: {count}</h1>
      <button onClick={countUp}> Count Up </button>
      <button onClick={countDown}> Count Down </button>
    </>
  )
}

export default App
```

[Note]: Sometime We are not required to import react library, when we are not using JSX explicitly

---

## How useState works internally

1. **Initialization:**
   - `useState` initializes state in React functional components.
   - Returns an array with the current state value and a function to update the state.

2. **Rendering:**
   - Component renders based on the current state value.

3. **Updating State:**
   - Calling the update function schedules a re-render with the new state value.
   - React intelligently updates only the affected parts of the virtual DOM.

4. **Re-rendering:**
   - React re-renders the component with the updated state.
   - The updated state becomes the current state, and the UI reflects the changes.

---

## Q.14 React fiber architecture

React Fiber is an internal reimplementation of React's core algorithm. It was introduced to improve the performance and responsiveness of React applications by enabling better control over the rendering process and introducing a more efficient reconciliation algorithm. The Fiber architecture is designed to make React more adaptable to modern user interfaces, concurrent rendering, and incremental updates.

Here are key aspects of React Fiber architecture:

1. **Fiber Data Structure:**
   - At the core of React Fiber is the introduction of a new data structure called "Fiber." Each component in the virtual DOM tree is represented as a Fiber node. Fibers are lightweight units of work that can be paused, aborted, or resumed, allowing React to prioritize and schedule updates more efficiently.

2. **Time Slicing and Prioritization:**
   - Fiber introduces the concept of time slicing, which enables React to break the rendering work into smaller units and prioritize high-priority updates, such as user interactions, over less critical tasks. This helps to improve the perceived performance and responsiveness of the application.

3. **Concurrent Rendering:**
   - Fiber allows React to work on multiple tasks concurrently, making it more suitable for modern, interactive user interfaces. It enables React to pause and resume rendering work, allowing for better handling of tasks like animations and input handling without blocking the main thread.

4. **Reconciliation Algorithm:**
   - React Fiber uses a more sophisticated reconciliation algorithm compared to the previous stack-based algorithm. The new algorithm allows for incremental updates and more fine-grained control over the rendering process. This helps in avoiding layout thrashing and improving the overall performance of React applications.

5. **Render and Commit Phases:**
   - The reconciliation process is divided into two phases: the render phase and the commit phase. During the render phase, React constructs the Fiber tree, and during the commit phase, the changes are applied to the actual DOM. This separation allows React to pause and resume rendering work as needed.

6. **Scheduler:**
   - The scheduler is a crucial part of the Fiber architecture responsible for determining the priority of different tasks and scheduling them accordingly. It helps React decide which tasks to work on next, ensuring that high-priority updates are handled promptly.

7. **Side Effects and Rendering Pipeline:**
   - React Fiber introduces a more predictable and deterministic rendering pipeline. Each Fiber node can produce a set of "side effects" during the commit phase, representing the changes that need to be applied to the DOM. This separation of concerns makes it easier to reason about the rendering process.

8. **Error Boundaries:**
   - Fiber enables the implementation of error boundaries, which are special components that can catch JavaScript errors anywhere in their component tree. This helps prevent entire applications from crashing due to a single error and provides a mechanism for handling errors gracefully.

React Fiber represents a significant advancement in React's internal architecture, focusing on performance, concurrency, and adaptability to future demands of web development. While many of these improvements are under the hood and transparent to developers, they contribute to a more responsive and efficient React framework.



---


## Q.15

---

## Q.16

---

## Q.17

---


## Q.18

---

## Q.19

---

## Q.20

---

## Q.21

---

## Q.22

---

## Q.23

---

## Q.24

---

## Q.25

---

## Q.26

---

## Q.27

---

## Q.28

---

## Q.29

---

## Q.30

---

## Q.3

---


## Q.3

---

## Q.3

---

## Q.3

---

## Q.3

---

## Q.3

---


