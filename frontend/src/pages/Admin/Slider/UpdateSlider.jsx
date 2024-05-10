import React, { useCallback, useEffect, useState } from 'react'
import {
    Form, Input, Select, Button, Row, Col, Upload, Checkbox, InputNumber,
    Spin, message
} from "antd"
import { useNavigate, useParams } from 'react-router-dom';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const { TextArea } = Input;
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useFetch from '../../../hooks/useFetch';

export const UpddateSlider = () => {
    const navigate = useNavigate();
    const sliderId = useParams().id;
    const apiUrl = import.meta.env.VITE_BASE_API_URL;


    const fetchUrl = `/slider/getsliderbyid/${sliderId}`;
    const updateUrl = `/slider/updateslider/${sliderId}`;
    const token = localStorage.getItem("x-auth-token");

    const [fileList, setFileList] = useState([]);
    const [images, setImages] = useState([]);

    const [form] = Form.useForm();
    const [isUpload, setUpload] = useState(false)

    const { data, isLoading, error, updateData } = useFetch(updateUrl, "PUT", token);
    const sliderData = useFetch(fetchUrl)



    useEffect(() => {
        if (sliderData.data && sliderData.data._id) {
            setImages(sliderData.data.img);
            setFileList([{ uid: 1, name: sliderData.data.img, status: "done", url: sliderData.data.img }]);
            form.setFieldsValue({
                title: sliderData.data.title,
                sub_title: sliderData.data.sub_title,
                desc: sliderData.data.desc,
                topic: sliderData.data.topic,
                slider_url: sliderData.data.slider_url
            })
        }
    }, [sliderData.data])

    useEffect(() => {
        if (data && data.updatedSlider) {
            navigate("/admin/sliderlist");
        }
        if (error) {
            message.error(error);
        }
    }, [data, error]);

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;

    };

    const onSubmitPhotos = async () => {
        setUpload(true)
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
                        setImages(file.downloadURL);
                    });
                }
            }
        } catch (error) {
            message.error(error);
        } finally {
            setUpload(false);
        }
    }
    const handleDeletePhoto = async () => {
        setFileList([])
    };
    const handleImageChange = async (file) => {
        if (file.fileList.length >= 2) {
            setFileList([file.fileList[1]]);
        }
        else {
            setFileList([file.fileList[0]]);

        }
    };

    const onFinish = async (values) => {
        try {
            setUpload(true)
            const formData = { ...values, "img": images }
            updateData(formData);
        } catch (error) {
            message.error(error)
        } finally {
            setUpload(false)
        }
    }

    return (
        <Spin spinning={isLoading || isUpload}>
            <Form encType="multipart/form-data" style={{ padding: "20px" }}
                name='basic'
                layout='vertical'
                autoComplete='off'
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    label="Slider Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input slider title!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Slider Subtitle"
                    name="sub_title">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Slider Topic"
                    name="topic"
                    rules={[{ max: 50, message: 'Maximum 50!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Slider URl"
                    name="slider_url"
                    rules={[{ max: 200, message: 'Maximum 200!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="desc" label="Slider Description" rules={[
                    { max: 100, message: "Maximum 100!" }
                ]}>
                    <TextArea />
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
                        multiple={false}
                        beforeUpload={true}
                        fileList={fileList}
                        onChange={handleImageChange}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single  upload.
                        </p>
                    </Dragger>
                    <Button disabled={isUpload} onClick={onSubmitPhotos} type='primary'>Upload Photos</Button>

                </Form.Item>

                <Button disabled={isUpload} type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form>
        </Spin >
    );
}



