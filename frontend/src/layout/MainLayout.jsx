import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import { Home } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Shop/>
            </main>
            <Footer />
        </>
    );
}   