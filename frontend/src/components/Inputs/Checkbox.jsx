import React, { useState } from 'react'

export const Checkbox = (props) => {
    const [isChecked, setCheked] = useState(false);
    const handleOnChecked = (e) => {
        props.setOnChecked(e.target.checked);
    }
    return (
        <div className="input-check-box d-flex justify-content-start align-items-center">
            <div style={{ width: 0 }} className="group dummy-box">
                <label className="custom-label-checkbox" htmlFor={props.inputName}>
                    <input onChange={handleOnChecked} type="checkbox" id={props.inputName} />
                    <span></span>
                </label>
            </div>
            <span className="checkbox-label-text text-uppercase">{props.text}</span>
        </div>
    );
}
