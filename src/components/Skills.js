import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

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
        name: "Tailwind CSS",
        image: "./tailwindcss.svg"
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
        name: "NodeJS",
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
        name: "Bootstrap",
        image: "./bootstrap.svg"
    },
    {
        name: "Microsoft SQL Server",
        image: "./microsoftsqlserver.svg"
    }
]

class Skills extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <section id="skills-section" className="relative">
                <a id="skills" className="absolute -top-12"></a>
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-10">
                        <ChipIcon className="w-10 inline-block mb-4" />
                        <h1 className="text-4xl mb-4 text-white font-medium">
                        Languages / Technologies
                        </h1>
                        <p className="mb-8 leading-6">
                        I am primarily a Javascript developer and my current studies / projects focus on the MERN stack. 
                        However, there are several "secondary" technologies, which I have utilized in past projects.
                        </p>
                    </div>
                    <h2 className="text-3xl mb-4 text-white font-medium">Primary Technologies</h2>
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2">
                    {primarySkills.map((skill) => (
                        <div key={skill.name} className="p-2 w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center justify-center group hover:bg-gray-200">
                                <img alt={skill.name} src={skill.image} className="relative group-hover:opacity-10">
                                </img>
                                <h2 className="absolute text-2xl text-gray-800 font-medium opacity-0 group-hover:opacity-100">{skill.name}</h2>
                            </div>
                        </div>
                    ))}
                    </div>
                    <h2 className="mt-5 text-3xl mb-4 text-white font-medium">Secondary Technologies</h2>
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2">
                    {secondarySkills.map((skill) => (
                        <div key={skill.name} className="p-2 w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center justify-center group hover:bg-gray-200">
                                <img alt={skill.name} src={skill.image} className="relative group-hover:opacity-10">
                                </img>
                                <h2 className="absolute text-2xl text-gray-800 font-medium opacity-0 group-hover:opacity-100">{skill.name}</h2>
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