import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    );
}   