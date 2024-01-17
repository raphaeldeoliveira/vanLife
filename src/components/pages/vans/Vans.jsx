import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
    return getVans()
    //throw new Error("This is an error")
}

export default function Vans() {

    //const [vansData, setVansData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    //const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const vansData = useLoaderData()

    /*useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVansData(data)
            } catch (error) {
                console.log("Error message below")
                console.log(error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, []);*/

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter 
        ?  vansData.filter(van => van.vanCategory.toLowerCase() === typeFilter.toLowerCase())
        : vansData

    const vanElements = displayedVans.map((van) => (
        <Link to={`./${van.id}`} className="van-card" key={van.id} state={{search: searchParams.toString()}}>
            <img src={van.urlImage} alt={van.vanName} />
            <div className="van-card__container">
                <h3>{van.vanName}</h3>
                <p>${van.vanPrice}<span>/{van.typeLocation}</span></p>
            </div>
            <i className={van.vanCategory}>{van.vanCategory}</i>
        </Link>
    ));

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
           if (value === null) {
              prevParams.delete(key)
           } else {
              prevParams.set(key, value)
           }
           return prevParams
        })
    }

    /*if (loading) {
        return <h1>Loading...</h1>
    }*/

    if (error) {
        return <h1>An error has ocurred: <br/> {error.message}</h1>
    }

    return (
        <div className="vans">
            <h1>Explore our vans options</h1>
            <nav className="navType">
                {/*<Link 
                    to="?type=Lauring"
                    className={typeFilter === "Lauring" ? "navType__link--active" : ""}
                >Lauring</Link>
                <Link 
                    to="?type=Explore"
                    className={typeFilter === "Explore" ? "navType__link--active" : ""}
                >Explore</Link>
                <Link 
                    to="?type=Reggae"
                    className={typeFilter === "Reggae" ? "navType__link--active" : ""}
                >Reggae</Link>
                <Link 
                    to="."
                >Clear</Link>*/}
                <button 
                    onClick={() => handleFilterChange("type", "Lauring")}
                    className={typeFilter === "Lauring" ? "navType__link--active" : ""}
                >Lauring</button>
                <button 
                    onClick={() => handleFilterChange("type", "Explore")}
                    className={typeFilter === "Explore" ? "navType__link--active" : ""}
                >Explore</button>
                <button 
                    onClick={() => handleFilterChange("type", "Reggae")}
                    className={typeFilter === "Reggae" ? "navType__link--active" : ""}
                >Reggae</button>
                <button 
                    onClick={() => setSearchParams({})}
                    style={{ display: typeFilter ? 'block' : 'none' }}
                >Clear</button>
            </nav>
            <div className="vans-list">{vanElements}</div>
            
        </div>
    );
}
