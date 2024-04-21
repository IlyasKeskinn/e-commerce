import React from 'react'
import { Checkbox } from '../../Inputs/Checkbox'
import { FormInput } from '../../Inputs/FormInput'

export const CheckoutForm = () => {
    return (
        <div className="form-row">
            <div className="col-6">
                <FormInput inputName="firstName" text="First Name" required />
            </div>
            <div className="col-6">
                <FormInput inputName="lastName" text="Last Name" required />
            </div>
            <div className="col-12">
                <FormInput inputName="companyName" text="Company Name" />
            </div>
            <div className="col-12">
                <FormInput inputName="streetaddress" text="Street Address" required />
            </div>
            <div className="col-12">
                <FormInput inputName="town" text="Town" required />
            </div>
            <div className="col-12">
                <FormInput inputName="postalCode" text="Postal Code" required />
            </div>
            <div className="col-12">
                <FormInput inputName="provience" text="provience" required />
            </div>
            <div className="col-12">
                <FormInput inputName="phone" text="Phone" required />
            </div>
            <div className="col-12">
                <FormInput inputName="mail" text="Mail" required />
            </div>
            <Checkbox inputName="createAnAccount" text="Create an account? " />
            <div className="col-12 my-5">
                <FormInput inputName="ordernote" text="Ordet Note" />
            </div>
        </div>
    )
}
