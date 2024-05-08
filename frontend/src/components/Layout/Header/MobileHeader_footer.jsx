import React from 'react'
import { SocialIcons } from '../../SocialIcons/SocialIcons'

export const MobileHeader_footer = () => {
    return (

        <div className="p-3 mobile-nav__footer">
            <div className="container d-flex align-items-center justify-content-start mt-3">
                <select name="languae-select-mobile" id="languae-select">
                    <option value="0">United Kingdom | English </option>
                    <option value="1">German</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <div className="container d-flex align-items-center justify-content-start mt-3">
                <select name="currency-select-mobile" id="languae-select">
                    <option value="0">$ USD</option>
                    <option value="1">€ Euro</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <SocialIcons />
        </div>
    )
}
