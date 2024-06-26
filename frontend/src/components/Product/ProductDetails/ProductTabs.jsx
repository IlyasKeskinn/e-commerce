import { useState } from "react"
import { NavItem } from "../../NavTabs/NavItem"
import { Comments } from "../../Reviews/Comments";
import { AddReview } from "../../Reviews/AddReview";



export const ProductTabs = ({ desc , productId,reviews, handleUpdateComment}) => {
    const [activeTabs, setActiveTabs] = useState(0);
    const tabs = [
        { id: 0, text: "Description" },
        { id: 1, text: "Comments" }
    ];

    const [activeReviewTab, setActiveReview] = useState(0);
    const reviewTabs = [
        { id: 0, text: `Comments ( ${reviews.length} )` },
        { id: 1, text: "Write a comment" }
    ];

    return (
        <div className="product-single__tabs">
            <ul className="nav nav-tabs" id="myTabs1">
                {tabs.map((tab) => {
                    return <NavItem key={tab.id} navText={tab.text} navId={tab.id} isActive={activeTabs === tab.id} setActiveTabs={setActiveTabs} />
                })}
            </ul>
            <div className="tabcontent ">
                {tabs.map((tab => (
                    <div  key={tab.id} className={`tab-pane fade  ${activeTabs === tab.id ? "active" : ""} show`}>
                        {tab.id === 0
                            ?
                            (<div dangerouslySetInnerHTML={{ __html: desc }} className="product-single__description" />)
                            :
                            (
                                <div className="product-singe__reviews ">
                                    <ul className="d-flex justify-content-end">
                                        {reviewTabs.map((reviewTab) => {
                                            return <NavItem key={reviewTab.id} navText={reviewTab.text} navId={reviewTab.id} isActive={activeReviewTab === reviewTab.id} setActiveReview={setActiveReview} />
                                        })}
                                    </ul>
                                    {reviewTabs.map((reviewTab) => (
                                        <div key={reviewTab.id} className={`tab-pane fade ${activeReviewTab === reviewTab.id ? "active" : ""} show`}>
                                           { reviewTab.id === 0
                                            ?
                                            <Comments handleUpdateComment={handleUpdateComment} productId={productId} reviews={reviews}/>
                                            :
                                            <AddReview productId={productId} />}
                                        </div>
                                    ))
                                    }
                                </div>
                            )
                        }
                    </div>
                )))}
            </div >
        </div >
    )
}
