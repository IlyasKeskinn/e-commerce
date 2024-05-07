import { message } from 'antd';
import { useEffect } from 'react';
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
            message.error("Please log in to your account.");
        }
    }, [data, error]);
    return (
        <ReviewForm onSubmit={onSubmit} data={data} isLoading={isLoading} productId={productId} />
    )
}
