import React, { useCallback, useEffect, useState } from 'react'
import {
    Form, Input, Select, Button, Row, Col, Upload, Checkbox, InputNumber,
    Spin, message
} from "antd"
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const { TextArea } = Input;
export const NewProduct = () => {

    //TODO REFACTOR
    const [fileList, setFileList] = useState([]);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/product/postproduct";
    const fetchCategoriesUrl = "/category/getCategories";
    const [form] = Form.useForm();
    const [isLoading, setLoading] = useState(false)
    const token = localStorage.getItem("x-auth-token");
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;

    };
    //TODO REFACTOR 
    const handleChange = info => {
        let fileList = [...info.fileList];
        setFileList(fileList);
    };

    const onSubmitPhotos = async () => {
        setLoading(true)
        const formy = new FormData();
        fileList.forEach(file => {
            formy.append("files", file.originFileObj);
        });


        try {
            const response =
                await fetch('http://localhost:3000/upload/photo', {
                    method: 'POST',
                    body: formy
                });
            if (response.ok) {
                message.success("Photos uploaded successfully");
                const data = await response.json();
                if (data) {
                    setImages(prevImages => [...prevImages, ...data]);
                }
            }
        } catch (error) {
            message.error(error);
        } finally {
            setLoading(false);
        }
    }


    //TODO REFACTOR 
    const fetchCategories = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}${fetchCategoriesUrl}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            }
            else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            if (message instanceof Error) {
                message.error(error)
            }
        } finally {
            setLoading(false);
        }

    }, [apiUrl]);

    useEffect(() => { fetchCategories() }, [fetchCategories])

    //TODO Refactor
    const onFinish = async (values) => {
        setLoading(true);
        const data = { ...values, "images": images, price: { "current": values.current, "discount": values.discount }, categorylist : categories }
        try {
            const response = await fetch(`${apiUrl}${fetchUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                form.resetFields();
                message.success("Product added succesfuly.");
                const { _id } = await response.json();


            } else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            message.error(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Spin spinning={isLoading}>
            <Form encType="multipart/form-data" style={{ padding: "20px" }}
                name='basic'
                layout='vertical'
                autoComplete='off'
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    label="Product Name"
                    name="title"
                    rules={[{ required: true, message: 'Please input product name!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="size_options"
                    label="Select Size"
                    rules={[
                        {
                            required: true,
                            message: 'Please select product size!',
                            type: 'array',
                        },
                    ]}
                >
                    <Select mode="multiple" placeholder="Please select product size">
                        <Option value="xs">XS</Option>
                        <Option value="s">S</Option>
                        <Option value="m">M</Option>
                        <Option value="l">L</Option>
                        <Option value="xl">XL</Option>
                    </Select>
                </Form.Item>

                <div style={{ display: "flex", gap: "30px" }}>
                    <Form.Item name="current" label="Price" rules={[{ required: true, message: "Please enter a price please!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="discount" label="Discount">
                        <InputNumber />
                    </Form.Item>
                </div>

                <Form.Item name="color_options" label="Colors:"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a color!',
                            type: 'array',
                        },
                    ]}
                >
                    <Checkbox.Group>
                        <Row>
                            <Col span={8}>
                                <Checkbox
                                    value="red"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    RED
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox
                                    value="purple"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    Purple
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox
                                    value="blue"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    Blue
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox
                                    value="black"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    Black
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox
                                    value="White"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    White
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox
                                    value="brown"
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    Brown
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item name="desc" label="Product Description">
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name="categories"
                    label="Select Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please select!',
                            type: 'array',
                        },
                    ]}
                >
                    <Select mode="multiple" placeholder="Please select a category!">
                        {categories.map((category) => {
                            return <Option key={category._id} value={`${category._id}`}>{category.name}</Option>
                        })}
                    </Select>
                </Form.Item>

                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Dragger
                        multiple={true}
                        beforeUpload={true}
                        onChange={handleChange}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload.
                        </p>
                    </Dragger>
                    <Button onClick={onSubmitPhotos} type='primary' >Upload Photos</Button>
                </Form.Item>


                <Button type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form>
        </Spin >

    )
}


