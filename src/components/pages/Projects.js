import React from "react";
import Foot from "../Foot";
import { Container } from "react-bootstrap";

function Projects() {
    return (
        <main>
            <Container>
            <h1>Projects</h1>
            <div className="project-card">
                <h3>Store with cart</h3>
                <p>project desciption</p>
                <img></img>
                <a>Link to Demo</a>
                <br></br>
                <a>Link to Repo</a>
            </div>
            <div className="project-card">
                <h3>Store with cart</h3>
                <p>project desciption</p>
                <img></img>
                <a>Link to Demo</a>
                <br></br>
                <a>Link to Repo</a>
            </div>
            <div className="project-card">
                <h3>Store with cart</h3>
                <p>project desciption</p>
                <img></img>
                <a>Link to Demo</a>
                <br></br>
                <a>Link to Repo</a>
            </div>
            <Foot/>
            </Container>
        </main>
    )
}

export default Projects;