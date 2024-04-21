import "./Banner.css"
export const Banner = () => {
    return (
        <section className="shop-banner d-flex justify-content-center align-items-center">
            <div className="container shop-banner-container h-md-100">
                <div >
                    <div className="shop-banner-row  position-relative">
                        <div className="background-img" style={{backgroundImage : `url(./img/shoplist/shop_banner_2.png)`}} ></div>
                        <div className="shop-banner-content container">
                            <h3 className="shop-banner-title text-center text-uppercase fw-500">
                                <strong>Shirts</strong>
                            </h3>
                            <ul className="shop-banner__items d-flex justify-content-center align-items-center my-5 ">
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half active text-uppercase">
                                        Shirts
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        New In
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        Jackets
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        Hodies
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        Men
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        Women
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        Trousers
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        Accessories
                                    </a>
                                </li>
                                <li className="shop-banner__item">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">
                                        Shoes
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


