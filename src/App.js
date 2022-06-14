import React, { useState } from "react";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setCheck((prevCheck) => !prevCheck)}>
          {check.toString()}
        </button>
      </div>
    </>
  );
}

export default App;
