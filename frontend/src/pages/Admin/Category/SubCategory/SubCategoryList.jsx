import React, { useCallback, useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

export const SubCategoryList = () => {
    //TODO REFACTOR
    const navigate = useNavigate();
    const categoryId = useParams().id;
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/category/getCategory";
    const deleteUrl = "/category/getcateories/subcategory/remove";
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
                    <Button onClick={()=> {navigate(`/admin/updatesubcategory/${record._id}?mainid=${categoryId}`)}}>Update</Button>
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
            const response = await fetch(`${apiUrl}${fetchUrl}/${categoryId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            });
            if (response.ok) {
                const data = await response.json();
                const subcategory = data.subcategory;
                setDataSource(subcategory);
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

    const deleteCategory = async (subcategoryId) => {
        const data = {"subCategoryId" : subcategoryId }
        console.log(data);
        try {
            const response = await fetch(`${apiUrl}${deleteUrl}/${categoryId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body : JSON.stringify(data)
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
