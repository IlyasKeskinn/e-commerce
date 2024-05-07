import "./CheckoutSteps.css"


export const CheckoutSteps = ({ name }) => {

    let currentStep = 1

    switch (name) {
        case 'cart':
            currentStep = 1
            break;
        case 'checkout':
            currentStep = 2
            break;
        case 'confirmation':
            currentStep = 3
            break;
        default:
            currentStep = 1
    }


    return (
        <div className="checkout-steps my-5">
            <span className={`checkout-steps__item ${currentStep >= 1 ? "active" : false}`}>
                <span className="checkout-steps__item-number">01</span>
                <span className="checkout-steps__item-text">
                    <span className="text-uppercase fw-normal">Shopping Bag</span>
                    <em className="text-capitalize text-secondary">Manage Your Item List</em>
                </span>
            </span>
            <span className={`checkout-steps__item ${currentStep >= 2 ? "active" : false}`}>
                <span className="checkout-steps__item-number">02</span>
                <span className="checkout-steps__item-text">
                    <span className="text-uppercase fw-normal">Shipping And Checkout</span>
                    <em className="text-capitalize text-secondary">Checkout Your Item List</em>
                </span>
            </span>
            <span className={`checkout-steps__item ${currentStep >= 3 ? "active" : false}`}>
                <span className="checkout-steps__item-number">03</span>
                <span className="checkout-steps__item-text">
                    <span className="text-uppercase fw-normal">Confirmation</span>
                    <em className="text-capitalize text-secondary">Review And Submit Your Order</em>
                </span>
            </span>

        </div>
    );
}
