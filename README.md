# FoodieHub 🍔

A food ordering web application built with React.js while learning and practicing modern React concepts and real-world frontend development.

## 📚 Learning React

This repository is being developed step by step as part of my React learning journey.

### Chapter 01 – React Basics

#### 1. Understanding the HTML Root Element

Before React, we can create and add elements directly to the DOM using JavaScript.

Example:

```html
<div id="root"></div>
```

JavaScript can find this element and add content to it:

```js
const heading = document.createElement("h1");
heading.innerHTML = "Hello from JavaScript";

const root = document.getElementById("root");
root.appendChild(heading);
```

#### 2. Understanding `root`

The `root` element acts as the container where the application's UI can be rendered.

```html
<div id="root"></div>
```

React applications commonly use a root element as the starting point for rendering the application.

#### 3. CDN – Content Delivery Network

A CDN is a network of distributed servers used to deliver files such as JavaScript, CSS, images, and other static assets.

React can be loaded using a CDN in a basic HTML application, for example:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

For this project, React will primarily be managed through the project's package manager and build setup.

#### 4. JavaScript DOM vs React

Traditional JavaScript can directly manipulate the DOM:

```js
const heading = document.createElement("h1");
heading.innerHTML = "Hello";
root.appendChild(heading);
```

React provides a component-based approach for building and updating user interfaces.

### Chapter 01 Topics Covered

- Basic HTML structure
- DOM manipulation
- `document.createElement()`
- `getElementById()`
- `appendChild()`
- Root element
- Introduction to React
- CDN and how libraries can be loaded
- Difference between direct DOM manipulation and React-based UI development

## 🛠️ Technologies

- React.js
- JavaScript
- HTML
- CSS
- Vite
- API Integration

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/pranjulpandey22/FoodieHub.git
```

Go to the project directory:

```bash
cd FoodieHub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🎯 Project Goal

The main goal of FoodieHub is to build a real-world food ordering application while progressively learning React concepts and applying them through hands-on development.

## 📈 Learning Progress

- [x] Chapter 01 – React Basics
- [ ] Chapter 02
- [ ] Chapter 03
- [ ] Chapter 04
- [ ] More React concepts and features

## 👨‍💻 Author

**Pranjul Pandey**

GitHub: https://github.com/pranjulpandey22
