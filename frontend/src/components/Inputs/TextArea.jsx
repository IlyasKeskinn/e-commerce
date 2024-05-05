

export const TextArea = ({ validationError = {}, inputText, labelText, handleInput = {}, value = "" }) => {
    const onChange = (e) => {
        handleInput(e.target.value)
    }
    return (
        <div className="group">
            <textarea className={`${validationError ? "input-danger" : ""}`} value={value} onChange={onChange} style={{ width: "100%", }}
                type="text"
                id={`${inputText}`}
                name={`${inputText}`}>
            </textarea>
            <label id={`${inputText}`} className="custom-label">{labelText}</label>
            {validationError && <div>{validationError}</div>}
        </div>
    )
}
