# Chapter 01 – React Basics

[⬅️ Back to README](../README.md) | [➡️ Chapter 02](./chapter-02-npm-parcel.md)

---

## 📚 Topics

- HTML Root Element
- DOM Manipulation
- `document.createElement()`
- `document.getElementById()`
- `appendChild()`
- CDN
- React Element
- `React.createElement()`
- `ReactDOM.createRoot()`
- `root.render()`
- React Rendering Flow

---

## 1. HTML Root Element

The HTML root element acts as the container where the React application can be rendered.

```html
<div id="root"></div>
```

---

## 2. DOM Manipulation

Before React, JavaScript can directly create and manipulate DOM elements.

```js
const heading = document.createElement("h1");

heading.innerHTML = "Hello from JavaScript";

const root = document.getElementById("root");

root.appendChild(heading);
```

### Important Methods

- `document.createElement()` → creates an HTML element.
- `document.getElementById()` → finds an element by its ID.
- `appendChild()` → adds an element inside another element.

---

## 3. CDN

CDN stands for **Content Delivery Network**.

React can be loaded through a CDN:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js">
</script>

<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>
```

---

## 4. React.createElement()

`React.createElement()` creates a React element.

```js
const heading = React.createElement(
  "h1",
  {},
  "Hello React"
);
```

A React element is a JavaScript object that describes the UI React should render.

---

## 5. ReactDOM.createRoot()

React needs a root container where the application will be rendered.

```js
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
```

---

## 6. root.render()

`root.render()` renders the React element into the root container.

```js
root.render(heading);
```

---

## 7. React Rendering Flow

```text
React.createElement()
        ↓
React Element
(JavaScript Object)
        ↓
root.render()
        ↓
DOM
        ↓
<h1>Hello React</h1>
```

### Interview Explanation

> A React element is a JavaScript object that describes the UI. React uses that description to update the browser DOM.

---

## 8. JavaScript DOM vs React

Traditional JavaScript directly manipulates DOM elements:

```js
const heading = document.createElement("h1");
heading.innerHTML = "Hello";
root.appendChild(heading);
```

React provides a component-based approach for building and updating user interfaces.

---

[⬅️ Back to README](../README.md) | [➡️ Chapter 02](./chapter-02-npm-parcel.md)
