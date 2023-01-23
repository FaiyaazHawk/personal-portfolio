import React from "react";
import { Container } from "react-bootstrap";
import cart from '../assets/gifs/Shopping cart.gif'
import game from '../assets/gifs/memory-game.gif'
import ttt from '../assets/gifs/Tictactoe.gif'
import vita from '../assets/gifs/vita-store.gif'
import portfolio from '../assets/gifs/portfolio.gif'
import messageboard from '../assets/gifs/message-board.gif'
import '../Styles/Projects.scss'

function Projects() {
    return (
        <main>
            <Container>
            <h1>Projects</h1>
            <div className="project-card">
                <h3><u>Message Board</u></h3>
                <p>Message board app with login authentication and posting feature. Built with Node.js, Express.Js, Mongoose, MongoDb, Pug and Passport.js </p>
                <img className="gif" src={messageboard} alt="gif of message board app"></img>
                <br></br>
                <a className="link" href="https://message-board-a9ln.onrender.com">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/message-board">Link to Repo</a>
            </div>
            <div className="project-card">
                <h3><u>Game Inventory</u></h3>
                <p>Game Inventory app with CRUD capability. Built with Node.js, Express.Js, Mongoose, MongoDb and Pug</p>
                <img className="gif" src={vita} alt="gif of game inventory app"></img>
                <br></br>
                <a className="link" href="https://vita-games-production.up.railway.app/">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/vita-games">Link to Repo</a>
            </div>
            <div className="project-card">
                <h3><u>Store with cart</u></h3>
                <p>E-commerce site with a basic Cart. Built with React, React-Bootstrap</p>
                <img className="gif" src={cart} alt="gif of shopping cart project"></img>
                <br></br>
                <a className="link" href="https://react-shopping-cart-3hjk.vercel.app/">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/React-shopping-cart">Link to Repo</a>
            </div>
            <div className="project-card">
                <h3><u>Memory Game</u></h3>
                <p>Simple game of recollection. Select each character once 
                <br></br>while the deck gets shuffled. Built using React.</p>
                <img className="gif" src={game} alt="gif of memory game"></img>
                <br></br>
                <a className="link" href="https://react-memory-game-eta.vercel.app/">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/React-memory-game">Link to Repo</a>
            </div>
            <div className="project-card">
                <h3><u>JavaScript Tic-Tac-Toe</u></h3>
                <p>Simple way to play tic-tac-toe using JavaScript</p>
                <img className="gif" src={ttt} alt="gif of tic tac toe game"></img>
                <br></br>
                <a className="link" href="https://faiyaazhawk.github.io/javascript-tictactoe/">Link to Demo</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/javascript-tictactoe">Link to Repo</a>
            </div>
            <div className="project-card">
                <h3><u>Portfolio website</u></h3>
                <p>Why not look at the code that I wrote for this site?</p>
                <img className="gif" src={portfolio} alt="gif of this site"></img>
                <br></br>
                <a className="link" href="https://personal-portfolio-beta-peach.vercel.app/">Link to Demo(...recursion)</a>
                <br></br>
                <a className="link" href="https://github.com/FaiyaazHawk/personal-portfolio">Link to Repo</a>
            </div>
            
            </Container>
        </main>
    )
}

export default Projects;