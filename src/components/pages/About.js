import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Foot from "../Foot";
import '../Styles/About.scss'
import { Container } from "react-bootstrap";
import cartoon from '/home/faiyaaz/the-odin-project/personal-page/src/assets/images/cartoon.jpg'
import vidar from '/home/faiyaaz/the-odin-project/personal-page/src/assets/images/vidar.jpg'


function About() {
    return (
        <main>
          <Container>
            <h1>About Me</h1>
            <p>Hi there, I've recently gotten into software developement as a hobby and thought "Why not make it a profession?"
              So, here I am with a little website to showcase my journey. In my spare time, I like to make music and build Gundam plastic models.
            </p>
            <h3>Here are the technologies I know</h3>
            <section>
                <ul>
                    <li>React <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></li>
                    <li>HTML5 <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"/></li>
                    <li>CSS3 <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"/></li>
                    <li>JavaScript <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/></li>
                    <li>Git <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/></li>
                    <li>SQL <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="Sql"/></li>
                    <li>Ruby <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby"/></li>
                    <li>Python <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"/></li>
                    <li>Webpack <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack"/></li>
                    <li>Linux <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux"/></li>
                    <li>VS Code <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode"/></li>
                    <li>Google DevTools <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google"/></li>
                </ul>
            </section>
            <Carousel fade className="carousel">
      
      <Carousel.Item>
        <img
          className="photo"
          src={cartoon}
          alt="Bael in toon shade"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="photo"
          src={vidar}
          alt="Vidar posing with his guns"
        />

      </Carousel.Item>
    </Carousel>
    <Foot/>
    </Container>
        </main>
    )
}

export default About;