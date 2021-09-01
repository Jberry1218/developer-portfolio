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
            <div className="">
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        )
    }
}

export default AppBody;