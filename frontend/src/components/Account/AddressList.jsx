import React from 'react'
import { Address } from './Address';

export const AddressList = ({ address ,deleteAddress ,selectedAddressId,isCheckoutPage,handleAddress}) => {
    return (
        <div className="my-account__address-list ">
            {address.map((data) => {
                return (
                    <Address key={data._id} data={data} selectedAddressId={selectedAddressId} handleAddress={handleAddress} isCheckoutPage={isCheckoutPage} deleteAddress={deleteAddress} />
                );
            })}
        </div>
    )
}
