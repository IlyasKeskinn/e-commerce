import React from 'react'
import {ResetPasswordForm} from './ResetPasswordForm'

export const ResetPassword = () => {
    return (
        <section className="login-register-section d-flex justify-content-center align-items-center ">
            <div className="container my-5 p-5">
                <h2 className="d-none">
                    Reset Password
                </h2>
                <ResetPasswordForm />
            </div>
        </section>
    )
}
