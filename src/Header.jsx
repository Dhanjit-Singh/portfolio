import React from "react";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg sticky-top">
                <div class="container">
                    <Link class="navbar-brand fw-bold" to="/">Home</Link>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/service">Services</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/portfolio">Portfolio</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;