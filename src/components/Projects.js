import React from "react";
import { CogIcon } from "@heroicons/react/outline";

const projects = [
  {
    title: "GroceryPlanner",
    id: "grocery-planner",
    subtitle: "MERN / Redux",
    description:
      "GroceryPlanner is a responsive, mobile-first application that allows users to create grocery lists and save recipes, enabling a less cumbersome grocery shopping experience.",
    video: "./grocery-planner.mov",
    poster: "./grocery-planner.png",
    website: "https://jberry1218-grocery-planner.herokuapp.com/",
    github: "https://github.com/Jberry1218/grocery-planner"
  },
  {
    title: "Path Visualizer",
    id: "path-visualizer",
    subtitle: "Javascript / Path Algorithms",
    description:
      "Path Visualizer provides a visual representation of how different path algorithms traverse a graph in order to find a path from a start node to an end node.",
    video: "./path-visualizer.mov",
    poster: "./path-visualizer.png",
    website: "https://pedantic-fermat-fea217.netlify.app/",
    github: "https://github.com/Jberry1218/path-visualizer"
  },
  {
    title: "Art Gallery",
    id: "art-gallery",
    subtitle: "Django / HTML5 Canvas",
    description:
      "Art Gallery is a web application that allows users to create images in a paint environment. Users can then share their creations with other users by posting them and can view and like/unlike the posts of other users.",
    video: "./art-gallery.mov",
    poster: "./art-gallery.png",
    website: "https://jberry1218-art-gallery.herokuapp.com/",
    github: "https://github.com/Jberry1218/art-gallery"
  }
];

class Projects extends React.Component {
    constructor (props) {
        super (props);
    }
    playVideos() {
      for (let i = 0; i < projects.length; i++) {
        let video = document.querySelector(`#video${projects[i].id}`)
        video.play();
      }
    }
    componentDidMount() {
      this.playVideos();
    }
    render () {
        return (
            <section id="projects-section" className="text-deep-blue relative border-double border-t-8 border-deep-blue mx-10">
                <a id="projects" className="absolute -top-12"></a>
            <div className="container sm:px-10 py-10 mx-auto text-center">
              <div className="flex flex-col w-full">
                <CogIcon className="mx-auto w-10 mb-4" />
                <h1 className="text-4xl mb-4 font-medium">
                  My Projects
                </h1>
                <p className="mb-4 leading-6">
                  Below are some of the websites I have deployed.
                </p>
              </div>
              <div className="flex flex-wrap">
                {projects.map((project) => (
                  <div
                    key={project.video}
                    className="lg:w-1/2 w-100 px-4 pb-8">
                    <div className="flex h-80 relative border-8 border-deep-green">
                      <video
                        className="absolute inset-0 w-full h-full object-fill object-center"
                        playsinline autoplay muted loop
                        poster={project.poster}
                        id={`video${project.id}`}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                      <div className="flex flex-col justify-center relative z-10 w-full px-2 bg-deep-blue opacity-0 hover:opacity-100">
                        <h2 className="text-lg font-medium text-primary-green mb-1">
                          {project.subtitle}
                        </h2>
                        <h1 className="text-xl font-medium text-white mb-3">
                          {project.title}
                        </h1>
                        <p className="mb-3 text-white leading-6">{project.description}</p>
                        <div className="flex justify-center">
                          <div className="bg-deep-green p-2 hover:bg-white rounded text-white hover:text-primary-green">
                            <a className="inline" href={project.website} alt={project.title} target="__blank">
                              <span className="font-medium">
                              View Live Version
                              </span>
                            </a>
                          </div>
                          <div className="bg-deep-green p-2 hover:bg-white rounded text-white hover:text-primary-green ml-3">
                            <a className="inline" href={project.github} alt={project.title} target="__blank">
                              <span className="font-medium">
                              View On GitHub
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
    }
}

export default Projects;
