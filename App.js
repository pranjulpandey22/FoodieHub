import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/component/Header";
import Body from "./src/component/Body";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
