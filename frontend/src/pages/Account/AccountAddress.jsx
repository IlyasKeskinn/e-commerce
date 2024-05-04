import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Account.css"
import { Popconfirm, Skeleton, message } from "antd";
import { Link } from "react-router-dom";

export const AccountAdress = () => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchURL = `/user/getaddress/${user.user._id}`;
    const deleteURL = `/user/deleteAddress/`
    const [address, setAddress] = useState([]);

    const { data, isLoading, error } = useFetch(fetchURL, "GET", {},);


    useEffect(() => {
        if (!isLoading && data) {
            setAddress(data)
        }
    }, [data, isLoading]);

    useEffect(() => {
        if (error) {
            message.error(error);
        }
    }, [error])
    const deleteAddress = async (addressId) => {
        try {
            const response = await fetch(`${apiUrl}${deleteURL}${user.user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify({ id: addressId })
            });
            if (response.ok) {
                message.success("Deleted successfully.");
                handleUpdateAddress(addressId);
            }
            else {
                const { error } = await response.json();
                message.error(error.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    }

    const handleUpdateAddress = (addresId) => {
        const updatedAddresList = address.filter((add) => add._id !== addresId);
        setAddress(updatedAddresList);
    }

    return (
        <React.Fragment>
            {isLoading &&
                <div className="page-content my-account__address">
                    <div className="my-account__address-list ">
                        <div className="my-account__address-item">
                            <Skeleton active />;
                        </div>
                        <div className="my-account__address-item">
                            <Skeleton active />;
                        </div>
                    </div>
                </div>
            }
            {isLoading || address.length <= 0 &&
                <div style={{ height: "40vh" }} className={`d-flex flex-column justify-content-center align-items-center`}>
                    <div className="mw-300 content d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-uppercase mb-3 fw-400 h1">No Address!</h2>
                        <h2 className="text-uppercase fw-normal mb-3">Address not found</h2>
                        <p className="text-capitalize text-center mb-3">You do not have an address registered in the system. Let's add a new address.</p>
                        <Link to={"/account/newaddress"} className="btn-primary button text-uppercase">Add Address</Link>
                    </div>
                </div>
            }
            {address && address.length >= 1 &&
                <div key={address._id} className="page-content my-account__address">
                    <div className="d-flex justify-content-between">
                        <p>The following addresses will be used on the checkout page by default.
                        </p>
                        <Link to={"/account/newaddress"} className="btn btn-full active ms-3">New Address</Link>
                    </div>
                    <div className="my-account__address-list ">
                        {address.map((data) => {
                            return (
                                <div className="my-account__address-item">
                                    <div
                                        className="my-account__address-item__title my-5 d-flex justify-content-between align-items-center">
                                        <h6 className="text-uppercase-fw-normal w-75 truncate" >
                                            {data.title}
                                        </h6>
                                        <div>
                                            <Link to={`/account/editaddress/${user.user._id}?addressId=${data._id}`} className="btn btn-full active">Edit</Link>
                                            <Popconfirm
                                                title="Delete the task"
                                                description="Are you sure to delete this task?"
                                                onConfirm={() => deleteAddress(data._id)}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <a className="btn btn-full active ms-3">Delete</a>
                                            </Popconfirm>
                                        </div>
                                    </div>
                                    <div className="my-account__address-item__detail">
                                        <p>{data.name} {data.surname}</p>
                                        <p>{data.address}</p>
                                        <br></br>
                                        <p>{data.phone}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </React.Fragment>
    )
}
