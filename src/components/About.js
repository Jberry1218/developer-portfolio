import React from "react";

class About extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <section id="about-section" className="relative">
                <a id="about" className="absolute -top-12"></a>
                <div className="container flex mx-auto px-10 py-10 flex-col items-center md:flex-row md:justify-center">
                    <div className="flex flex-col mb-10 items-center text-center md:w-3/4">
                        <h3 className="text-2xl mb-4 text-deep-blue font-medium">I am an aspiring software engineer</h3> 
                        <p className="leading-6 text-deep-blue mb-4">
                        I was born and raised in New Jersey, and I graduated with a degree in mathematics from Williams College in 2016 with cum laude honors.
                        </p>
                        <p className="leading-6 text-deep-blue mb-4">
                        After college, I spent two years as a product / data analyst at Plymouth Rock, a Boston-based auto and home insurance company.</p>
                        <p className="leading-6 text-deep-blue mb-4">
                        In 2018 I moved to Austin, Texas and began working for Navidar, a software-focused investment banking firm. I have spent the last three years as an investment banker, advising software companies on M&A and capital raise transactions. </p>
                        <p className="leading-6 text-deep-blue mb-4">
                        While working with these software companies, I grew increasingly curious about software development and began studying the subject in my free time. My part-time studies confirmed my passion for web development, so I recently quit my job in finance to develop my technical abilities full-time.</p>
                        <p className="leading-6 text-deep-blue mb-4">
                        I have completed several independent projects, which you can find below. I have also completed Harvard's CS50X, Harvard's CS50 Web Programming, and five Javascript-focused web development courses offered through freeCodeCamp.</p>
                        <h4 className="text-xl text-deep-blue font-medium italic">I am actively seeking an entry-level software engineering position in web development. I believe that my professional and academic experience will enable me to become a successful software engineer.</h4> 
                    </div>
                    <div className="flex flex-col md:ml-20 justify-center border-4 border-deep-green py-5 px-5 bg-cream rounded-md">
                        <div>
                            <img className="object-contain border-2 border-deep-green rounded bg-deep-green" alt="headshot" src="./john-berry.png"></img>
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/jonathan-taylor-berry/" target="_blank" className="border-0 mt-1 py-1 hover:bg-cream rounded">
                                <img className="object-contain w-14 h-10" alt="linkedin" src="./linkedin.png"></img>
                            </a>
                            <a href="https://github.com/Jberry1218" target="_blank" className="border-0 mt-1 py-1 hover:bg-cream rounded">
                                <img className="object-contain w-14 h-10" alt="github" src="./github.png"></img>
                            </a>
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="John_Berry_Resume.pdf" download="John_Berry_Resume.pdf" target="__blank">
                                <button className="flex border border-deep-green bg-deep-green hover:bg-deep-blue text-cream font-bold py-2 px-4 rounded">
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