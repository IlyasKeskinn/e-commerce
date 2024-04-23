import { Outlet } from 'react-router-dom'
import { AccountNav } from '../components/Account/AccountNav/AccountNav'

export const AccountLayout = () => {
    return (
        <section className="my-account__section d-flex justify-content-center align-items-center ">
            <div className="container">
                <h3 className="page-title text-uppercase">My Account</h3>
                <div className="account-row">
                    <div className="col-3">
                        <AccountNav />
                    </div>
                    <div className="col-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    )
}
