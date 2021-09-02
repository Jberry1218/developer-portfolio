import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/solid";

class About extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            home: true
        };
        this.changeView = this.changeView.bind(this);
    }
    changeView() {
        this.setState((state) => ({
            home: !state.home
        }));
    }
    render () {
        return (
            <section id="about-section" className="relative text-deep-blue">
                <a id="about" className="absolute -top-12"></a>
                <div className={this.state.home ? "visible" : "hidden"}>
                    <div class="container flex mx-auto px-2 sm:px-10 py-32 flex-col items-center">
                        <div class="h-16 sm:h-32" />
                        <div class="w-1/4 run-wobble">
                            <img src="./avatar.png" alt="logo" className="mx-auto h-16 sm:h-32" />
                        </div>
                        <span class="text-2xl sm:text-5xl mt-3 text-center">
                            My name is John Berry,
                        </span>
                        <span class="text-2xl sm:text-5xl text-center">
                            and I am an aspiring software engineer
                        </span>
                        <div className="flex justify-center items-center mt-3">
                            <a href="https://www.linkedin.com/in/jonathan-taylor-berry/" target="_blank" className="border-0 mt-1 py-1 hover:bg-cream rounded">
                                <img className="object-contain w-14 h-10" alt="linkedin" src="./linkedin.png"></img>
                            </a>
                            <a href="https://github.com/Jberry1218" target="_blank" className="border-0 mt-1 py-1 hover:bg-cream rounded">
                                <img className="object-contain w-14 h-10" alt="github" src="./github.png"></img>
                            </a>
                            <a href="John_Berry_Resume.pdf" download="John_Berry_Resume.pdf" target="__blank">
                                <button className="flex border border-deep-blue bg-cream hover:bg-primary-green font-bold py-2 px-4 rounded">
                                    <img src="./download.png" alt="download" className="w-6 mr-2"></img>
                                    Resume
                                </button>
                            </a>
                        </div>
                        <button 
                            class="mt-3 text-lg font-bold text-deep-green"
                            onClick={() => this.changeView()}
                            >
                            Learn more about me
                            <ArrowRightIcon className="h-4 w-4 ml-1 inline"/>
                        </button>
                    </div>
                </div>
                <div className={this.state.home ? "hidden" : "visible"}>
                    <div className="container flex flex-col px-2 sm:px-10 py-10 items-center text-center mx-auto">
                        <h3 className="text-2xl mb-3 font-medium">I am an aspiring software engineer</h3> 
                        <p className="leading-6 mb-3">
                        I was born and raised in New Jersey, and I graduated with a degree in mathematics from Williams College in 2016 with cum laude honors.
                        </p>
                        <p className="leading-6 mb-3">
                        After college, I spent two years as a product / data analyst at Plymouth Rock, a Boston-based auto and home insurance company.</p>
                        <p className="leading-6 mb-3">
                        In 2018, I moved to Austin, Texas and began working for Navidar, a software-focused investment banking firm. I have spent the last three years as an investment banker, advising software companies on M&A and capital raise transactions. </p>
                        <p className="leading-6 mb-3">
                        While working with these software companies, I grew increasingly curious about software development and began studying the subject in my free time. My part-time studies confirmed my passion for web development, so I recently quit my job in finance to develop my technical abilities full-time.</p>
                        <p className="leading-6 mb-3">
                        I have completed several independent projects, which you can find below. I have also completed Harvard's CS50X, Harvard's CS50 Web Programming, and five Javascript-focused web development courses offered through freeCodeCamp.</p>
                        <h4 className="text-xl mb-3 font-medium italic">I am actively seeking an entry-level software engineering position in web development. I believe that my professional and academic experience will enable me to become a successful software engineer.</h4> 
                        <button 
                            class="text-lg font-bold text-deep-green"
                            onClick={() => this.changeView()}
                            >
                            <ArrowLeftIcon className="h-4 w-4 mr-1 inline"/>
                            Back
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;