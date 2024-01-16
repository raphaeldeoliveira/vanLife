import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export default function Nav() {
    return (
        <div>
            <NavLink 
                className={({isActive}) => isActive ? "link link--active" : "link"}
                to="/"
                >Home
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? "link link--active" : "link"}
                to="/about"
                >About
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? "link link--active" : "link"}
                to="/host"
                >Host
            </NavLink>
            <NavLink
                className={({isActive}) => isActive ? "link link--active" : "link"}
                to="/login"
                ><FaRegUserCircle />
            </NavLink>
        </div>
    )
}