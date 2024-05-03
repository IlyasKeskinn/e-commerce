import React, { useState } from 'react'
import { Rate } from 'antd';
import { CommentOperations } from './CommentOperations';
import { ReviewForm } from './ReviewForm';
import { UpdateReview } from './UpdateReviewForm';

export const Comments = ({ reviews, productId, handleUpdateComment }) => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
    const notFoundComment = "It seems there are no reviews for this product yet. Your input could greatly benefit other shoppers. Sharing your thoughts on the product's quality, comfort, fit, or price can help others make an informed purchasing decision."
    const [editComment, setEditComment] = useState("");
    const date = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const year = dateTime.getFullYear();
        let month = dateTime.getMonth() + 1;
        let day = dateTime.getDate();
        if (month < 10) {
            month = `0${month}`
        }
        if (day < 10) {
            day = `0${day}`
        }
        return `${year}-${month}-${day}`
    }
    const handleCommentEdit = (reviewId) => {
        setEditComment(reviewId)
    }
    return (
        <React.Fragment>
            {reviews.length <= 0 ? <div className='my-5'><p className='fw-400'>{notFoundComment}</p></div>
                :
                <ul className="review-list">
                    {reviews.map((review) => {
                        return (
                            <li className='my-5' key={review._id}>
                                {editComment === review._id ? <UpdateReview  handleUpdateComment={handleUpdateComment} productId={productId} handleCommentEdit={handleCommentEdit} review={review} /> :
                                    <div >
                                        <div className="comment-info d-flex my-5 justify-content-between">
                                            <div className="comment-rating-user">
                                                <p className="text-capitalize">{review.userName}</p>
                                                <Rate style={{ borderBottom: "none", marginBottom: 0 }} disabled defaultValue={review.rating} />
                                            </div>
                                            <div className="comment-date">
                                                <p>{date(review.createdAt)}</p>
                                                {user.user && user.user._id === review.user &&
                                                    <CommentOperations
                                                        handleUpdateComment={handleUpdateComment}
                                                        review={review}
                                                        productId={productId} 
                                                        handleCommentEdit={handleCommentEdit}
                                                        />
                                                }
                                            </div>
                                        </div>
                                        <div className="comment-text my-5">
                                            <p className='first-letter-uppercase'>{review.reviewText}</p>
                                        </div>
                                    </div>
                                }
                            </li>
                        );
                    })}
                </ul>
            }
        </React.Fragment>
    )
}
