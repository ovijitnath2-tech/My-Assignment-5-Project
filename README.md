Name of Project: Assignment-5

description: A modern, interactive web app for developers to unleash, select, and build their ideal technology stack for projects.

Techonology Used:

1.React(http// react.dev)+Vite
2. typescript
3. Tailwind.CSS
4. React Toastify
5. DaisyUI
6.Chat GPT(For generating data.json )


Key Features:

1.Dynamic Techonology Selections
2.Real time stack management 
3.smooth UX and toast nortification 

Question Answers.......

1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript files.

Why it is used: It makes component structures visually intuitive and easy to write. Under the hood, build tools (like Vite/Babel) transform JSX into standard JavaScript React.createElement() function calls that build the Virtual DOM.

2. What is the difference between props and state?
Props (Properties): Read-only data passed from a parent component down to a child component. They cannot be modified directly by the receiving child component.

State: Internal data managed locally within a component that can change over time (usually via user interactions). When state updates, React automatically triggers a re-render of that component and its children.

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows functional components to declare and manage local state. It returns an array with two elements: the current state value and a updater function to modify it.

Where it was used: In App.tsx to keep track of the array of selected technologies.It was also used in TechContainer.tsx to store the fetched list of technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook handles side effects in functional components (such as API calls, subscriptions, or manual DOM manipulations).

Why it was needed for JSON data: Fetching data from an external file (/data.json) is an asynchronous side effect. Wrapping the fetch call inside useEffect with an empty dependency array [] ensures the network request fires only once when the component mounts, preventing infinite fetch loops during re-renders.

5. Why does every item in a .map() list need a unique key prop?
React relies on the key prop to identify which items in a list have changed, been added, or been removed.

Without unique keys, React cannot accurately track elements across re-renders, leading to performance degradation and UI glitches (such as incorrect state retention in list items).

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means dynamically rendering different UI markup based on specific conditions or state values using standard JavaScript logic (such as if, ternary operators ? :, or logical &&).

Example from YourStack.tsx: Rendering an empty message when no tech items are selected, or showing the clear all button and item list when items exist.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data is passed downward using Props. For example, App.tsx passes selectedStack as a prop down to TechContainer.

Child to Parent: The child communicates upward by invoking a callback function that was passed to it as a prop from the parent. For example:

App.tsx passes handleToggleStack to TechContainer via the onToggleStack prop.

When a user clicks a card in the child component, the child calls onToggleStack(tech), passing the selected object back up to update the state in App.tsx.



