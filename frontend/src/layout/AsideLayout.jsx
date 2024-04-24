import { PageOverlay } from "../components/PageOverlay/PageOverlay";
import { AuthAside } from "../components/Asides/AuthAside/AuthAside";
import ShoppingCartAside  from "../components/Asides/CartAside/ShoppingCartAside"
import { useState } from "react";

export const AsideLayout = (props) => {
    return (
        <>
            {/* TODO: Refactor this section to make it cleaner and more readable */}
            <PageOverlay isAsideActice={props.isAsideActice} />
            <AuthAside isAuthAsideActive={props.isAuthAsideActive} setAuthAsideActive={props.setAuthAsideActive} setAsideActive={props.setAsideActive} />
            <ShoppingCartAside isCartAsideActive={props.isCartAsideActive} setCartAsideActive={props.setCartAsideActive} setAsideActive={props.setAsideActive} />
        </>
    );
}