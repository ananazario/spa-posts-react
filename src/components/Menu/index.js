import React from "react";
import MenuLink from "../MenuLink";
import * as C from "./style";

export default function Menu() {

    return (
        <header>
            <C.nav>
                <MenuLink to="/">Inicio</MenuLink>
                <MenuLink to="/sobremim">Sobre o React</MenuLink>
            </C.nav>
        </header>
    )
}