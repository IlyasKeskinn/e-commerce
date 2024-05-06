import { Rate, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
export const UpdateReview = ({productId ,review = { review } ,handleCommentEdit,handleUpdateComment}) => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
    const updateCommentURL = `/product/getproduct/comment/update/${productId}`
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";
    const [comment, setComment] = useState(review.reviewText);
    const [rate, setRate] = useState(review.rating);
    const [validationError, setValidationError] = useState("");

    const { data, isLoading, error, updateData } = useFetch(updateCommentURL, "PUT", token);

    const handleInput = (e) => {
        setComment(e.target.value);
    }
    const handleValue = (e) => {
        setRate(e);
    }
    const handleSubmit = (e) => {
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
        const formData = { "_id": review._id, "user": user.user._id, "userName": user.user.userName, "rating": rate, "reviewText": comment }
        updateData(formData);
    }
    useEffect(() => {
        if (data && data._id) {
            message.success("Submitted for review.");
            handleUpdateComment(review._id);
            setComment("");
            setRate(3);
            handleCommentEdit("");
        }
        if (error) {
            message.error("Please log in to your account.");
        }
    }, [data, error]);
    const cancelOnClick = (e) => {
        e.preventDefault();
        handleCommentEdit("")
    }
    return (
        <div className="review-form">
            {<form onSubmit={handleSubmit}>
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
                    <div className='w-100 d-flex align-items-center justify-content-end'>
                        <button id="addComment" type="submit"
                            className={`text-uppercase button btn-primary w-100 ${isLoading ? "disabled" : ""}`}>
                            Submit
                        </button>
                        <div className='ms-5'>
                            <a onClick={(e) => {cancelOnClick(e)}} id="addComment" type="submit"
                                className={`text-uppercase btn btn-outlined-half w-100 ${isLoading ? "disabled" : ""}`}>
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            }
        </div>
    )
}
