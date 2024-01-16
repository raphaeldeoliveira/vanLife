import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {

    const isLoggedIn = false
    if (!isLoggedIn) {
        <Navigate to="/login" />
    }
    return <Outlet />
    
}