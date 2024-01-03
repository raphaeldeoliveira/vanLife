import React from "react";

import Button from "../molecules/home/Button";

export default function Home() {


    return (
        <div className="home">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Button 
                bgColor="#ff9100"
                title="Find your van"
                to="./vans"
            />
        </div>
    )
}