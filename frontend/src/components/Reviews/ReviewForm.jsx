import { Rate, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
export const ReviewForm = ({ productId }) => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
    const postReviewURL = `/product/getProduct/comment/${productId}`
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";

    
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState(3);
    const [validationError, setValidationError] = useState("");
    
    const { data, isLoading, error, updateData } = useFetch(postReviewURL, "PUT", token );
    const handleInput = (e) => {
        setComment(e.target.value);
    }
    const handleValue = (e) => {
        setRate(e);
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (!comment) {
            setValidationError("Please enter your review.")
            return;
        }
        if (comment.length < 10) {
            setValidationError("At least 10 words must be character.")
            return;
        }
        setValidationError("");
        const formData = { "user": user.user._id, "userName" : user.user.userName, "rating": rate, "reviewText": comment }
        updateData(formData);
    }
    useEffect(() => {
        if (data && data._id) {
            message.success("Comment added successfully.");
            setComment("");
            setRate(3);
        }
        if (error) {
            message.error(error);
        }
    }, [data,error]);
    return (
        <div className="review-form">
            {!user.user ?
                <p>Please <Link style={{ color: "blue" }} to={"/login_register"}>login</Link> to leave a comment.</p>
                :
                <form onSubmit={onSubmit}>
                    <div className="review-form__info">
                        <h5 className="text-capitalize fw-normal">Write a review</h5>
                    </div>
                    <div className="select-star-rating">
                        <span className="fw-normal text-capitalize">Your Rating : </span>
                        <div><Rate onChange={handleValue} style={{ marginLeft: "10px" }} value={rate} defaultValue={3} allowClear={false} /></div>
                    </div>
                    <div className="review-form__wrapper">
                        <div className="col-12 my-5">
                            <div className="group">
                                <textarea className={`${validationError ? "input-danger" : ""}`} value={comment} onChange={handleInput} style={{ width: "100%", }} type="text" id="commentText" name="commentText"
                                ></textarea>
                                <label htmlFor="commentText" className="custom-label">Your Review </label>
                                {validationError && <div>{validationError}</div>}
                            </div>
                        </div>
                        <button id="addComment" type="submit"
                            className={`text-uppercase button btn-primary w-100 ${isLoading ? "disabled" : ""}`}>
                            Submit
                        </button>
                    </div>
                </form>
            }
        </div>
    )
}
