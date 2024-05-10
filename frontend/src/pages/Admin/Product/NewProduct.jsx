import React, { useCallback, useEffect, useState } from 'react'
import {
    Form, Input, Select, Button, Row, Col, Upload, Checkbox, InputNumber,
    Spin, message
} from "antd"
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextArea from 'antd/es/input/TextArea';
import useFetch from '../../../hooks/useFetch';

export const NewProduct = () => {

    //TODO REFACTOR
    const [fileList, setFileList] = useState([]);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchCategoriesUrl = "/category/getCategories";
    const fetchUrl = "/product/postproduct";
    const token = localStorage.getItem("x-auth-token");

    const { data, error } = useFetch(fetchCategoriesUrl);
    if (error) {
        message.error(error)
    }

    const [form] = Form.useForm();
    const [isLoading, setLoading] = useState(false)
    const [subcategories, setSubcategories] = useState([]);
    const [category, setCategory] = useState(data);
    const [images, setImages] = useState([]);

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;

    };
    //TODO REFACTOR 
    const handleDeletePhoto = async ({ fileList: newFileList }) => {
        setFileList(newFileList)
    };


    const handleImageChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onSubmitPhotos = async () => {
        setLoading(true);
        const formy = new FormData();
        fileList.forEach(file => {
            formy.append("files", file.originFileObj);
        });


        try {
            const response =
                await fetch(`${apiUrl}/upload/`, {
                    method: 'POST',
                    body: formy
                });
            if (response.ok) {
                message.success("Photos uploaded successfully");
                const data = await response.json();
                if (data) {
                    data.files.forEach(file => {
                        setImages(prevImages => [...prevImages, file]);
                    });
                }
            }
        } catch (error) {
            message.error(error);
        } finally {
            setLoading(false);
        }
    }
    function handleMainCategory(e) {
        setCategory(e);
        setSubcategories([]);
        form.resetFields(["subcategories"]);
        const selectedMainCategory = data.filter(category => category._id === e);
        if (selectedMainCategory[0].subcategory) {
            selectedMainCategory[0].subcategory.forEach(subCat => {
                setSubcategories(prevSub => [...prevSub, subCat]);
            });
        }
    }


    const onFinish = async (values) => {
        setLoading(true);
        const data = { ...values, "images": images, price: { "current": values.current, "discount": values.discount } }
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
                setFileList([]);
                message.success("Product added succesfuly.");
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



                <Form.Item name="desc" label="Product Description" rules={[{ required: true, type: "string", message: "Please enter description." }]}>
                    <ReactQuill theme='snow' />
                </Form.Item>
                <Form.Item name="shortDesc" label="Product Slogan" rules={[{ required: true, type: "string", message: "Please enter product slogan." }]}>
                    <TextArea />
                </Form.Item>
                <Form.Item
                    name="categories"
                    label="Select Main Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please select main category!',
                        },
                    ]}
                >
                    <Select onChange={handleMainCategory} placeholder="Please select a main category!">
                        {data.map((category) => {
                            return <Select.Option key={category._id} value={`${category._id}`}>{category.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>


                <Form.Item
                    name="subcategories"
                    label="Select Subcategory"
                    rules={[
                        {
                            required: true,
                            message: 'Please select subcategory!',
                            type: 'array',
                        },
                    ]}
                >
                    <Select disabled={subcategories.length <= 0} mode="multiple" placeholder="Please select a subcategory!">
                        {subcategories.map((category) => {
                            return <Select.Option key={category._id} value={`${category._id}`}>{category.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>

                <div>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleDeletePhoto}

                    >
                    </Upload>
                </div>

                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Dragger
                        multiple={true}
                        beforeUpload={true}
                        fileList={fileList}
                        onChange={handleImageChange}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload.
                        </p>
                    </Dragger>
                    <Button disabled={!fileList.some(file => file.originFileObj)} onClick={onSubmitPhotos} type='primary'>Upload Photos</Button>

                </Form.Item>





                <Button type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form>
        </Spin >

    )
}


