import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Adopt Me!")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
