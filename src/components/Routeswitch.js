import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./Header"

function Routeswitch() {
    return (
        <BrowserRouter>
           <Header/>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
           </Routes>
        </BrowserRouter>
    )
}

export default Routeswitch;