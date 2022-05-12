import React from 'react';

function Nav () {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item"><a className="nav-link" href="/resume">Resum&eacute;</a></li>
                <li className="nav-item"><a className="nav-link" href="/projects">My Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>                
            </ul>
        </nav>
    );
}

export default Nav;