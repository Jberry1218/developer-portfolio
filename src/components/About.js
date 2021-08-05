import React from "react";

class About extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <section id="about-section" className="relative">
                <a id="about" className="absolute -top-12"></a>
                <div className="container flex mx-auto px-10 py-20 flex-col items-center md:flex-row md:justify-center">
                    <div className="flex flex-col mb-10 items-center text-center md:w-3/4">
                        <h1 className="text-4xl mb-4 text-white font-medium">My name is John Berry</h1>
                        <h3 className="text-2xl mb-4 text-white font-medium">I am a former finance professional and aspiring software engineer</h3> 
                        <p className="leading-6">
                            I have spent the last three years as an investment banker, advising software companies on M&A and capital raise transactions. 
                            While working with these software companies, I grew increasingly curious about software development and began studying the subject in my free time.
                            I recently quit my job in finance to pursue these studies in earnest.
                            I am currently seeking an entry-level web development role.  
                        </p>
                    </div>
                    <div className="flex flex-col md:ml-20 justify-center">
                        <div>
                            <img className="object-contain rounded-full" alt="headshot" src="./john-berry.jpeg"></img>
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/jonathan-berry-374662163/" target="_blank" className="bg-gray-200 border-0 mt-1 py-1 hover:bg-white rounded text-lg">
                                <img className="object-contain w-14 h-10" alt="linkedin" src="./linkedin.png"></img>
                            </a>
                            <a href="https://github.com/Jberry1218" target="_blank" className="ml-4 text-white bg-gray-200 border-0 mt-1 py-1 hover:bg-white rounded text-lg">
                                <img className="object-contain w-14 h-10" alt="github" src="./github.png"></img>
                            </a>
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="John_Berry_Resume.pdf" download="John_Berry_Resume.pdf" target="__blank">
                                <button className="flex bg-gray-200 hover:bg-white text-gray-900 font-bold py-2 px-4 rounded">
                                    <img src="./download.png" alt="download" className="w-6 mr-2"></img>
                                    Resume
                                </button>
                            </a>
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}

export default About;