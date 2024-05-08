import React, { useEffect, useState } from 'react'
import { FormInput } from '../Inputs/FormInput'
import useFetch from '../../hooks/useFetch';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';


export const RegisterForm = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const fetchURL = "/auth/register";

    const { data, isLoading, error, postData } = useFetch(fetchURL, "POST")


    const setOnChangePassword = (e) => {
        const newPassword = e.trim();
        setPassword(newPassword);
    }

    const setOnChangeMail = (e) => {
        const newEmail = e.trim();
        setEmail(newEmail);

    }
    const setOnChangeUsername = (e) => {
        const newUser = e.trim();
        setUserName(newUser)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setPasswordError("Password must be more than 8 characters.");
        }
        if (userName.length < 3) {
            setUsernameError("Username must be more than 3 characters");
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return setEmailError("Invalid mail format.");
        }
        const formData = { userName: userName, email: email, password: password };
        postData(formData)
        setPasswordError("");
        setEmailError("");
        setUsernameError("")
    }

    useEffect(() => {
        if (data && data._id) {
            message.success("Your account has been created. You can log in by verifying your email.");
            setPassword("");
            setEmail("");
            setUserName("");
            navigate("/");

        }
        if (error) {
            message.error(error.message);
        }
    }, [data, error])
    return (
        <div className="register-form form">
            <form onSubmit={onSubmit} className="register-form form">
                <div className="col-12">
                    <FormInput value={userName} validationError={usernameError} handleInput={setOnChangeUsername} inputName="username" text="Username" required />
                </div>
                <div className="col-12">
                    <FormInput value={email} validationError={emailError} handleInput={setOnChangeMail} inputName="email" text="email" required />
                </div>
                <div className="col-12">
                    <FormInput validationError={passwordError} value={password} handleInput={setOnChangePassword} inputName="password" text="password" type='password' required />
                </div>
                <div className="col-12">
                    <p className="text-capitalize text-secondary">
                        Your personal data will be used to support your experience throughout this
                        website, to manage access to your account, and for other purposes described in
                        our privacy policy.
                    </p>
                </div>
                <div className="col-12 my-5">
                    <button type='submit' className={`button btn-primary w-100 ${isLoading ? "disabled" : ""}`}>Register</button>
                </div>

            </form>
        </div>

    )
}
