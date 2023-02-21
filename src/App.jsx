import React from 'react'
import Intro from './components/Intro'
import NavBar from "./components/NavBar";
import Registration from './components/Registration';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Registration />
    </div>
  )
}

export default App
