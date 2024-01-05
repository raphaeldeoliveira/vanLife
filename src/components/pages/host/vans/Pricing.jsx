import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {

    const currentVan = useOutletContext()

    return (
        <h2 className="pricing-price">${currentVan.vanPrice}/{currentVan.typeLocation}</h2>
    )
}