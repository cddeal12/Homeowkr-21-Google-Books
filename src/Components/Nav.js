import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item mx-auto active">
                    <p>Search</p>
                </li>
                <li className="nav-item mx-auto">
                    <p>Saved</p>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;