import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link, useParams, Outlet } from "react-router-dom";
import { getVans } from "../../../../api";

export function loader({ params }) {
    return getVans(params.id)
}

export default function HostVanLayout() {

    const [vanData, setVanData] = useState([])

    const parameters = useParams()

    useEffect(() => {
        fetch(`http://localhost:8080/vans/${parameters.id}`)
            .then(response => response.json())
            .then(data => setVanData(data))
            .catch(error => console.log("failed fetch", error))
    }, [parameters.id])

    return (
        <div className="hostVanDetail">
            <Link to=".." relative="path"><span>&#8592;</span> Back to all vans</Link>
            {(vanData ? (
                <div className="hostVanDetail__card">
                    <div className="card__header">
                        <img src={vanData.urlImage} alt=""/>
                        <div>
                            <h4 className={vanData.vanCategory}>{vanData.vanCategory}</h4>
                            <h2>{vanData.vanName}</h2>
                            <h3>${vanData.vanPrice}/{vanData.typeLocation}</h3>
                        </div>
                    </div>
                    <nav>
                        <NavLink
                            to="."
                            end
                            className={({isActive}) => isActive ? "host-link--active host-link" : "host-link"}
                        >Detail</NavLink>
                        <NavLink
                            to="pricing"
                            className={({isActive}) => isActive ? "host-link--active host-link" : "host-link"}
                        >Pricing</NavLink>
                        <NavLink
                            to="photos"
                            className={({isActive}) => isActive ? "host-link--active host-link" : "host-link"}
                        >Photos</NavLink>
                    </nav>
                    <Outlet context={ vanData } />
                </div>
            ) 
            : (
                <h2>Loading...</h2>
            ))}
        </div>
    )
}