import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import {AsideLayout} from "./AsideLayout"
import { Home } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import { ShopingCart } from "../pages/ShopingCart/ShopingCart";
import { ShopCheckout } from "../pages/ShopCheckout/ShopCheckout";
import { ShopComplete } from "../pages/ShopComplete/ShopComplete";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <ShopComplete/>
            </main>
            <AsideLayout/>
            <Footer />
        </>
    );
}   