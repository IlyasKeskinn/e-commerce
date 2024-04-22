import { Stars } from "./Stars"

export const ReviewsStars = () => {
    return (
        <div className="product-card__review d-flex align-items-center justify-content center">
            <div className="review-stars-group me-1 d-flex align-items-center ">
                <Stars active="true"/>
                <Stars active="true"/>
                <Stars active="true"/>
                <Stars active="true"/>
                <Stars active="false"/>
            </div>
            <span className="reviews-note text-lowercase text-secondary">
                8k+ reviews
            </span>
        </div>
    )
}
