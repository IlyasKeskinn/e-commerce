import React, { useCallback, useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'
export const ProductList = () => {
    //TODO REFACTOR
    const navigate = useNavigate();
    const fetchUrl = `/product/getproducts`;
    const deleteUrl = "/product/deleteproduct";
    const token = localStorage.getItem("x-auth-token");
    const [trigger, setTrigger] = useState(false);
    const {data, isLoading, error } = useFetch(fetchUrl,"GET",{},{trigger});
    const apiUrl = import.meta.env.VITE_BASE_API_URL;

    if (error) {
        message.error(error.message)
    }
    const columns = [
        {
            title: "Image",
            dataIndex: "images",
            key: "image",
            render: (images) => <img src={`../src/images/${images[0]}`} alt="Image" width={100} />,
        },
        {
            title: "Product",
            dataIndex: "title",
            key: "title",
            render: (title) => <b>{title}</b>,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => <b>{price.current}</b>,
        },

        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size={'large'}>
                    <Button onClick={() => { navigate(`/admin/updateproduct/${record._id}`) }}>Update</Button>
                    <Popconfirm
                        title="Delete the product!"
                        description="Are you sure to delete this product?"
                        onConfirm={() => deleteItem(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </Space>
            )
        }
    ]


    const deleteItem = async (id) => {
        try {
            const response = await fetch(`${apiUrl}${deleteUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            });
            if (response.ok) {
                message.success("Deleted successfully.");
                setTrigger(prevTrigger => !prevTrigger);
            }
            else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            message.error(error);
        }
    }



    return (
        <div>
            <Table style={{ textTransform: "capitalize" }} columns={columns} dataSource={data} loading={isLoading} rowKey={(record) => record._id} />
        </div>
    )
}
