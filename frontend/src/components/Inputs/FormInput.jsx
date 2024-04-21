import React from 'react'

export const FormInput = (props) => {
    return (
        <div className="group">
            <input type="text" id={props.inputName}  name={props.inputName} required={props.required ? 'required' : ""}  />
            <label htmlFor={props.inputName} className="custom-label text-capitalize">{props.text} {props.required  ? "*" : ""}</label>
        </div>
    )
}
