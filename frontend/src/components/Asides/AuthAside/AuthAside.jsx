import { LoginForm } from "../../Auth/LoginForm";
import "./AuthAside.css"


export const AuthAside = ({ isAuthAsideActive, setAuthAsideActive, setAsideActive }) => {
    return (
        <aside className={`aside aside-right ${isAuthAsideActive ? "aside-visible" : ""}`} id="customerForms">
            <div className="customer-login__wraper position-relative d-flex justify-content-center">
                <div className="customer-login w-85">
                    <div className="aside-header d-flex align-items-center justify-content-between">
                        <h3 className="aside-title text-uppercase fw-normal">
                            Login
                        </h3>
                        <button className="aside-header-button">
                            <i className="bi bi-x" onClick={() => { setAuthAsideActive(false); setAsideActive(false) }}></i>
                        </button>
                    </div>
                   <LoginForm/>
                </div>
            </div>
        </aside>
    );
}