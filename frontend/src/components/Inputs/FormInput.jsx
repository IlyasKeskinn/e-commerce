import React from 'react'

export const FormInput = ({ validationError = "", type ="text", inputName, text, handleInput = {}, required = "true", value = "" }) => {
    const handleInputChange = (e) => {
        handleInput(e.target.value);
    }
    return (
        <div className="group">
            <input className={`${validationError ? "input-danger" : ""} w-100`} type={type} value={value} onChange={handleInputChange} id={`${inputName}`}  name={`${inputName}`}  />
            <label htmlFor={`${inputName}`} className="custom-label text-capitalize">{text} {required  ? "*" : ""}</label>
            {validationError && <div>{validationError}</div>}
        </div>
    )
}


