import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/host">Host</Link>
        </div>
    )
}