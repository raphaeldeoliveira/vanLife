import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Detail() {

    const currentVan = useOutletContext()

    return (
        <div className="card__main">
            <h5><span className="text-key">Name: </span>{currentVan.vanName}</h5>
            <h5><span className="text-key">Category: </span>{currentVan.vanCategory}</h5>
            <h5><span className="text-key">Description: </span>{currentVan.description}</h5>
            <h5><span className="text-key">Visibility: </span>Public</h5>
        </div>
    )
}