import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import { AsideLayout } from "./AsideLayout"
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const MainLayout = () => {
    const [isAsideActice, setAsideActive] = useState(false);
    const [isAuthAsideActive, setAuthAsideActive] = useState(false);
    const [isCartAsideActive, setCartAsideActive] = useState(false);

    return (
        <div className="main-layout">
            {/* TODO: Refactor this section to make it cleaner and more readable */}
            <Header isAuthAsideActive={isAuthAsideActive} setAuthAsideActive={setAuthAsideActive} isCartAsideActive={isCartAsideActive} setCartAsideActive={setCartAsideActive} isAsideActice={isAsideActice} setAsideActive={setAsideActive} />
            <main>
                <Outlet />
            </main>
            {/* TODO: Refactor this section to make it cleaner and more readable */}
            <AsideLayout isAuthAsideActive={isAuthAsideActive} setAuthAsideActive={setAuthAsideActive} isCartAsideActive={isCartAsideActive} setCartAsideActive={setCartAsideActive} isAsideActice={isAsideActice} setAsideActive={setAsideActive} />
            <Footer />
        </div>
    );
}   