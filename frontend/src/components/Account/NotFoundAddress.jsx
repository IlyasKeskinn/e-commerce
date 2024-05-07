import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundAddress = () => {
    return (
        <div style={{ height: "40vh" }} className={`d-flex flex-column justify-content-center align-items-center`}>
            <div className="mw-300 content d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-uppercase mb-3 fw-400 h1">No Address!</h2>
                <h2 className="text-uppercase fw-normal mb-3">Address not found</h2>
                <p className="text-capitalize text-center mb-3">You do not have an address registered in the system. Let's add a new address.</p>
                <Link to={"/account/newaddress"} className="btn-primary button text-uppercase">Add Address</Link>
            </div>
        </div>
    )
}
