import React, { useEffect, useState } from 'react'
import { FormInput } from '../Inputs/FormInput'
import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Spin, message } from 'antd';


export const ResetPasswordForm = () => {

    const token = useParams().token;
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordAgainError, setPasswordAgainError] = useState("");
    const postURL = `/auth/reset_password/${token}`
    const { data, isLoading, error, updateData } = useFetch(postURL, "PUT");


    const setOnChangePassword = (e) => {
        setPassword(e)
    }
    const setOnChangeMail = (e) => {
        setEmail(e)
    }
    const setOnChangeAgainPassword = (e) => {
        setPasswordAgain(e)
    }




    const submitReset = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            return setPasswordError("Password must be more than 8 characters.");
        } else {
            setPasswordError("")
        }
        if (passwordAgain.length < 8) {
            return setPasswordAgainError("Password must be more than 8 characters.");
        } else {
            setPasswordAgainError("")
        }
        if (passwordAgain !== password) {
            return setPasswordAgainError("Passwords do not match!")
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return setEmailError("Invalid mail format.");
        }
        const formData = { email: email, password: password, password_again: passwordAgain }
        updateData(formData);

        setEmailError("")
        setPasswordAgainError("");
        setPasswordError("")
    }

    useEffect(() => {
        if (data && data.email) {
            message.success("Your password has been successfully reset. You can now log in.");
            setEmail("");
            setPassword("");
            setPasswordAgain("");
            navigate("/login_register");
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
                        <FormInput value={password} validationError={passwordError} type={"password"} handleInput={setOnChangePassword} inputName="password" text="password" required />
                    </div>
                    <div className="col-12">
                        <FormInput value={passwordAgain} validationError={passwordAgainError} type={"password"} handleInput={setOnChangeAgainPassword} inputName="password_again" text="password again" required />
                    </div>
                    <div className="col-12">
                        <button type='submit' className="button btn-primary w-100">Reset Password</button>
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

