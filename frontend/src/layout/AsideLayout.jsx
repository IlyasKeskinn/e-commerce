import {PageOverlay} from"../components/PageOverlay/PageOverlay";
import {AuthAside} from "../components/Asides/AuthAside/AuthAside";
import {ShoppingCartAside} from "../components/Asides/CartAside/ShoppingCartAside"

export const AsideLayout = () => {
    return (
        <>
            <PageOverlay />
            <AuthAside />
            <ShoppingCartAside />
        </>
    );
}