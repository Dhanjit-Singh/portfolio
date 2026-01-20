import { React, useState } from "react";
import { Link } from 'react-router-dom';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
    };

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>Home</Link>
                    <button className="navbar-toggler" type="button" onClick={handleToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service" onClick={closeMenu}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects" onClick={closeMenu}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;