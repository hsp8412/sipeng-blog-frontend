import React from 'react';
import "../css/nav.css"
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'



const MyNav = () => {
    return (
        <nav className="container">
            <ul>
                <li className="nav-icon-container">
                    <a className="nav-icon">
                        <FontAwesomeIcon icon={solid('earth-asia')} size='2x'/>
                    </a>
                </li>
                <li><a href="/" className="nav-content">Home</a></li>
                <li><a href="/" className="nav-content">About</a></li>
                <li><a href="/" className="nav-content">Contact</a></li>
            </ul>
        </nav>
    );
};

export default MyNav;
