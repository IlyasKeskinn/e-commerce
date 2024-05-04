import { Rate, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { ReviewForm } from './ReviewForm';
export const AddReview = ({ productId }) => {
    const postReviewURL = `/product/getProduct/comment/${productId}`
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";

    const { data, isLoading, error, updateData } = useFetch(postReviewURL, "PUT", token);

    const onSubmit = (formData) => {
        updateData(formData);
    }
    useEffect(() => {
        if (data && data._id) {
            message.success("Comment added successfully.");
        }
        if (error) {
            message.error(error);
        }
    }, [data, error]);
    return (
        <ReviewForm onSubmit={onSubmit} data={data} isLoading={isLoading} productId={productId} />
    )
}