import "./CheckoutSteps.css"
import { CheckoutStepsItem } from "./CheckoutStepsItem";


export const CheckoutSteps = () => {
    return (
        <div className="checkout-steps my-5">
            <CheckoutStepsItem number= "01" title="Shoping Bag" desc = "Manage Your Item List" />
            <CheckoutStepsItem number= "02" title="Shipping And Checkout" desc = "Checkout Your Item List" />
            <CheckoutStepsItem number= "03" title="Confirmation" desc = "Review And Submit Your Order" />
        </div>
    );
}
