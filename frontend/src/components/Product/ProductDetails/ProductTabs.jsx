import { useState } from "react"
import { NavItem } from "../../NavTabs/NavItem"
import { ReviewForm } from "../../Reviews/ReviewForm"
import { ReviewsStars } from "../../Reviews/ReviewsStars"

export const ProductTabs = () => {
    const [activeTabs, setActiveTabs] = useState(0);

    return (
        <div className="product-single__tabs">
            <ul className="nav nav-tabs" id="myTabs1">
                <NavItem navText="Description" navId="descriptionTabs"  tabIndex={0} isActive={activeTabs === 0} setActiveTabs={setActiveTabs} />
                <NavItem navText="Additional Information" navId="additionalInformationTabs"  tabIndex={1} isActive={activeTabs === 1} setActiveTabs={setActiveTabs} />
                <NavItem navText="Reviews" navId="reviewsTabs"  tabIndex={2} isActive={activeTabs === 2} setActiveTabs={setActiveTabs} />
            </ul>
            <div className="tabcontent ">
                <div className={`tab-pane fade ${activeTabs === 0 ? "active" : ""} show`}>
                    <div className="product-single__description">
                        <h3 className="text-uppercase fw-normal">
                            Sed do eiusmod tempor incididunt ut labore
                        </h3>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <div className="product-single_descrow my-5">
                            <div className="col-6">
                                <h3 className="text-uppercase fw-normal my-5">
                                    Why choose product?
                                </h3>
                                <ul className="product-single_desList">
                                    <li className="product-single_desListItem">
                                        Creat by cotton fibric with soft and smooth
                                    </li>
                                    <li className="product-single_desListItem">
                                        Simple, Configurable (e.g. size, color, etc.), bundled
                                    </li>
                                    <li className="product-single_desListItem">
                                        Downloadable/Digital Products, Virtual Products
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h3 className="text-uppercase fw-normal my-5">
                                    Sample Number List
                                </h3>
                                <ol className="product-single_desList">
                                    <li className="product-single_desListItem">
                                        Create Store-specific attrittbutes on the fly
                                    </li>
                                    <li className="product-single_desListItem">
                                        Simple, Configurable (e.g. size, color, etc.), bundled
                                    </li>
                                    <li className="product-single_desListItem">
                                        Downloadable/Digital Products, Virtual Products
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <h3 className="text-uppercase fw-normal mt-5">Lining</h3>
                        <p className="content ">
                            100% Polyester, Main: 100% Polyester.
                        </p>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTabs === 1 ? "active" : ""} show`}>
                    <div className="product-single__additionalInformation">
                        <div className="item">
                            <label className="fw-normal">Weight</label>
                            <span>1.25 kg</span>
                        </div>
                        <div className="item">
                            <label className="fw-normal">Dimensions</label>
                            <span>90 x 60 x 90 cm</span>
                        </div>
                        <div className="item">
                            <label className="fw-normal">Size</label>
                            <span>XS, S, M, L, XL</span>
                        </div>
                        <div className="item">
                            <label className="fw-normal">Color</label>
                            <span>Black, Orange, White</span>
                        </div>
                        <div className="item">
                            <label className="fw-normal">Storage</label>
                            <span>Relaxed fit shirt-style dress with a rugged</span>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTabs === 2 ? "active" : ""} show`} >
                    <div className="product-singe__reviews">
                        <h3 className="text-uppercase fw-normal my-5">
                            Reviews
                        </h3>
                        <ul className="review-list">
                        </ul>
                        <div className="review-form">
                            <form action="get">
                                <div className="review-form__info">
                                    <h5 className="text-capitalize fw-normal">Write a review</h5>
                                    <p className="text-capitalize text-secondary">
                                        Your email address will not be published. Required fields are marked *
                                    </p>
                                </div>
                                <div className="select-star-rating">
                                    <span className="fw-normal text-capitalize">Your Rating : </span>
                                    <ReviewsStars />
                                </div>
                                <ReviewForm />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
