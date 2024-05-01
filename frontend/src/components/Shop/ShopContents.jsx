import { ShopSettings } from "./ShopSettings";
import { Products } from "../Product/Products";
import { Pagination } from "../Pagination/Pagination";

export const ShopContents = ({products, maincat,subcat}) => {
  
    return (
        <section className="shop-main d-flex justify-content-center align-items-center">
            <div className="container">
                <ShopSettings subcat={subcat} maincat={maincat} />
                <Products products={products} />
                <Pagination/>
            </div>
        </section>
    );
}