import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {

    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/vans")
        .then(response => response.json())
        .then(data => setHostVans(data))
        .catch(error => console.log("failed fetch", error))
    }, [])

    const vans = hostVans.map((van) => (
        <Link to={`./${van.id}`} className="hostVans__card" key={van.id}>
            <img src={van.urlImage}/>
            <div>
                <h2 className="no-und">{van.vanName}</h2>
                <h3 className="no-und">${van.vanPrice}/{van.typeLocation}</h3>
            </div>
        </Link>
    ))

    return (
        <div className="hostVans">
            <h1>Your listed vans</h1>
            {vans}
        </div>

    )
}