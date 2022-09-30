import React from "react";
import Foot from "../Foot";
import { Container } from "react-bootstrap";
import cart from '/home/faiyaaz/the-odin-project/personal-page/src/assets/gifs/Shopping cart.gif'
import game from '/home/faiyaaz/the-odin-project/personal-page/src/assets/gifs/memory-game.gif'
import ttt from '/home/faiyaaz/the-odin-project/personal-page/src/assets/gifs/Tictactoe.gif'
import '../Styles/Projects.scss'

function Projects() {
    return (
        <main>
            <Container>
            <h1>Projects</h1>
            <div className="project-card">
                <h3><u>Store with cart</u></h3>
                <p>E-commerce site with a basic Cart</p>
                <img src={cart} alt="gif of shopping cart project"></img>
                <br></br>
                <a className="link" href="https://react-shopping-cart-3hjk.vercel.app/">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/React-shopping-cart">Link to Repo</a>
            </div>
            <div className="project-card">
                <h3><u>Memory Game</u></h3>
                <p>Simple game of recollection. Select each character once 
                <br></br>while the deck gets shuffled. Not yet optimized for mobile</p>
                <img src={game} alt="gif of memory game"></img>
                <br></br>
                <a className="link" href="https://react-memory-game-eta.vercel.app/">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/React-memory-game">Link to Repo</a>
            </div>
            <div className="project-card">
                <h3><u>JavaScript Tic-Tac-Toe</u></h3>
                <p>Simple way to play tic-tac-toe using JavaScript</p>
                <img src={ttt} alt="gif of tic tac toe game"></img>
                <br></br>
                <a className="link" href="https://faiyaazhawk.github.io/javascript-tictactoe/">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/javascript-tictactoe">Link to Repo</a>
            </div>
            <Foot/>
            </Container>
        </main>
    )
}

export default Projects;