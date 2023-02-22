import React from "react";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Registration />
      </div>
    </>
  );
}

export default App;
