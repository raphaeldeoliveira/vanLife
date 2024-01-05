import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {

    const currentVan = useOutletContext()

    return (
        <img className="photos-photo" src={currentVan.urlImage} />
    )
}