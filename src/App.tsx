import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div
        id="main"
        className="border-4 border-black border-solid p-1 flex items-center justify-between"
      >
        <div
          id="flex-1"
          className="border-4 border-black border-solid p-1 flex-1 text-left"
        >
          Flex 1
        </div>
        <div id="flex-2" className="border-4 border-black border-solid p-1">
          Flex 2
        </div>
        <div
          id="flex-3"
          className="border-4 border-black border-solid p-1 text-center flex-1"
        >
          Flex 3
        </div>
      </div>
    </div>
  );
}

export default App;
