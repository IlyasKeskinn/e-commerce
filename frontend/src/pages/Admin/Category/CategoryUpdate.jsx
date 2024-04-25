import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Button, Spin, message } from "antd"
import { useNavigate, useParams } from 'react-router-dom';

export const CategoryUpdate = () => {
    //TODO REFACTOR
    const baseApi = import.meta.env.VITE_BASE_API_URL;
    const getItemsUrl = "/category/getcategory";
    const categoryId = useParams().id;
    const putUrl = "/category/updateCategory";
    const [isLoading, setLoading] = useState(false);
    const token = localStorage.getItem("x-auth-token");
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const onFinish = async (values) => {
        setLoading(true);

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
                const {error} = await response.json();
                message.error(error);
            }
        } catch (error) {
            message.error(error);
        }
    }

    const fetchCategories = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`${baseApi}${getItemsUrl}/${categoryId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    form.setFieldsValue({
                        name: data.name
                    })
                } else {
                    form.setFieldsValue({
                        name: "Category Name"
                    })
                }
            } else {
                const { error } = response.json();
                message.error(error);
            }
        } catch (error) {
            message.error(error);
        } finally {
            setLoading(false);
        }
    }, [baseApi])

    useEffect(() => { fetchCategories() }, [fetchCategories])

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

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>


            </Form>
        </Spin>
    )
}
