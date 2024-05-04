import React from 'react'

export const Select = ({ inputName , inputText }) => {
    return (
        <div class="group">
            <div class="select-container">
                <select defaultValue={0} id={inputName} name={inputName}>
                    <option value={0}>{inputText}</option>
                </select>
                <div class="chevron-down"></div>
            </div>
        </div>
    )
}
