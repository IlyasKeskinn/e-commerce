import React, { useEffect, useState } from 'react'
import useFetchWithToken from '../../../hooks/useFetchWithToken';
import { AddressList } from '../../Account/AddressList';
import { NotFoundAddress } from '../../Account/NotFoundAddress';
import { Reciept } from '../Reciept';
import { connect } from 'react-redux'
import { Skeleton, message } from "antd";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = ({ cart }) => {

    const API_URL = import.meta.env.VITE_BASE_API_URL;
    const MY_STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLISH_KEY
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";
    const fetchURL = `/user/getaddress/${user.user._id}`;
    const { data, isLoading, error } = useFetchWithToken(fetchURL, token,);
    const [address, setAddress] = useState([]);
    const [isUpload, setUpload] = useState(false);

    const [selectedAddressId, setSelectedAddressId] = useState("");
    const handleAddress = (id) => {
        setSelectedAddressId(id);
    }

    useEffect(() => {
        if (!isLoading && data && data.length >= 1) {
            setAddress(data)
            setSelectedAddressId(data[0]._id)
        }
    }, [data, isLoading]);

    useEffect(() => {
        if (error) {
            message.error(error);
        }
    }, [error]);

    const handlePayment = async () => {
        if (!user && !user.user && !user.user._id) {
            return window.location.href = "/cart"
        }

        const body = {
            "address": selectedAddressId,
            "user": user.user,
            "products": cart.cartItems
        }

        try {
            setUpload(true)
            const stripe = await loadStripe(MY_STRIPE_KEY);

            const res = await fetch(`${API_URL}/payment`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "token": token
                },
                body: JSON.stringify(body)
            })

            if (!res.ok) {
                return message.error("Payment transaction failed.");
            }

            const session = await res.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });
            if (result.error) {
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setUpload(false);
        }
    }
    return (
        <section className="checkout-section d-flex justify-content-center align-items-center my-5">
            <div className="container cart-container">
                <div className="checkout-cart__container ">
                    <div className="checkout-form">
                        <div className="checkout-cart__row">
                            <div className="billings-info__wrapper">
                                {isLoading &&
                                    <div className="page-content my-account__address">
                                        <div className="my-account__address-list ">
                                            <div className="my-account__address-item">
                                                <Skeleton active />;
                                            </div>
                                            <div className="my-account__address-item">
                                                <Skeleton active />;
                                            </div>
                                        </div>
                                    </div>
                                }
                                {!isLoading && address && address.length <= 0 &&
                                    <NotFoundAddress />
                                }
                                {address && address.length >= 1 &&
                                    <AddressList selectedAddressId={selectedAddressId} handleAddress={handleAddress} address={address} isCheckoutPage={true} />
                                }
                            </div>
                            <div className="shopping-cart__totals-wrapper">
                                <div className="sticky-content">
                                    <Reciept cart={cart} isCheckoutPage={true} />
                                    <div className="button__wrapper my-5 ">
                                        <button onClick={() => { handlePayment() }} className={`${isUpload ? "disabled" : ""} text-uppercase button btn-primary w-100`}>
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Checkout);
