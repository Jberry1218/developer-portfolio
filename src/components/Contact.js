import React from "react";
import { PhoneIcon, MailIcon, HomeIcon } from "@heroicons/react/solid";

class Contact extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <section id="contact-section" className="text-deep-blue relative border-double border-t-8 border-deep-blue mx-10">
                <a id="contact" className="absolute -top-12"></a>
                <div className="container flex mx-auto sm:px-10 py-10 flex-col items-center md:flex-row md:justify-center">
                    <div className="items-center w-full md:w-1/2">
                        <img className="" alt="texas" src="./texas.png"></img>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-10 justify-center border-4 border-deep-green py-5 px-5 bg-cream text-deep-blue rounded-md">
                        <span className="text-xl font-bold mb-3 text-center">Contact Me!</span>
                        <p className="mb-3 text-center">I am actively seeking an entry-level software engineering position in web development. 
                            I currently reside in Houston, TX, but I am open to remote and hybrid positions. 
                        </p>
                        <div className="bg-deep-blue text-white rounded-lg p-3 text-sm sm:text-md">
                            <div className="flex justify-center sm:justify-start mt-3 mb-3 items-center flex-wrap">
                                <div className="bg-deep-green rounded-full p-2 mr-3 h-10 w-10 flex">
                                    <MailIcon className="w-6" />
                                </div>
                                <span className="w-full sm:w-auto text-center mt-2 sm:mt-0">jonathanberry1218@gmail.com</span>
                            </div>
                            <div className="flex justify-center sm:justify-start mb-3 items-center flex-wrap">
                                <div className="bg-deep-green rounded-full p-2 mr-3 h-10 w-10">
                                    <PhoneIcon className="w-6" />
                                </div>
                                <span className="w-full sm:w-auto text-center mt-2 sm:mt-0">(973) 876-8512</span>
                            </div>
                            <div className="flex justify-center sm:justify-start mb-3 items-center flex-wrap">
                                <div className="bg-deep-green rounded-full p-2 mr-3 h-10 w-10 mt-1">
                                    <HomeIcon className="w-6" />
                                </div>
                                <span className="w-full sm:w-auto text-center sm:text-left mt-2 sm:mt-0">3833 Dunlavy St, Apt. 522<br />Houston, TX 77006</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;