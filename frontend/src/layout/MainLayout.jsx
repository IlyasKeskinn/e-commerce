import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header"
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