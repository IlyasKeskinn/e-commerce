import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import { AsideLayout } from "./AsideLayout"
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <AsideLayout />
            <Footer />
        </div>
    );
}   