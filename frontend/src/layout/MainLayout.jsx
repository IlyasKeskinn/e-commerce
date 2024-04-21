import { Footer } from "../components/footer/Footer";
import {Header} from "../components/header/Header"
import {Outlet} from "react-router-dom";
export const MainLayout = () => {
    return (
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}