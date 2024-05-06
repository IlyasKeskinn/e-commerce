import React from "react";
import PageOverlay from "../components/PageOverlay/PageOverlay";
import AuthAside from "../components/Asides/AuthAside/AuthAside";
import ShoppingCartAside from "../components/Asides/CartAside/ShoppingCartAside"


export const AsideLayout = (props) => {
    return (
        <React.Fragment>
            <PageOverlay />
            <AuthAside />
            <ShoppingCartAside />
        </React.Fragment>
    );
}