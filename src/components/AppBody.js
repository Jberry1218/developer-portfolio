import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Academics from "./Academics";

class AppBody extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="bg-primary-green m-4 sm:m-10 rounded-md main-shadow">
                <About />
                <Projects />
                <Skills />
                <Academics />
            </div>
        )
    }
}

export default AppBody;