import React from 'react'
import { ResetPasswordRequestForm } from './ResetPassWordRequestForm'

export const ResetPasswordRequest = () => {
    return (
        <section className="login-register-section d-flex justify-content-center align-items-center ">
            <div className="container my-5 p-5">
                <h2 className="d-none">
                    Reset Password
                </h2>
                <div className="col-12">
                    <p className="text-capitalize text-secondary">
                        Please provide your email address below. We will use this email to send you a password reset link. Make sure to check your inbox (and spam/junk folder) for the email. If you don't receive it within a few minutes, please try again or contact support
                    </p>
                </div>
                <ResetPasswordRequestForm />
            </div>
        </section>
    )
}

