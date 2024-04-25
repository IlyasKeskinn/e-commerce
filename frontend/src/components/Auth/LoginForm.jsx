import React, { useState } from 'react'
import { FormInput } from '../Inputs/FormInput'
import { Checkbox } from '../Inputs/Checkbox'
import { message } from "antd";
import { setAuthUser } from '../../actions/authAction';
import {connect} from "react-redux"


const LoginForm = ({dispatch}) => {

    const apiUrl = import.meta.env.VITE_BASE_API_URL;

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: "",
    });
    const setOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }
    const setOnChecked = (checked) => {
        setFormData({ ...formData, rememberMe: checked })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const authToken = response.headers.get("x-auth-token");
                const user = await response.json();
                dispatch(setAuthUser(user,authToken,formData));
                if (user.role === "admin") {
                    window.location.href = "/admin"
                }
                else {
                    window.location.href = "/"
                }
            }
            else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            if (message instanceof Error) {
                message.error(error)
            }
        }
    }


    return (
        <div className="login-form form">
            <form onSubmit={handleLogin} className="login-form form">
                <div className="col-12">
                    <FormInput type={"text"} setOnChange={setOnChange} inputName="email" text="email" required />
                </div>
                <div className="col-12">
                    <FormInput type={"password"} setOnChange={setOnChange} inputName="password" text="password" required />

                </div>
                <div className="col-12 input-check-box d-flex justify-content-between align-items-center">
                    <Checkbox setOnChecked={setOnChecked} inputName="rememberMe" text="Remember Me!" />
                    <a href="#" className="checkbox-label-text btn btn-full active">Lost Password?</a>
                </div>
                <div className="col-12">
                    <button type='submit' className="button btn-primary w-100">LOG IN</button>
                </div>
                <div className="col-12 my-5 d-flex justify-content-center align-items-center">
                    <span className="text-secondary text-capitalize">No account yet?</span>
                    <a href="#" className="checkbox-label-text btn btn-full active">Create Account</a>
                </div>
            </form>
        </div>
    )
}

export default connect()(LoginForm)
