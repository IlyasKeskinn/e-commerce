import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Button, Spin, Select, message } from "antd"
import useFetch from '../../../../hooks/useFetch';

export const NewSubCategory = () => {

    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/category/getcategories";
    const postURL = "/category/post_subcategory"
    const token = localStorage.getItem("x-auth-token");

    const [upload, setUpload] = useState(false);
    const { data, isLoading, error } = useFetch(fetchUrl);

    if (error) {
        message.error(error)
    }
    const [form] = Form.useForm();


    const onFinish = async (values) => {
        setUpload(true);
        try {
            const response = await fetch(`${apiUrl}${postURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify({ name: values.subcategoryName, maincategory: values.category })
            });
            if (response.ok) {
                form.setFieldsValue({ subcategoryName: "" })
                message.success("Category added succesfuly.");
            } else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            if (error instanceof Error) {
                message.error(error.name)
            }
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
                    name="category"
                    label="Select Main Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please select main category!',
                        },
                    ]}
                >
                    <Select placeholder="Please select a main category!">
                        {data.map((category) => {
                            return <Select.Option key={category._id} value={`${category._id}`}>{category.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Subcategory Name"
                    name="subcategoryName"
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
