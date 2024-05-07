import { Link, useNavigate, useParams } from "react-router-dom"
import "./AccountConfirm.css"
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { FormInput } from "../../components/Inputs/FormInput";
import { message } from "antd";


export const AccountConfirm = () => {

    const navigate = useNavigate();
    const id = useParams().id;
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const API_URL = import.meta.env.VITE_BASE_API_URL;
    const fetchURL = `/auth/confirm/${id}`;

    const setOnChangeMail = (e) => {
        const newEmail = e.trim();
        setEmail(newEmail);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return setEmailError("Invalid mail format.");
        }

        try {
            const response = await fetch(`${API_URL}${fetchURL}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ email: email })

            });
            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error)
            }
            message.success("Account successfully confirmed!");
            setEmail("");
            navigate("/login_register");

        } catch (error) {
            setLoading(false);
            setError(error);
        } finally {
            setLoading(false)
        }
        setEmailError("");
    }

    useEffect(() => {
        if (error) {
            message.error(error.message);
        }
    }, [error])


    return (
        <section className="account-confirm__section position-relative">
            <div className="mw-300 content d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-uppercase account-confirm__title mb-3">Confirm Your Account!</h2>
                <h2 className="text-uppercase fw-normal mb-3">Validate your account.</h2>
                <p className="text-capitalize text-center mb-3">To complete your registration, please fill the input and click the button below to confirm your account:</p>
                <form onSubmit={handleSubmit}>
                    <FormInput value={email} validationError={emailError} handleInput={setOnChangeMail} inputName="email" text="email" required />
                    <button type="submit" className={`btn-primary button text-uppercase ${isLoading ? "disabled" : ""}`}>Validate Account</button>
                </form>
            </div>
        </section>
    )
}
