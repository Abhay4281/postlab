import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FloatingNav.css";

const FloatingNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (screen) => {
        navigate(screen);
    };

    return (
        <div className="floating-nav d-flex justify-content-center">
            <button
                className={`nav-btn mx-2 ${location.pathname === "/about" ? "active" : ""}`}
                onClick={() => handleClick("/about")}
            >
                About
            </button>
            <button
                className={`nav-btn mx-2 ${location.pathname === "/contact" ? "active" : ""}`}
                onClick={() => handleClick("/contact")}
            >
                Contact
            </button>
        </div>
    );
};

export default FloatingNav;
