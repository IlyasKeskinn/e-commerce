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
                    <form action="./" className="aside-content">
                        <div className="group">
                            <input type="text" id="usernameTxt" name="usernameTxt" />
                            <label htmlFor="usernameTxt" className="custom-label">Username or email *</label>

                        </div>
                        <div className="group">
                            <input type="password" id="usernameTxt" name="usernameTxt" />
                            <label htmlFor="usernameTxt" className="custom-label">Password *</label>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="input-check-box d-flex justify-content-start align-items-center">
                                <div className="group dummy-box">
                                    <label className="custom-label-checkbox" htmlFor="customCheckbox">
                                        <input type="checkbox" id="customCheckbox" />
                                        <span></span>
                                    </label>
                                </div>
                                <span className="checkbox-label-text">Remember Me!</span>
                            </div>
                            <a href="" className="text-underline text">Lost Password?</a>
                        </div>
                        <div className="buttonwrapper">
                            <button className="button btn-primary w-100">Log in</button>
                        </div>
                        <div className="customer-option text-center">
                            <span>No account yet?</span>
                            <a href="" className="text-underline text">Create an acount!</a>
                        </div>
                    </form>
                </div>
            </div>
        </aside>
    );
}