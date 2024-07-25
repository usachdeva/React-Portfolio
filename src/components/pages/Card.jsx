import image1 from "../../assets/project-1.png";
import image2 from "../../assets/project-2.png";
import image3 from "../../assets/project-1.png";
import image4 from "../../assets/project-1.png";
import "../../assets/css/icon.css";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Cards() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 m-1">
            <div className="col">
                <div className="card">
                    <a
                        href="https://usachdeva.github.io/Task-Manager/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                    >
                        <img
                            src={image1}
                            className="card-img-top"
                            alt="project-1"
                        />
                        <div className="icon-container">
                            <a
                                className="icon"
                                href="https://github.com/usachdeva/Task-Manager"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <a
                        href="https://usachdeva.github.io/Weather-App/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                    >
                        <img
                            src={image2}
                            className="card-img-top"
                            alt="project-2"
                        />
                        <div className="icon-container">
                            <a
                                className="icon"
                                href="https://github.com/usachdeva/Weather-App"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img
                        src={image3}
                        className="card-img-top"
                        alt="project-3"
                    />
                    <div className="icon-container">
                        <a
                            className="icon"
                            href="https://github.com/usachdeva"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img
                        src={image4}
                        className="card-img-top"
                        alt="project-4"
                    />
                    <div className="icon-container">
                        <a
                            className="icon"
                            href="https://github.com/usachdeva"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
