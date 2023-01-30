import React from "react";
import '../Styles/Home.scss'
import logo from "../assets/gifs/logo.gif"
import Foot from "../Foot";
import resume from '../Faiyaaz_s_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faGithubSquare, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";





function Home() {
    return (
        <>
            <main className="hero">
                
                <img className="p-logo" src={logo} alt="Faiyaaz's Logo"></img>
                
                
                <h1>Faiyaaz Haque</h1>
                <span>
                    Learn more about <a className="link" href="/About">me</a> and my <a className="link" href="/Projects">projects</a>
                </span>
                
                <span className="social-links">
                    <a className="link" href="https://twitter.com/fhwack" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="link" href="https://www.linkedin.com/in/faiyaaz-haque-b71b94241/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="link" href="https://github.com/FaiyaazHawk" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                    <a className="link" href="mailto:faiyaaz.haque90@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a className="link" href={resume} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileAlt} />
                    </a>
                </span>
                
            </main>
           <Foot/>
        </>
    )
}

export default Home;