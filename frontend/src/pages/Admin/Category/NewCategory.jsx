import React, { useState } from 'react'
import { Form, Input, Button, Spin, message } from "antd"
export const NewCategory = () => {

    //TODO REFACTOR
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/category/postCategory";
    const [form] = Form.useForm();
    const [isLoading, setLoading] = useState(false)
    const token = localStorage.getItem("x-auth-token");


    const onFinish = async (values) => {
        setLoading(true);

        try {
            const response = await fetch(`${apiUrl}${fetchUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                form.resetFields();
                message.success("Category added succesfuly.");
            } else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            message.error(error)
        }finally{
            setLoading(false);
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

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>


            </Form>
        </Spin>
    )
}
