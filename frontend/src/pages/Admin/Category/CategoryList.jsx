import React, { useCallback, useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button,message } from 'antd';

export const CategoryList = () => {
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/category/getCategories";
    const deleteUrl = "/category/deletecategory";
    const token = localStorage.getItem("x-auth-token");
    const columns = [
        {
            title: "Category",
            dataIndex: "name",
            key: "name",
            render: (text) => <b>{text}</b>,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size={'large'}>
                    <Button>Update</Button>
                    <Popconfirm
                        title="Delete the category"
                        description="Are you sure to delete this category?"
                        onConfirm={()=>deleteCategory(record._id)}
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
                    "x-auth-token": token
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
        }finally{
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
            <Table style={{textTransform : "capitalize"}} columns={columns} dataSource={dataSource} loading={isLoading} rowKey={(record) => record._id} />
        </div>
    )
}
