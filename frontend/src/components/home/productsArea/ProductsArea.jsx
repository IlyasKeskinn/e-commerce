import { Products } from "../../products/Products";

export const ProductsArea = () => {
    return (
        <section className=" my-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <h2 className="text-uppercase section-title text-center fw-normal my-4">OUR TRENDY <strong>PRODUCTS</strong>
                </h2>
                <ul className="nav nav-tab text-uppercase mb-5 d-flex align-items-center justify-content-center">
                    <li className="nav-item">
                        <a id="collections-tab-1-trigger" className="nav-link nav-link-underscore active">All</a>
                    </li>
                    <li className="nav-item ">
                        <a id="collections-tab-2-trigger" className="nav-link nav-link-underscore ">New Arrivals</a>
                    </li>
                    <li className="nav-item">
                        <a id="collections-tab-3-trigger" className="nav-link nav-link-underscore ">Best Seller</a>
                    </li>
                    <li className="nav-item">
                        <a id="collections-tab-4-trigger" className="nav-link nav-link-underscore ">Top Rated</a>
                    </li>

                </ul>
                <Products/>
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
                <div className="text-center my-5 pt-5">
                    <a href="#" className="btn btn-outlined">Disccover More</a>
                </div>
            </div>
        </section>

    );
}