import { ShopCollection } from "../components/home/shopCollection/ShopCollection";
import { ProductCard } from "../components/productCard/ProductCard";
import { Slider } from "../components/sliders/Slider";

export const Home = () => {
    return (
        <>
            <Slider />
            <ShopCollection />
            <ProductCard/>
        </>
    );
}