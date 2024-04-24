import { ShopSettings } from "./ShopSettings";
import { Products } from "../Product/Products";
import { Pagination } from "../Pagination/Pagination";

export const ShopContents = () => {
    return (
        <section className="shop-main d-flex justify-content-center align-items-center">
            <div className="container">
                <ShopSettings />
                <Products />
                <Pagination/>
            </div>
        </section>
    );
}