import React, { useState } from 'react';
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
                Grupo 4
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul id= "botones" className={menuOpen ? "open" : ""}>
                <div class="dropdown">
                    <button class="dropbtn">Solicitante</button>
                    <div class="dropdown-content">
                    <NavLink to="/Create">About</NavLink>
                    <NavLink to="/Create">About</NavLink>
                    <NavLink to="/Create">About</NavLink>
                    <NavLink to="/Create">About</NavLink>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Empresa</button>
                    <div class="dropdown-content">
                    <NavLink to="/Create">About</NavLink>
                    <NavLink to="/Create">About</NavLink>
                    <NavLink to="/Create">About</NavLink>
                    <NavLink to="/Create">About</NavLink>
                    </div>
                </div>
            </ul>
        </nav>
    );
};
