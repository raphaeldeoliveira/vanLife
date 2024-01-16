import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {

    const error = useRouteError()
    console.log(error)

    return (
        <div>
            <h1>Error: {error.message}</h1>
            <code>{error.status} - {error.statusText}</code>
        </div>
    )
}