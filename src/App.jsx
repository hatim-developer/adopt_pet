import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adapt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanas" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Boink" animal="cat" breed="Mix" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
