import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vansData, setVansData] = useState([]); // Inicializa como um array vazio

    useEffect(() => {
        fetch("http://localhost:8080/vans")
            .then(response => response.json())
            .then(data => setVansData(data))
            .catch(error => console.log("failed fetch", error));
    }, []);

    const vanElements = vansData.map((van) => (
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
            {vansData.length > 0 ? (
                <div className="vans-list">{vanElements}</div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}
