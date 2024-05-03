import React, { useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button, message } from 'antd';
import useFetch from '../../../hooks/useFetch'
export const SliderList = () => {

    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = `/slider/getSliders`;
    const deleteUrl = `/slider/deleteslider`;
    const token = localStorage.getItem("x-auth-token");
    const [trigger, setTrigger] = useState(false);
    const { data, isLoading, error } = useFetch(fetchUrl, "GET", {}, { trigger });

    const columns = [
        {
            title: "Image",
            dataIndex: "images",
            key: "image",
            render: (img) => <img src={`../src/images/${img}}`} alt="Image" width={100} />,
        },
        {
            title: "Slider",
            dataIndex: "title",
            key: "title",
            render: (title) => <b>{title}</b>,
        },
        {
            title: "Subtitle",
            dataIndex: "sub_title",
            key: "sub_title",
            render: (sub_title) => <b>{sub_title}</b>,
        },

        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size={'large'}>
                    <Button onClick={() => { navigate(`/admin/updateslider/${record._id}`) }}>Update</Button>
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
                message.error(error.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    }

    useEffect(() => {
        if (error) {
            message.error(error.message);
        }
    }, [error])


    return (
        <div>
            <Table style={{ textTransform: "capitalize" }} columns={columns} dataSource={data} loading={isLoading} rowKey={(record) => record._id} />
        </div>
    )
}
