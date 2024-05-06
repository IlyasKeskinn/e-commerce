import React, { useEffect } from 'react'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Popconfirm, message } from 'antd'
import useFetch from '../../hooks/useFetch';

export const CommentOperations = ({ productId, review, handleUpdateComment,handleCommentEdit }) => {
    const commentDeleteURL = `/product/getproduct/removecomment/${productId}`
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";
    const { data, isLoading, error, updateData } = useFetch(commentDeleteURL, "PUT", token);

    useEffect(() => {
        if (data && data._id) {
            message.success("Comment deleted successfully!");
            handleUpdateComment(review._id);
        }
        if (error) {
            message.error("Please log in to your account.");
        }
    }, [data, error, review._id]);

    const onConfirm = () => {
        const formData = { "id": review._id };
        updateData(formData);
    };
    const onClickUpdate = () => {
        handleCommentEdit(review._id)
    }
    return (
        <React.Fragment>
            <div>
                <Popconfirm
                    title="Delete the comment!"
                    description="Are you sure to delete this comment?"
                    onConfirm={onConfirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button disabled={isLoading} style={{ color: "red", border: "none" }} shape="circle" icon={<DeleteOutlined />} />
                </Popconfirm>
                <Button onClick={() => onClickUpdate()} disabled={isLoading} style={{ color: "blue", border: "none" }} className='ms-2' shape="circle" icon={<EditOutlined />} />
            </div>
        </React.Fragment>
    )
}
