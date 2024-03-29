import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/About.scss'
import { Container } from "react-bootstrap";
import resume from '../Faiyaaz_s_Resume.pdf'
import cartoon from '../assets/images/cartoon.jpg'
import vidar from '../assets/images/vidar.jpg'
import amatsu from '../assets/images/amatsu mina.jpg'
import cartoon2 from '../assets/images/cartoon2.jpg'
import cartoon3 from '../assets/images/cartoon3.jpg'
import fight from '../assets/images/fight.jpg'
import shot from '../assets/images/shot.jpg'



                  
          

function About() {
    return (
        <main>
          <Container>
            <h1>About Me</h1>
            <p>Hello there, I've gotten into software development as a hobby and thought "Why not make it a profession since you enjoy it so much?"
              So, here I am with a little website to showcase my endless journey so far. In my spare time, I like to make music and build Gundam plastic models(Gunpla). Click <a className="resume" href={resume} target="_blank" rel="noopener noreferrer"><strong>this link</strong></a> to have
              a look at my resume!
            </p>
            
            <h3>Here's what I know so far:</h3>
            <section>
                <ul>
                    <li>React <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></li>
                    <li>HTML5 <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"/></li>
                    <li>CSS3 <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"/></li>
                    <li>JavaScript <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/></li>
                    <li>TypeScript <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript"/></li>
                    <li>Node.js <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"/></li>
                    <li>Express <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express"/></li>
                    <li>Git <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/></li>
                    <li>SQL <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="Sql"/></li>
                    <li>Ruby <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby"/></li>
                    <li>Python <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"/></li>
                    <li>Webpack <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack"/></li>
                    <li>Linux <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux"/></li>
                </ul>
            </section>
            <h5>Some Gunpla I built and painted</h5>
            <Container>
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
      <Carousel.Item>
        <img
          className="photo"
          src={amatsu}
          alt="amatsu mina"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={cartoon2}
          alt="another bael in toon shade"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={cartoon3}
          alt="Bael in toon shade posing"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={fight}
          alt="painted rx72 and astaroth"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={shot}
          alt="gun shooting gundam"
        />

      </Carousel.Item>
      
    </Carousel>
    </Container>
    </Container>
        </main>
    )
}

export default About;