import React, { useCallback, useEffect, useState } from 'react'
import {
    Form, Input, Select, Button, Row, Col, Upload, Checkbox, InputNumber,
    Spin, message
} from "antd"
import { useNavigate, useParams } from 'react-router-dom';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const { TextArea } = Input;
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useFetch from '../../../hooks/useFetch';

export const UpdateProduct = () => {
    const navigate = useNavigate();
    const productId = useParams().id;

    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = `/product/getproducts/${productId}`;
    const updateUrl = "/product/updateProduct";
    const token = localStorage.getItem("x-auth-token");

    const [oldImages, setOldImages] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [images, setImages] = useState([]);

    const [form] = Form.useForm();
    const [isUpload, setUpload] = useState(false)
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    const { data, isLoading, error } = useFetch(fetchUrl);


    const fetchCategories = useCallback(async () => {
        setUpload(true);
        try {
            const response = await fetch(`${apiUrl}/category/getCategories`, {
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
            setUpload(false);
        }

    }, [apiUrl]);


    useEffect(() => {
        if (data && data.title) {
            data.images.map(image => setImages((prevImages => [...prevImages, image])));
            data.images.map((image, index) => { setFileList(prevFiles => [...prevFiles, { uid: index, name: image, status: "done", url: `../../../../src/images/${image}` }]) });
            setCategoryId(data.categories._id);
            data.subcategories.map((subcat) => { setSubcategories((prevSub) => [...prevSub, subcat]) });
            form.setFieldsValue({
                title: data.title,
                size_options: data.size_options,
                color_options: data.color_options,
                desc: data.desc,
                current: data.price.current,
                discount: data.price.discount,
                categories: data.categories._id,
                subcategories: data.subcategories.map((subcat) => { return (subcat._id); }),
                shortDesc: data.shortDesc
            })
        } fetchCategories();
    }, [data, fetchCategories])

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;

    };


    const handleChangePhoto = ({ fileList: newFileList }) => {
        setFileList(newFileList)
    };

    const onSubmitPhotos = async () => {
        setUpload(true)
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
                    await data.forEach(file => {
                        setImages(prevImages => [...prevImages, file.filename]);
                    });
                }
            }
        } catch (error) {
            message.error(error);
        } finally {
            setUpload(false);
        }
    }
    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
        setOldImages(fileList.filter(file => !newFileList.some(newFile => newFile.uid === file.uid)));
        setImages(images.filter(image => oldImages.some(oldImage => oldImage === image)));
    };


    function handleMainCategory(e) {
        setCategoryId(e);
        setSubcategories([]);
        form.resetFields(["subcategories"]);
        const selectedMainCategory = categories.filter(category => category._id === e);
        if (selectedMainCategory[0].subcategory) {
            selectedMainCategory[0].subcategory.forEach(subCat => {
                setSubcategories(prevSub => [...prevSub, subCat]);
            });
        }
    }

    function handleSubCategory() {
        const selectedMainCategory = categories.filter(category => category._id === categoryId);
        setSubcategories([]);
        if (selectedMainCategory[0].subcategory) {
            selectedMainCategory[0].subcategory.forEach(subCat => {
                setSubcategories(prevSub => [...prevSub, subCat]);
            });
        }
    }



    //TODO Refactor
    const onFinish = async (values) => {
        setUpload(true);
        const data = { ...values, "images": images, price: { "current": values.current, "discount": values.discount }, categorylist: subcategories, "deletedImagePaths": oldImages }
        try {
            const response = await fetch(`${apiUrl}${updateUrl}/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                navigate("/admin/productlist")
            } else {
                const { error } = await response.json();
                message.error(error);
            }
        } catch (error) {
            message.error(error)
        } finally {
            setUpload(false);
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
                    <Select onChange={handleMainCategory} disabled={categories.length <= 0} placeholder="Please select a main category!">
                        {categories.map((category) => {
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
                    <Select onClick={() => handleSubCategory()} mode="multiple" placeholder="Please select a subcategory!">
                        {subcategories.map((category) => {
                            return <Select.Option  key={category._id} value={`${category._id}`}>{category.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <div>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                    >
                    </Upload>
                </div>

                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Dragger
                        multiple={true}
                        beforeUpload={true}
                        fileList={fileList}
                        onChange={handleChangePhoto}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload.
                        </p>
                    </Dragger>
                    <Button disabled={!fileList.some(file => file.originFileObj) || isUpload} onClick={onSubmitPhotos} type='primary'>Upload Photos</Button>
                </Form.Item>


                <Button disabled={isUpload} type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form>
        </Spin >

    );
}



