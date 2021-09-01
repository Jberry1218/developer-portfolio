import React from "react";
import { ChipIcon } from "@heroicons/react/solid";

const primarySkills = [
    {
        name: "Javascript",
        image: "./javascript.svg"
    },
    {
        name: "HTML5",
        image: "./html5.svg"
    },
    {
        name: "CSS3",
        image: "./css3.svg"
    },
    {
        name: "React",
        image: "./react.svg"
    },
    {
        name: "Redux",
        image: "./redux.svg"
    },
    {
        name: "Tailwind CSS",
        image: "./tailwindcss.svg"
    },
    {
        name: "Bootstrap",
        image: "./bootstrap.svg"
    },
    {
        name: "Express",
        image: "./express.svg"
    },
    {
        name: "MongoDB",
        image: "./mongodb.svg"
    },
    {
        name: "Node.js",
        image: "./nodejs.svg"
    },
]

const secondarySkills = [
    {
        name: "Python",
        image: "./python.svg"
    },
    {
        name: "Django",
        image: "./django.svg"
    },
    {
        name: "SQL Server",
        image: "./microsoftsqlserver.svg"
    },
    {
        name: "C",
        image: "./c.svg"
    },
    {
        name: "Flask",
        image: "./flask.svg"
    }
]

class Skills extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <section id="skills-section" className="text-deep-blue relative border-double border-t-8 border-deep-blue mx-10">
                <a id="skills" className="absolute -top-12"></a>
                <div className="container sm:px-10 py-10 mx-auto text-center">
                    <div className="text-center mb-10">
                        <ChipIcon className="w-10 inline-block mb-4" />
                        <h1 className="text-4xl mb-4 font-medium">
                        Languages / Technologies
                        </h1>
                        <p className="mb-8 leading-6">
                        I am primarily a Javascript developer, and my current studies and projects focus on the MERN stack. 
                        However, there are several "secondary" technologies, which I have utilized in past projects.
                        </p>
                    </div>
                    <h2 className="text-3xl mb-4 font-medium">Primary Technologies</h2>
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2">
                    {primarySkills.map((skill) => (
                        <div key={skill.name} className="p-2 w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="bg-cream rounded flex p-4 h-full items-center justify-center group hover:bg-white border-4 border-deep-green">
                                <img alt={skill.name} src={skill.image} className="relative group-hover:opacity-10">
                                </img>
                                <h2 className="absolute text-2xl text-deep-blue font-medium opacity-0 group-hover:opacity-100">{skill.name}</h2>
                            </div>
                        </div>
                    ))}
                    </div>
                    <h2 className="mt-5 text-3xl mb-4 font-medium">Secondary Technologies</h2>
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2">
                    {secondarySkills.map((skill) => (
                        <div key={skill.name} className="p-2 w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="bg-cream rounded flex p-4 h-full items-center justify-center group hover:bg-white border-4 border-deep-green">
                                <img alt={skill.name} src={skill.image} className="relative group-hover:opacity-10">
                                </img>
                                <h2 className="absolute text-2xl text-deep-blue font-medium opacity-0 group-hover:opacity-100">{skill.name}</h2>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;