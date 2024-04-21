import React from 'react'
import { FormInput } from '../Inputs/FormInput'
import { Checkbox } from '../Inputs/Checkbox'

export const LoginForm = () => {
    return (
        <div className="login-form form">
            <form className="login-form form">
                <div className="col-12">
                    <FormInput inputName="email" text="email" required />
                </div>
                <div className="col-12">
                    <FormInput inputName="password" text="password" required />

                </div>
                <div className="col-12 input-check-box d-flex justify-content-between align-items-center">
                   <Checkbox inputName="rememberMe" text="Remember Me!"/>
                    <a href="#" className="checkbox-label-text btn btn-full active">Lost Password?</a>
                </div>
                <div className="col-12">
                    <button className="button btn-primary w-100">LOG IN</button>
                </div>
                <div className="col-12 my-5 d-flex justify-content-center align-items-center">
                    <span className="text-secondary text-capitalize">No account yet?</span>
                    <a href="#" className="checkbox-label-text btn btn-full active">Create Account</a>
                </div>
            </form>
        </div>
    )
}
