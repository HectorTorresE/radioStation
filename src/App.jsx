import React from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header/>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
