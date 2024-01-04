import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function HostLayout() {

    return (
        <div className="hostLayout">
            <nav>
                <Link className="host-link" to="/host">Dashboard</Link>
                <Link className="host-link" to="/host/income">Income</Link>
                <Link className="host-link" to="/host/review">Review</Link>
            </nav>
            <Outlet />
        </div>
    )
}