import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import {AsideLayout} from "./AsideLayout"
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
            <AsideLayout/>
            <Footer />
        </>
    );
}   