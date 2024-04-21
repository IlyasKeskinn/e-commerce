import "./NotFound.css"

import React from 'react'

export const NotFound = () => {
    return (
        <section class="not-found__section position-relative">
            <div class="mw-300 content d-flex flex-column justify-content-center align-items-center">
                <h2 class="text-uppercase not-found__title mb-3">OOPS!</h2>
                <h2 class="text-uppercase fw-normal mb-3">Page not found</h2>
                <p class="text-capitalize text-center mb-3">Sorry, we couldn't find the page you where looking for. We
                    suggest that you return to home page.</p>
                <a href="index.html" class="btn-primary button text-uppercase">Go back</a>
            </div>
        </section>
    )
}
