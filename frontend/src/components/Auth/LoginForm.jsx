import React, { useState } from 'react'
import { FormInput } from '../Inputs/FormInput'
import { Checkbox } from '../Inputs/Checkbox'
import { Spin, message } from "antd";
import { setAuthUser } from '../../actions/authAction';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { setAuthAsideAction } from '../../actions/drawerAction';


const LoginForm = ({ dispatch }) => {

    const apiUrl = import.meta.env.VITE_BASE_API_URL;

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [rememberMe, setRememberMe] = useState("");
    const [isLoading, setLoading] = useState(false);

    const setOnChangePassword = (e) => {
        setPassword(e)
    }
    const setOnChangeMail = (e) => {
        setEmail(e)
    }
    const setOnChecked = (checked) => {
        setRememberMe(checked)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = { password: password, email: email, rememberMe: rememberMe }
        try {
            setLoading(true);
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
                dispatch(setAuthUser(user, authToken, formData));
                if (user.role === "admin") {
                    window.location.href = "/e-commerce/#/admin"
                }
                else {
                    window.location.href = "/e-commerce/#/"
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
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }


    return (
        <React.Fragment>

            <Spin spinning={isLoading} fullscreen />
            <div className="login-form form">
                <form onSubmit={handleLogin} className="login-form form">
                    <div className="col-12">
                        <FormInput value={email} type={"text"} handleInput={setOnChangeMail} inputName="email" text="email" required />
                    </div>
                    <div className="col-12">
                        <FormInput value={password} type={"password"} handleInput={setOnChangePassword} inputName="password" text="password" required />

                    </div>
                    <div className="col-12 input-check-box d-flex justify-content-between align-items-center">
                        <Checkbox setOnChecked={setOnChecked} inputName="rememberMe" text="Remember Me!" />
                        <Link onClick={() => { dispatch(setAuthAsideAction(false)) }} to={"/account/reset_password_request"} className="ms-3 btn btn-full active">Lost Password?</Link>
                    </div>
                    <div className="col-12">
                        <button type='submit' className="button btn-primary w-100">LOG IN</button>
                    </div>
                    <div className="col-12 my-5 d-flex justify-content-center align-items-center">
                        <span className="text-secondary text-capitalize">No account yet?</span>
                        <Link onClick={() => { dispatch(setAuthAsideAction(false)) }} to={"/login_register"} className="ms-3 btn btn-full active">Create Account</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default connect()(LoginForm)
