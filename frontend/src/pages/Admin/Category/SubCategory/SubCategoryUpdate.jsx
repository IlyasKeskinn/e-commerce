import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Button, Spin, message } from "antd"
import { useNavigate, useParams ,useSearchParams} from 'react-router-dom';

export const SubCategoryUpdate = () => {
    //TODO REFACTOR
    const baseApi = import.meta.env.VITE_BASE_API_URL;
    const getItemsUrl = "/category/getsubcategory";
    const subId = useParams().id;
    const [searchParams] = useSearchParams();
    const mainId = searchParams.get("mainid");
    const putUrl = "/category/getcategories/subcategory/update";
    const [isLoading, setLoading] = useState(false);
    const token = localStorage.getItem("x-auth-token");
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const onFinish = async (values) => {
        setLoading(true);
        const data = {"id" : subId, name : values.name}
        console.log(data);
        try {
            const response = await fetch(`${baseApi}${putUrl}/${mainId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                navigate("/admin/categorylist");
            } else {
                const {error} = await response.json();
                message.error(error);
            }
        } catch (error) {
            if (message instanceof Error) {
                console.log(error);
                message.error(error.message);
            }
        }
    }

    const fetchCategories = useCallback(async () => {
        setLoading(true);
        const data = {"subCategoryId" : subId }
        try {
            console.log(`${baseApi}${getItemsUrl}/${mainId}`,);
            const response = await fetch(`${baseApi}${getItemsUrl}/${mainId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body : JSON.stringify(data)
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
    }, [baseApi, getItemsUrl, mainId, token, subId, form])

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
