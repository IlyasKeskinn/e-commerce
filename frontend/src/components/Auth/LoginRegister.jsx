import React, { useState } from 'react'
import  LoginForm  from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { NavItem } from '../NavTabs/NavItem'

export const LoginRegister = () => {
    const [activeTabs, setActiveTabs] = useState(0);

    return (
        <section className="login-register-section d-flex justify-content-center align-items-center ">
            <div className="container">
                <h2 className="d-none">
                    Login&Register
                </h2>
                <ul className="nav nav-tabs" id="myTabs">
                    <NavItem navText="Login" navId="loginTabs" tabIndex={0} isActive={activeTabs === 0} setActiveTabs={setActiveTabs} />
                    <NavItem navText="Register" navId="registerTabs" tabIndex={1} isActive={activeTabs === 1} setActiveTabs = {setActiveTabs} />
                </ul>
                <div className="tabcontent ">
                    <div className={`tab-pane fade ${activeTabs === 0 ? "active" : ""} show`} id="tab-description">
                        <LoginForm />
                    </div>
                    <div className={`tab-pane fade ${activeTabs === 1 ? "active" : ""} show`} id="tab-description">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
