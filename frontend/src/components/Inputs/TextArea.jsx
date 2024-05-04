import React from 'react'

export const TextArea = ({validationError}) => {
    return (
        <div className="group">
            <textarea className={`${validationError ? "input-danger" : ""}`} value={comment} onChange={handleInput} style={{ width: "100%", }} type="text" id="commentText" name="commentText"
            ></textarea>
            <label htmlFor="commentText" className="custom-label">Your Review </label>
            {validationError && <div>{validationError}</div>}
        </div>
    )
}
