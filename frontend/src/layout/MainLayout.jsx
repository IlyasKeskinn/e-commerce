import { Footer } from "../components/footer/Footer";
import {Header} from "../components/header/Header"
import {Outlet} from "react-router-dom";
import { Slider } from "../components/sliders/Slider";
export const MainLayout = () => {
    return (
        <>
        <Header/>
        <main>
            <Slider/>
        </main>
        <Footer/>
        </>
    );
}