import React from "react";

import Logo from "../atoms/header/Logo";
import Nav from "../molecules/header/Nav";

import "../../main.scss"

export default function Header() {

    return (
        <header>
            <Logo />
            <Nav />
        </header>
    )
}