import React from 'react'

export const CheckoutStepsItem = (props) => {
    return (
        <a href="#" className="checkout-steps__item active">
            <span className="checkout-steps__item-number">{props.number}</span>
            <span className="checkout-steps__item-text">
                <span className="text-uppercase fw-normal">{props.title}</span>
                <em className="text-capitalize text-secondary">{props.desc}</em>
            </span>
        </a>
    )
}
