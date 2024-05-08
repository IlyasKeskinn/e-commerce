import React, { useState } from 'react'
import { FormInput } from '../Inputs/FormInput'
import { Link } from 'react-router-dom';


export const ResetPasswordForm = () => {

    const apiUrl = import.meta.env.VITE_BASE_API_URL;

    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordAgainError, setPasswordAgainError] = useState("");

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
        
        setEmailError("")
        setPasswordAgainError("");
        setPasswordError("")
    }


    return (
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
    )
}

