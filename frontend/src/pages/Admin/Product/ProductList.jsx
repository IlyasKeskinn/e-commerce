import React, { useCallback, useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

export const ProductList = () => {
    //TODO REFACTOR
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/product/getproducts";
    const deleteUrl = "/product/deleteproduct";
    const token = localStorage.getItem("x-auth-token");
    const columns = [
        {
            title: "Image",
            dataIndex: "images",
            key: "image",
            render: (images) => <img src={`../../../../src/images/${images[0]}`} alt="Image" width={100} />,
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
                        title="Delete the category"
                        description="Are you sure to delete this category?"
                        onConfirm={() => deleteCategory(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </Space>
            )
        }
    ]

    const fetchCategories = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}${fetchUrl}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            }
            else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            if (message instanceof Error) {
                message.error(error)
            }
        } finally {
            setLoading(false);
        }

    }, [apiUrl]);

    const deleteCategory = async (categoryId) => {
        try {
            const response = await fetch(`${apiUrl}${deleteUrl}/${categoryId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            });
            if (response.ok) {
                message.success("Category deleted successfully.")
                fetchCategories();
            }
            else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            if (message instanceof Error) {
                message.error(error)
            }
        }

    }

    useEffect(() => { fetchCategories() }, [fetchCategories])

    return (
        <div>
            <Table style={{ textTransform: "capitalize" }} columns={columns} dataSource={dataSource} loading={isLoading} rowKey={(record) => record._id} />
        </div>
    )
}
