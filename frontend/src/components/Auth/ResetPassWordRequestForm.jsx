import React, { useEffect, useState } from 'react'
import { FormInput } from '../Inputs/FormInput'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Spin, message } from 'antd';


export const ResetPasswordRequestForm = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const postURL = `/auth/reset_password/request`;

    const { data, isLoading, error, postData } = useFetch(postURL, "POST");

    const setOnChangeMail = (e) => {
        setEmail(e)
    }

    const submitReset = async (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return setEmailError("Invalid mail format.");
        }
        const formData = { email: email }
        postData(formData);
        setEmailError("")

    }

    useEffect(() => {
        if (data && data.email) {
            message.success("Your password reset request has been accepted. Please check your email for further instructions.");
            setEmail("");
            navigate("/");
        }
        if (error) {
            message.error(error.message);
        }
    }, [data, error])


    return (
        <React.Fragment>

            <Spin spinning={isLoading} fullscreen />
            <div className="login-form form">
                <form onSubmit={submitReset} className="login-form form">
                    <div className="col-12">
                        <FormInput value={email} validationError={emailError} type={"text"} handleInput={setOnChangeMail} inputName="email" text="email" required />
                    </div>
                    <div className="col-12">
                        <button type='submit' className={`button btn-primary w-100 ${isLoading ? "disabled" : ""}`} >Send Mail</button>
                    </div>
                    <div className="col-12 my-5 d-flex justify-content-center align-items-center">
                        <span className="text-secondary text-capitalize">No account yet?</span>
                        <Link to={"/login_register"} className="checkbox-label-text btn btn-full active">Create Account</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
