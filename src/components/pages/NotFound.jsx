import React from "react";
import Button from "../molecules/home/Button";

export default function NotFound() {

    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Button 
                title="Return to home"
                bgColor="#000000"
                to="/"
            />
        </div>
    )
}