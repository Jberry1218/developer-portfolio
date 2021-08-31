import React from "react";
import Navbar from "./components/Navbar";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";


class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <main className="text-white bg-cream font-sans m-0 p-0">
        <Navbar />
        <AppBody />
        <Footer />
      </main>
    )
  }


}

export default App;
