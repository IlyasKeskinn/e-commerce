import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Button, Spin, message } from "antd"
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';

export const SubCategoryUpdate = () => {
    const categoryId = useParams().id;

    const baseApi = import.meta.env.VITE_BASE_API_URL;
    const getItemsURL = `/category/get_subcategory/${categoryId}`;
    const updateURL = `/category/update_subcategory/${categoryId}`;
    const token = localStorage.getItem("x-auth-token");

    const navigate = useNavigate();

    const [upload, setUpload] = useState(false);
    const [form] = Form.useForm();

    const { data, isLoading, error } = useFetch(getItemsURL);

    useEffect(() => {
        if (data && data.name) {
            form.setFieldsValue({ name: data.name })
        } else {
            form.setFieldsValue({ name: "" })
        }
    }, [data])

    const onFinish = async (values) => {
        setUpload(true);
        try {
            const response = await fetch(`${baseApi}${updateURL}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                navigate(`/admin/subcategorylist/${data.maincategory}`);
            } else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            if (message instanceof Error) {
                message.error(error.message);
            }
        } finally {
            setUpload(false);
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
