
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

## Q5. How React works internally

1. **JSX Compilation:**
   - React code often utilizes JSX, a syntax extension that looks similar to XML or HTML. JSX is compiled into JavaScript using tools like Babel. The compiled code represents React elements.

2. **Element Creation:**
   - React elements are JavaScript objects that describe what the UI should look like. These elements are created either through JSX or React.createElement calls.

3. **Fiber Reconciliation:**
   - React's reconciliation algorithm, known as Fiber, handles the process of updating the virtual DOM efficiently. It breaks the process into smaller, interruptible units called fibers, allowing React to prioritize and schedule updates effectively.

4. **Render and Commit Phases:**
   - The reconciliation process is divided into two phases: render and commit.
      - **Render Phase:** In this phase, React determines what changes need to be made to the virtual DOM.
      - **Commit Phase:** This is where the actual DOM is updated based on the changes identified in the render phase.

5. **Diffing Algorithm:**
   - React uses a heuristic algorithm for diffing virtual DOM trees. It compares old and new trees, identifying added, removed, or changed elements. This process is key to optimizing updates.

6. **Reconciler and Renderer:**
   - React's reconciler is responsible for the diffing and updating process. The renderer, like ReactDOM for web applications, is responsible for committing changes to the actual DOM.

7. **State Management:**
   - React components can have state, and when the state changes, React triggers a re-render of the component. State updates are asynchronous to optimize performance and are batched for efficiency.

8. **Virtual DOM Updates:**
   - React's virtual DOM allows it to keep track of changes without directly manipulating the actual DOM. This minimizes the number of DOM manipulations, improving performance.

9. **Event Delegation:**
   - React utilizes a synthetic event system to handle events consistently. It uses event delegation, capturing events at a higher level in the DOM and efficiently distributing them to the appropriate React components.

10. **Component Lifecycle Methods:**
    - Components in React go through various lifecycle methods such as `componentDidMount` and `componentDidUpdate`. These methods allow developers to perform actions at specific points in a component's lifecycle.

11. **Hooks:**
    - With the introduction of Hooks, developers can use state and lifecycle features in functional components, reducing the need for class components and making code more concise.

---

## Q6. Explain the building blocks of React?

- Components: These are reusable blocks of code that return HTML.
- JSX: It stands for JavaScript and XML and allows to write HTML in React.
- Props and State: props are like function parameters and State is similar to variables.
- Context: This allows data to be passed through components as props in a hierarchy.
- Virtual DOM: It is a lightweight copy of actual DOM which makes DOM manipulation easier.

---

## Q7. 
