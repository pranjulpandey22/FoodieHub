# Chapter 03 — Igniting Our App 🔥

[⬅️ Back to README](../README.md) | [➡️ Chapter 04](./chapter-04-code-the-app.md)

## JSX

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML-like syntax inside JavaScript. It makes React UI code expressive and readable.

```jsx
const heading = <h1>Hello React</h1>;
```

Without JSX, a React element can be created with:

```js
const heading = React.createElement("h1", {}, "Hello React");
```

### JSX flow

```text
JSX → Babel → JavaScript → React → UI
```

JSX is not HTML. It is transformed into JavaScript that React can process.

## Babel

**Babel is a JavaScript compiler/transpiler that transforms JSX and modern JavaScript into JavaScript that can be processed by the React build environment.**

Example:

```jsx
const heading = <h1>Hello React</h1>;
```

Babel transforms JSX into JavaScript used by the React toolchain.

## React Components

A component is a reusable piece of UI.

### Function Component

```jsx
const Header = () => {
  return <h1>FoodieHUB</h1>;
};

export default Header;
```

### Class Component

```jsx
class Header extends React.Component {
  render() {
    return <h1>FoodieHUB</h1>;
  }
}
```

## Component Composition

**Component composition** means building a larger UI by combining smaller components.

```jsx
const Header = () => <h1>Header</h1>;

const Body = () => <p>Restaurant List</p>;

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
```

### Interview Revision

**What is JSX?**

> JSX is a JavaScript syntax extension that allows us to write HTML-like syntax inside JavaScript.

**What is Babel?**

> Babel is a compiler/transpiler that transforms JSX and modern JavaScript into JavaScript that can be processed by the React toolchain.
