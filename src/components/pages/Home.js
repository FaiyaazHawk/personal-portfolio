import React from "react";
import '../Styles/Home.scss'
import Foot from "../Foot";

function Home() {
    return (
        <>
            <main className="hero">
                <h1>Faiyaaz Haque</h1>
                <h3>Software Developer</h3>
                <span>
                    <button>Github</button>
                    <button>LinkedIn</button>
                    <button>Twitter</button>
                    <button>Gmail</button>
                </span>
            </main>
           <Foot/>
        </>
    )
}

export default Home;