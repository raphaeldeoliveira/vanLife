import React from "react";

import { Link } from "react-router-dom";

export default function Button(props) {
    return (
        <Link
            className="button-link"
            style={{ backgroundColor: props.bgColor }}
            to={props.to}
        >{props.title}
        </Link>
    )
}