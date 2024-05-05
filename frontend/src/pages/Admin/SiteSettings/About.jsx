import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Form, Input, Button, Row, Col,
    Spin, message
} from "antd"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useFetch from '../../../hooks/useFetch';

export const About = () => {

    const fetchURL = "/settings/about/getabout";
    const token = localStorage.getItem("x-auth-token");
    const fecthData = useFetch(fetchURL);
    const [updateURL, setUpdateURL] = useState("");

    const { data, isLoading, error, updateData } = useFetch(updateURL, "PUT", token);

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values) => {
        updateData(values);
    }

    useEffect(() => {
        if (error) {
            message.error(error);
        }
        if (data && data._id) {
            navigate("/admin")
        }
    }, [data, error])

    useEffect(() => {
        if (fecthData.error) {
            message.error(fecthData.error);
        }
        if (fecthData.data && fecthData.data.length >= 1) {
            form.setFieldsValue(fecthData.data[0])
            setUpdateURL(`/settings/about/updateabout/${fecthData.data[0]._id}`);
        }
    }, [fecthData.data, fecthData.error])


    return (
        <Spin spinning={fecthData.isLoading}>
            <Form encType="multipart/form-data" style={{ padding: "20px" }}
                name='basic'
                layout='vertical'
                autoComplete='off'
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    label="About Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input about tile!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="story" label="Story" rules={[{ required: true, type: "string", message: "Please enter company story." }]}>
                    <ReactQuill theme='snow' />
                </Form.Item>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="mision" label="Mision" rules={[{ required: true, type: "string", message: "Please enter company mision." }]}>
                            <ReactQuill theme='snow' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="vision" label="Vision" rules={[{ required: true, type: "string", message: "Please enter company vision." }]}>
                            <ReactQuill theme='snow' />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name="the_company" label="The Company" rules={[{ required: true, type: "string", message: "Please enter company about." }]}>
                    <ReactQuill theme='snow' />
                </Form.Item>

                <Button disabled={isLoading} type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form>
        </Spin >

    )
}


