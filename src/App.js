import React from "react";
import Navbar from "./components/Navbar";
import AppBody from "./components/AppBody";


class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <main className="text-white bg-cream font-sans">
        <Navbar />
        <AppBody />
      </main>
    )
  }


}

export default App;
