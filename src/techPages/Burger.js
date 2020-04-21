import React from "react";
import "../styles/spec.css";
import Preview from "../img/burger.gif";
import heroku from "../img/heroku-logo-solid-white-transparent.png";
import github from "../img/GitHub-Mark-Light-32px.png";

let Burger = () => {
    return (
        <div className="container specs">
            <div className="row project">
                <div className="col">
                        <h1>Fries With That?</h1>
                        <p></p>
                </div>
            <div className="row buttons">
                        <div className="col small-4">
                            <a href='https://joshfdesign-fries-with-that.herokuapp.com/' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={heroku} alt="heroku logo"></img>Heroku Deployment</button></a>
                        </div>
                        <div className="col small-4">
                            <a href='https://github.com/JoshFrechette/Fries_With_That.git' target="_blank" rel="noopener noreferrer"><button className="button"><img className="buttonlogo" src={github} alt="github logo"></img>GitHub Repository</button></a>
                        </div>
            </div>
            <div className="row">
                <div className="col-lg-6 img">
                    <img className="preview" src={Preview} alt="gif of the app" />
                </div>
            </div>
                <div>
                    <h3>Technical Sheet</h3>
                    <p>Solo project, with an emphasis on ORMs, CRUDs, mySQL and Handlebars. The application allows the usser to enter any choice of burger and change it's status when it has been eaten.</p>
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
                        <li>Bootstrap</li>
                        <li>Handlebars</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>Sequelize, MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Burger;