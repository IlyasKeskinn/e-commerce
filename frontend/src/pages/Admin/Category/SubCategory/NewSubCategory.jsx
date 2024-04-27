import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Button, Spin, Select, message } from "antd"

export const NewSubCategory = () => {

    //TODO REFACTOR
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/category/getCategories/subcategory";
    const getMainCategoryUrl = "/category/getcategories";
    const [form] = Form.useForm();
    const [isLoading, setLoading] = useState(false)
    const token = localStorage.getItem("x-auth-token");
    const [mainCategory, setMainCategory] = useState([]);


    const onFinish = async (values) => {
        setLoading(true);
        const mainCategories = values.maincategories;
        mainCategories.map(async categoryId => {
            try {
                const response = await fetch(`${apiUrl}${fetchUrl}/${categoryId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": token
                    },
                    body: JSON.stringify({name : values.subcategoryname})
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
            } finally {
                setLoading(false);
            }
        })

    }


    const fetchMainCategories = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}${getMainCategoryUrl}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            })
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    setMainCategory(data)
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
    }, [apiUrl])


    useEffect(() => { fetchMainCategories() }, [fetchMainCategories])


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
                    name="maincategories"
                    label="Select Main Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a main category!',
                            type: 'array',
                        },
                    ]}
                >
                    <Select mode="multiple" placeholder="Please select a category!">
                        {mainCategory.map((category) => {
                            return <Option key={category._id} value={`${category._id}`}>{category.name}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Subcategory Name"
                    name="subcategoryname"
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
