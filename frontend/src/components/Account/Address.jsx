import { Popconfirm, Radio } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Address = ({ data, deleteAddress, isCheckoutPage = false, selectedAddressId = "", handleAddress = () => { } }) => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];


    const handleClick = (id) => {
        deleteAddress(id)
    }

    const handleSelectAddress = (id) => {
        handleAddress(id);
    }

    return (
        <div key={data._id} className={`my-account__address-item`}>
            <div className={`address_wraper ${selectedAddressId && selectedAddressId === data._id ? "selected-address" : ""}`}>
                <div
                    className="my-account__address-item__title my-5 d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase-fw-normal w-75 truncate" >
                        {data.title}
                    </h6>
                    <div className='d-flex'>
                        <Link to={`/account/editaddress/${user.user._id}?addressId=${data._id}`} className="btn btn-full active">Edit</Link>
                        {!isCheckoutPage && <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => handleClick(data._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a className="btn btn-full active ms-3">Delete</a>
                        </Popconfirm>
                        }
                        {isCheckoutPage &&
                            <div className='ms-2'>
                                <Radio checked={selectedAddressId === data._id} onChange={() => handleSelectAddress(data._id)}></Radio>
                            </div>
                        }

                    </div>
                </div>
                <div className="my-account__address-item__detail">
                    <p>{data.name} {data.surname}</p>
                    <p>{data.address}</p>
                    <br></br>
                    <p>{data.phone}</p>
                </div>
            </div>
        </div>
    )
}
