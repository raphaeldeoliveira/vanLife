import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {

    const [vansData, setVansData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        fetch("http://localhost:8080/vans")
            .then(response => response.json())
            .then(data => setVansData(data))
            .catch(error => console.log("failed fetch", error));
    }, []);

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter 
        ?  vansData.filter(van => van.vanCategory.toLowerCase() === typeFilter.toLowerCase())
        : vansData

    const vanElements = displayedVans.map((van) => (
        <Link to={`./${van.id}`} className="van-card" key={van.id}>
            <img src={van.urlImage} alt={van.vanName} />
            <div className="van-card__container">
                <h3>{van.vanName}</h3>
                <p>${van.vanPrice}<span>/{van.typeLocation}</span></p>
            </div>
            <i className={van.vanCategory}>{van.vanCategory}</i>
        </Link>
    ));

    return (
        <div className="vans">
            <h1>Explore our vans options</h1>
            <nav className="navType">
                <Link to="?type=Lauring">Lauring</Link>
                <Link to="?type=Explore">Explore</Link>
                <Link to="?type=Reggae">Reggae</Link>
                <Link to=".">Clear</Link>
            </nav>
            {vansData.length > 0 ? (
                <div className="vans-list">{vanElements}</div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}
