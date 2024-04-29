import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Button, Spin, message } from "antd"
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

export const CategoryUpdate = () => {
    const categoryId = useParams().id;

    const baseApi = import.meta.env.VITE_BASE_API_URL;
    const putUrl = "/category/updateCategory";
    const getItemsUrl = `/category/getcategory/${categoryId}`;
    const token = localStorage.getItem("x-auth-token");

    const [upload, setUpload] = useState(false);
    const [form] = Form.useForm();

    const { data, isLoading, error } = useFetch(getItemsUrl);

    const navigate = useNavigate();

    if (error) {
        message.error(error);
    }

    useEffect(() => {
        if (data) {
            form.setFieldsValue({ name: data.name });
        }
    }, [data, form]);


    const onFinish = async (values) => {
        setUpload(true);

        try {
            const response = await fetch(`${baseApi}${putUrl}/${categoryId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                navigate("/admin/categorylist");
            } else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            message.error(error);

        } finally {
            setUpload(false)
        }
    }



    return (
        <Spin spinning={isLoading}>
            <Form style={{ padding: "20px" }}
                name='basic'
                layout='vertical'
                autoComplete='off'
                onFinish={onFinish}
                form={form}

            >
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input category name!' }]}>
                    <Input />
                </Form.Item>

                <Button disabled={upload} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Spin>
    )
}
