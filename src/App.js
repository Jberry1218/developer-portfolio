import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Academics from "./components/Academics";


class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <main className="text-gray-300 bg-green-800 font-sans">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Academics />
      </main>
    )
  }


}

export default App;
