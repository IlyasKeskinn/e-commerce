import React, { useCallback, useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';

export const SubCategoryList = () => {
    const categoryId = useParams().id;
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = `/category/getCategory/${categoryId}`;
    const deleteUrl = "/category/delete_subcategory";
    const token = localStorage.getItem("x-auth-token");

    const navigate = useNavigate();
    const [trigger, setTrigger] = useState(true);
    const [subCat, setSubcat] = useState([]);
    const { data, isLoading, error } = useFetch(fetchUrl, "GET", {}, { trigger });


    if (error) {
        message.error(error);
    }

    useEffect(() => {
        if (data && data.subcategory) {
            data.subcategory.forEach(cat => {
                setSubcat(prevsub => [...prevsub, cat]);
            });
        }
    }, [data])


    const columns = [
        {
            title: `Category : ${data.name}`,
            dataIndex: "name",
            key: "name",
            render: (text) => <b>{text}</b>,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size={'large'}>
                    <Button onClick={() => { navigate(`/admin/updatesubcategory/${record._id}`)}}>Update</Button>
                    <Popconfirm
                        title="Delete the category"
                        description="Are you sure to delete this category?"
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
                setSubcat([])
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
            <Table style={{ textTransform: "capitalize" }} columns={columns} dataSource={subCat} loading={isLoading} rowKey={(record) => record._id} />
        </div>
    )
}
