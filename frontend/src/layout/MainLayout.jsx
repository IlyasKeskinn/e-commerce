import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import { AsideLayout } from "./AsideLayout"
import { Outlet } from "react-router-dom";
import MobileHeader from "../components/Layout/Header/MobileHeader";
import { useEffect, useState } from "react";

export const MainLayout = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 990);
    };

    useEffect(() => {
        handleResize(); // İlk yükleme sırasında boyutu kontrol et
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="main-layout">
            {isMobile ? <MobileHeader /> : <Header />}
            <main>
                <Outlet />
            </main>
            <AsideLayout />
            <Footer />
        </div>
    );
}   