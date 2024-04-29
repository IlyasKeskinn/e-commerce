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
    const [trigger, setTrigger] = useState(true);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
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
                    <Button onClick={() => { navigate(`/admin/updatecategory/${record._id}`) }}>Update</Button>
                    <Popconfirm
                        title="Delete the category"
                        description="Are you sure to delete this category?"
                        onConfirm={() => deleteItem(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Button type='dashed' onClick={() => { navigate(`/admin/subcategorylist/${record._id}`) }}>See Subcategory</Button>
                </Space>
            )
        }
    ]

    const { data, isLoading, error } = useFetch(fetchUrl, "GET", {}, { trigger });

    if (error) {
        message.error(error)
    }


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
