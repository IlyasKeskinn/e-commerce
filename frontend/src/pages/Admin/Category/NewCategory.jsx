import React from 'react'
import { Form, Input, Button, Spin, message } from "antd"
import useFetch from '../../../hooks/useFetch';
export const NewCategory = () => {

    //TODO REFACTOR
    const fetchUrl = "/category/postcategory";
    const [form] = Form.useForm();
    const token = localStorage.getItem("x-auth-token");
    const { data, isLoading, error, postData } = useFetch(fetchUrl, "POST", { token });

    const onFinish = async (values) => {

        postData(values);
        if (data.name) {
            message.success("Category added.")
            form.resetFields();
        }
        if (error) {
            message.error(error)
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
