import React from "react";

export default function Button(props) {
    return (
        <button
            style={{ backgroundColor: props.bgColor }}
        >{props.title}</button>
    )
}