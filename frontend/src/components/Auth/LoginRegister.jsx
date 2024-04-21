import React from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export const LoginRegister = () => {
    return (
        <section className="login-register-section d-flex justify-content-center align-items-center ">
            <div className="container">
                <h2 className="d-none">
                    Login&Register
                </h2>
                <ul className="nav nav-tabs" id="myTabs2">
                    <li className="nav-item">
                        <a href="#" className="btn btn-full text-uppercase text-secondary  active">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="btn btn-full text-uppercase text-secondary">
                            Register
                        </a>
                    </li>
                </ul>
                <div className="tabcontent ">
                    <div className="tab-pane fade active show" id="tab-description">
                       <LoginForm/>
                    </div>
                    <div className="tab-pane fade active! show" id="tab-description">
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
