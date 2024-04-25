import React from 'react'

export const FormInput = (props) => {
    const handleInputChange = (e) => {
        props.setOnChange(e);
    }
    return (
        <div className="group">
            <input type={props.type} onChange={handleInputChange} id={props.inputName}  name={props.inputName} required={props.required ? 'required' : ""}  />
            <label htmlFor={props.inputName} className="custom-label text-capitalize">{props.text} {props.required  ? "*" : ""}</label>
        </div>
    )
}
