import React from "react";
import '../Styles/Home.scss'
import Foot from "../Foot";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithubSquare, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";





function Home() {
    return (
        <>
            <main className="hero">
                <h1>Faiyaaz Haque</h1>
                <h3>Software Developer</h3>
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
                </span>
                
            </main>
           <Foot/>
        </>
    )
}

export default Home;