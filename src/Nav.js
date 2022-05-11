import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/">
                Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/resume">
                Resume
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/projects">
                Projects
                </a>
            </li>
           
            </ul>
        </div>
        </nav>
    );
}

export default Nav;