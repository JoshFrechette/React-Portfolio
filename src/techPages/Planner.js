import React from "react";
import "../styles/spec.css";
import Preview from "../img/Planner.gif";

let Sched = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                    <div>
                        <h1>Work Day Planner</h1>
                        <p>An assignment from the UofT SCS Coding Bootcamp.</p>
                        <a href='https://joshfrechette.github.io/DayPlanDreamer/' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Page</button></a>
                        <a href='https://github.com/JoshFrechette/DayPlanDreamer.git' target="_blank" rel="noopener noreferrer"><button className="button">GitHub Repository</button></a>
                    </div>
                    <div className="img">
                        <img src={Preview} alt="gif of the app" />
                    </div>

                    <div>
                        <h3>Technical Sheet</h3>
                        <p>I was part of a 4 person team of students tasked with developing an original web application idea that integrated all of the coding concepts that we were taught thus far in the bootcamp.</p>
                        <hr></hr>
                        <p>

                        </p>
                    </div>

                    <div>
                        <h3>Technologies Used</h3>
                        <p>Code technologies and skills I was involved with using to complete the project.</p>
                        <ul className="tech">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>MaterializeCSS</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Mongoose, MongoDB</li>
                            <li>Auth0</li>
                        </ul>
                        <p>APIs used</p>
                        <ul className="tech">
                            <li>AuthenticJobs</li>
                            <li>GitHub API</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sched;