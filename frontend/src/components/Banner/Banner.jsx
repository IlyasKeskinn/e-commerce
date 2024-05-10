import { Link } from "react-router-dom";
import "./Banner.css"
export const Banner = ({ mainCategory, subcategories }) => {
    return (
        <section className="shop-banner d-flex justify-content-center align-items-center">
            <div className="container shop-banner-container h-md-100">
                <div >
                    <div className="shop-banner-row  position-relative">
                        <div className="background-img" style={{ backgroundImage: `url(./img/shoplist/shop_banner_2.png)` }} ></div>
                        <div className="shop-banner-content container">
                            <h3 className="shop-banner-title text-center text-uppercase fw-500">
                                <strong>{mainCategory}</strong>
                            </h3>
                            <ul className="shop-banner__items d-flex justify-content-center align-items-center my-5 ">
                                {subcategories.map((subcat) => {
                                    return (
                                        <li key={subcat._id} className="shop-banner__item">
                                            <Link to={`/shop/${subcat.seo_link}`} className="btn btn-outlined-half text-uppercase">
                                                {subcat.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


