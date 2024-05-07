import React, { useEffect, useState } from "react";
import useFetchWithToken from "../../hooks/useFetchWithToken";
import { Skeleton, message } from "antd";
import { Link } from "react-router-dom";
import { AddressList } from "../../components/Account/AddressList";
import { NotFoundAddress } from "../../components/Account/NotFoundAddress";
import "./Account.css"

export const AccountAdress = () => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchURL = `/user/getaddress/${user.user._id}`;
    const deleteURL = `/user/deleteAddress/`
    const [address, setAddress] = useState([]);

    const { data, isLoading, error } = useFetchWithToken(fetchURL, token,);

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
                <NotFoundAddress />
            }
            {address && address.length >= 1 &&
                <div className="page-content my-account__address">
                    <div className="d-flex justify-content-between">
                        <p>The following addresses will be used on the checkout page by default.
                        </p>
                        <Link to={"/account/newaddress"} className="btn btn-full active ms-3">New Address</Link>
                    </div>
                    <AddressList deleteAddress={deleteAddress} address={address} />
                </div>
            }
        </React.Fragment>
    )
}
