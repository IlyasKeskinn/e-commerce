import { Checkbox } from '../Inputs/Checkbox'
import { FormInput } from '../Inputs/FormInput'
export const ReviewForm = () => {
    return (
        <div className="review-form__wrapper">
            <div className="col-12 my-5">
                <div className="group">
                    <textarea type="text" id="commentText" name="commentText"
                        required></textarea>
                    <label for="commentText" className="custom-label">Your Review </label>
                </div>
            </div>
            <div className="col-12">
                <FormInput inputName="Name" text="Name" required />
            </div>
            <div className="col-12">
                <FormInput inputName="mail" text="Your Mail" required />
            </div>
            <div className="col-12">
                <Checkbox inputName="saveMyNameCheckbox" text="Save my name, email, and website in this
                    browser for the next time I comment." />
            </div>
            <button id="addComment" type="button"
                className="text-uppercase button btn-primary w-100">
                Submit
            </button>
        </div>
    )
}
