import { Link } from "react-router-dom";
import { Products } from "../../Product/Products";
import useFetch from '../../../hooks/useFetch';
import { ProductTabs } from "../../Product/ProductTabs";
import {ProductsSkelton} from "../../Skeltons/ProductsSkeleton"
export const ProductsArea = () => {
    const { data, isLoading, error, } = useFetch("/product/getproducts", "GET")


    if (isLoading) {
        return (
            <section className=" my-5 d-flex justify-content-center align-items-center">
                <div className="container">
                    <ProductTabs />
                    <ProductsSkelton/>
                    <Link to={"/shop"}>
                        <div className="text-center my-5 pt-5">
                            <a href="#" className="btn btn-outlined">Disccover More</a>
                        </div>
                    </Link>
                </div>
            </section>

        );
    }
    return (
        <section className=" my-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <ProductTabs />
                <Products products={data} />
                <div className="tab-content pt-2 ">
                    <div className="tab-pane fade active show" id="collections-tab-1" role="tabpanel"
                        aria-labelledby="collections-tab-1-trigger">
                        <div className="row product-list">
                        </div>
                    </div>
                    <div className="tab-pane fade" id="collections-tab-1" role="tabpanel"
                        aria-labelledby="collections-tab-2-trigger">
                        <div className="row new-product-list">
                        </div>
                    </div>
                    <div className="tab-pane fade" id="collections-tab-1" role="tabpanel"
                        aria-labelledby="collections-tab-3-trigger">
                        <div className="row best-product-list">
                        </div>
                    </div>
                    <div className="tab-pane fade" id="collections-tab-1" role="tabpanel"
                        aria-labelledby="collections-tab-4-trigger">
                        <div className="row top-product-list">
                        </div>
                    </div>
                </div>
                <Link to={"/shop"}>
                    <div className="text-center my-5 pt-5">
                        <a href="#" className="btn btn-outlined">Disccover More</a>
                    </div>
                </Link>
            </div>
        </section>

    );
}