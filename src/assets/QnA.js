const qnaData = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the application's state efficiently.",
  },
  {
    id: 2,
    question: "What is the purpose of useState in React?",
    answer:
      "The useState hook enables state management in functional components. It lets you create and update state variables dynamically during the component's lifecycle.",
  },
  {
    id: 3,
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by updating only the changed elements instead of re-rendering the entire DOM.",
  },
  {
    id: 4,
    question: "What are props in React?",
    answer:
      "Props are short for properties and are used to pass data between components. They are immutable and allow components to be dynamic and reusable.",
  },
  {
    id: 5,
    question: "What is the difference between functional and class components?",
    answer:
      "Functional components are simpler and use hooks for state and lifecycle methods. Class components, on the other hand, require extending React.Component and include more boilerplate code.",
  },
  {
    id: 6,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML, making it easier to create React elements and components.",
  },
  {
    id: 7,
    question: "How does React handle events?",
    answer:
      "React handles events using camelCase syntax and functions as event handlers. It ensures cross-browser compatibility by wrapping events in its synthetic event system.",
  },
  {
    id: 8,
    question: "What are React lifecycle methods?",
    answer:
      "React lifecycle methods are functions triggered at specific phases of a component's lifecycle. Examples include componentDidMount and componentWillUnmount in class components.",
  },
  {
    id: 9,
    question: "What is the significance of keys in React lists?",
    answer:
      "Keys help React identify which items have changed, are added, or removed in a list. They improve rendering efficiency by minimizing DOM manipulation.",
  },
  {
    id: 10,
    question: "What is React Router?",
    answer:
      "React Router is a library for managing navigation and routing in a React application. It allows you to create single-page apps with dynamic and conditional routing.",
  },
];

export default qnaData;