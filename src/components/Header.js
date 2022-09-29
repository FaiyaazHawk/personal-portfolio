import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LinkContainer from "react-router-bootstrap/LinkContainer"

function Header() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand >Faiyaaz Haque</Navbar.Brand>
                    <Nav className="me-auto">
                    <LinkContainer to="/">
                         <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/About">
                        <Nav.Link>About</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/Projects">
                        <Nav.Link>Projects</Nav.Link>
                     </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;