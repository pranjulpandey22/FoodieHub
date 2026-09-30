# Chapter 05 — React Hooks ⚛️

[⬅️ Chapter 04](./chapter-04-code-the-app.md) | [⬆️ Back to README](../README.md)

## React Hooks

**Hooks are functions provided by React that let function components use React features such as state and effects.**

Examples:

```text
useState
useEffect
useRef
useContext
```

## useState

`useState` allows a function component to add and manage state.

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};
```

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

For example:

```jsx
const [count, setCount] = useState(0);
```

- `count` → current state value
- `setCount` → state update function
- `0` → initial/default value

## Updating State Based on Previous State

When the next state depends on the previous state, use the functional updater:

```jsx
setCount((prevCount) => prevCount + 1);
```

## Updating Objects in State

Avoid directly mutating state.

```jsx
const [user, setUser] = useState({
  name: "Pranjul",
  age: 25,
});

setUser((prevUser) => ({
  ...prevUser,
  age: 26,
}));
```

## Updating Arrays in State

### Add

```jsx
const [items, setItems] = useState([]);

setItems((prevItems) => [
  ...prevItems,
  "Pizza",
]);
```

### Remove

```jsx
setItems((prevItems) =>
  prevItems.filter((item) => item !== "Pizza")
);
```

## State Keeps UI in Sync

```text
State changes
     ↓
React schedules an update
     ↓
Component renders with new state
     ↓
Reconciliation
     ↓
Required DOM updates
```

Whenever state changes, React can render the component again with the new state.

## Virtual DOM and Reconciliation

React uses React elements to represent the UI and performs reconciliation to determine what needs to change in the browser DOM.

```text
State / Props change
        ↓
Component renders
        ↓
New React element tree
        ↓
Reconciliation
        ↓
DOM update
```

### React Fiber

**Fiber** is React's internal architecture for organizing rendering work.

A simplified learning model:

```text
React update
    ↓
Fiber / rendering work
    ↓
Reconciliation
    ↓
DOM update
```

## useState and Array Destructuring

`useState()` returns an array containing the current state and a state setter.

```jsx
const [count, setCount] = useState(0);
```

For a list:

```jsx
const [list, setList] = useState([]);
```

Conceptually:

```js
[
  currentValue,
  updateFunction
]
```

## Default State Value

The argument passed to `useState()` is the initial state:

```jsx
const [count, setCount] = useState(0);
```

```jsx
const [list, setList] = useState([]);
```

## Default and Named Exports

### Default Export

```jsx
const Header = () => {
  return <h1>FoodieHUB</h1>;
};

export default Header;
```

Import:

```jsx
import Header from "./component/Header";
```

### Named Export

```js
export const LOGO_URL = "logo-url";

export const MENU_ITEMS = [
  "Home",
  "About",
  "Contact",
];
```

Import:

```js
import { LOGO_URL, MENU_ITEMS } from "./utils/constants";
```

## Default vs Named Export

| Default Export | Named Export |
|---|---|
| `export default Header` | `export const Header = ...` |
| Import without `{}` | Import with `{}` |
| `import Header from "./Header"` | `import { Header } from "./Header"` |
| One default export per module | Multiple named exports are allowed |

## Interview Revision

### What is `useState`?

> `useState` is a React Hook that allows function components to add and manage state.

### What happens when state changes?

> React schedules an update, renders the component with the new state, performs reconciliation, and updates the required parts of the DOM.

### Why use a functional state update?

```jsx
setCount((prev) => prev + 1);
```

> Use it when the next state depends on the previous state.

### Why are keys used?

> Keys help React identify list items between renders so it can correctly reconcile list changes.

### What are props?

> Props are values passed from a parent component to a child component, similar to arguments passed to a function.

### What is component composition?

> Component composition means building a larger UI by combining smaller reusable components.
