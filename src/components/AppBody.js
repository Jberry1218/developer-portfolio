import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

class AppBody extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="bg-light-grey m-4 sm:m-10 rounded-md main-shadow">
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        )
    }
}

export default AppBody;