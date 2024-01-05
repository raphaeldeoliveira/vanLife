import React from "react";

export default function Detail() {

    return (
        <div className="card__main">
            <h5><span className="text-key">Name: </span>{vanData.vanName}</h5>
            <h5><span className="text-key">Category: </span>{vanData.vanCategory}</h5>
            <h5><span className="text-key">Description: </span>{vanData.description}</h5>
            <h5><span className="text-key">Visibility: </span>Public</h5>
        </div>
    )
}