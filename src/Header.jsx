import React from 'react';
import whiteLogo from './assets/logo_white.png';
import helpIcon from './assets/help.png';


function Header({ onNavItemClick }) {
    
    return (
        <header>
            <nav className="navbar"> 
                <img className="logo-small" src={whiteLogo} alt="Logo" />
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#" onClick={() => onNavItemClick('todaysGame')}>Today's Game</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#" onClick={() => onNavItemClick('archive')}>Archive</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#" onClick={() => onNavItemClick('stats')}>Stats</a>
                    </li>
                </ul> 

                <div className="info-icon-container">
                <img className="info-icon" src={helpIcon} alt="Info" />
                    <div className="tooltip">
                        <p>How the game works:</p>
                        <ul>
                        <li>Guess the movie based on the clues.</li>
                        <li>Use the hints to narrow down your options.</li>
                        <li>Hover actor name to see a photo.</li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Header;