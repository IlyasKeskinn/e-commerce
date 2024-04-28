import React, { useCallback, useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

export const CategoryList = () => {
    //TODO REFACTOR
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([]);
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
                    <Button onClick={()=> {navigate(`/admin/updatecategory/${record._id}`)}}>Update</Button>
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

    const {data, error, isLoading} = useFetch(fetchUrl);
    setDataSource(data);
    
    if (error) {
        message.error(error)
    }

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
