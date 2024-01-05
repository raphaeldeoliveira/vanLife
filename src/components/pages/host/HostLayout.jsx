import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {

    return (
        <div className="hostLayout">
            <nav>
                <NavLink 
                    className={({isActive}) => isActive ? "host-link--active host-link" : "host-link"}
                    end
                    to="/host"
                    >Dashboard
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "host-link--active host-link" : "host-link"}
                    to="/host/income"
                    >Income
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "host-link--active host-link" : "host-link"}
                    to="/host/vans"
                    >Vans
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "host-link--active host-link" : "host-link"}
                    to="/host/review"
                    >Review
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}