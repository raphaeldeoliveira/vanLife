import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Button from "../../molecules/home/Button";

export default function VanDetail() {

    const [dataVan, setDataVan] = useState(null)

    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        fetch(`http://localhost:8080/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setDataVan(data))
        .catch(error => console.log(error))
    }, [params.id])

    return (
        <div className="vanDetail">
            <Link to={`../?${location.state.search}`} relative="path">&#x2190; Back to {location.state.search ? location.state.search.split('=')[1] : "all"} vans</Link>
            {(dataVan ? (
                <>
                    <img src={dataVan.urlImage} alt=""/>
                    <i
                        className={dataVan.vanCategory}
                    >{dataVan.vanCategory}</i>
                    <h1>{dataVan.vanName}</h1>
                    <h3>${dataVan.vanPrice}/<span>{dataVan.typeLocation}</span></h3>
                    <p>{dataVan.description}</p>
                    <Button 
                        title="Rent this van"
                        to="."
                        bgColor="#ff9100"
                    />
                </>
            ) 
            : (
                <h2>Loading...</h2>
            ))}
            
        </div>
    )
      
}