import { useState } from "react"
import { NavItem } from "../../NavTabs/NavItem"
import { ReviewForm } from "../../Reviews/ReviewForm"
import { ReviewsStars } from "../../Reviews/ReviewsStars"

export const ProductTabs = ({desc}) => {
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
                    <div dangerouslySetInnerHTML={{__html : desc}} className="product-single__description"/>
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
