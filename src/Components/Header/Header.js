import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from '../../assets/style/nav.module.css'

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Meal Db</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto custom-nav">
                            <NavLink
                                to="/"
                                className={(navInfo) => navInfo.isActive ? styles.activeNav : ""}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={(navInfo) => navInfo.isActive ? styles.activeNav : ""}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={(navInfo) => navInfo.isActive ? styles.activeNav : ""}
                            >
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header