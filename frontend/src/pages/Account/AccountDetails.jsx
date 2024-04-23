import "./Account.css"
import { FormInput } from "../../components/Inputs/FormInput"
import { connect } from "react-redux"

export const AccountDetails = () => {
    return (
        <div className="page-content my-account__details">
            <form className="my-account__details-form">
                <div className="my-account__details-row">
                    <div className="my-account__details-wrapper">
                        <div className="col-6">
                            <FormInput inputName="firstName" text="First Name" required />
                        </div>
                        <div className="col-6">
                            <FormInput inputName="lastName" text="Last Name" required />
                        </div>
                        <div className="col-12">
                            <FormInput inputName="username" text="User Name" required />
                        </div>
                        <div className="col-12">
                            <FormInput inputName="email" text="email" required />
                        </div>
                        <div className="col-12">
                            <h3 className="my-5">Password Change</h3>
                        </div>
                        <div className="col-12">
                            <FormInput inputName="currentPassword" text="Current Password" required />
                        </div>
                        <div className="col-12">
                            <FormInput inputName="newPassword" text="New Password" required />
                        </div>
                        <div className="col-12">
                            <FormInput inputName="newPasswordConfirm" text="New Password Confirm" required />
                        </div>
                        <div className="col-12">
                            <button className="button btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

