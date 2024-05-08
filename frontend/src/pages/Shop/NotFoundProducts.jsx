import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundpProducts = () => {
    return (
        <div style={{ height: "40vh" }} className={`d-flex flex-column justify-content-center align-items-center`}>
            <div className="mw-300 content d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-uppercase fw-normal mb-3">Products not found</h2>
                <p className="text-capitalize text-center mb-3">You do not have any products registered in the system.</p>
                <Link to={"/"} className="btn-primary button text-uppercase">Go Home...</Link>
            </div>
        </div>
    )
}
