import { Link } from "react-router-dom"
import "./NotFound.css"


import React from 'react'

export const NotFound = (props) => {

    return (
        <section className="not-found__section position-relative">
            <div className="mw-300 content d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-uppercase not-found__title mb-3">OOPS!</h2>
                <h2 className="text-uppercase fw-normal mb-3">Page not found</h2>
                <p className="text-capitalize text-center mb-3">Sorry, we couldn't find the page you where looking for. We
                    suggest that you return to home page.</p>
                <Link onClick={tik} to={""} className="btn-primary button text-uppercase">Go Back...</Link>
            </div>
        </section>
    )
}
