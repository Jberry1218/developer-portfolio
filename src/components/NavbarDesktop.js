import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-20">
      <div className="container mx-auto flex flex-row p-5 items-center">
        <a className="font-medium text-white">
          <a href="#about" className="ml-3 text-xl">
            John Berry
          </a>
        </a>
        <nav className="flex mr-auto ml-4 pl-4 border-l border-gray-700">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#accomplishments" className="mr-5 hover:text-white">
            Accomplishments
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center mr-3 focus:outline-none hover:bg-gray-700">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}