import React from 'react'
import { FormInput } from '../Inputs/FormInput'

export const RegisterForm = () => {
    return (
        <div className="register-form form">
            <form className="register-form form">
                <div className="col-12">
                    <FormInput inputName="username" text="Username" required />
                </div>
                <div className="col-12">
                    <FormInput inputName="email" text="email" required />
                </div>
                <div className="col-12">
                    <FormInput inputName="password" text="password" required />
                </div>
                <div className="col-12">
                    <p className="text-capitalize text-secondary">
                        Your personal data will be used to support your experience throughout this
                        website, to manage access to your account, and for other purposes described in
                        our privacy policy.
                    </p>
                </div>
                <div className="col-12 my-5">
                    <button className="button btn-primary w-100">Register</button>
                </div>

            </form>
        </div>

    )
}
