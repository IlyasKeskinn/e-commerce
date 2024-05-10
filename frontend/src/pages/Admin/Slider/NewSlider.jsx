import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Upload, Spin, message } from "antd"
import { InboxOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';



const { Dragger } = Upload;

export const NewSlider = () => {

    const apiUrl = import.meta.env.VITE_BASE_API_URL;

    const [fileList, setFileList] = useState([]);
    const fetchUrl = "/slider/postslider";
    const token = localStorage.getItem("x-auth-token");

    const { data, isLoading, error, postData } = useFetch(fetchUrl, "POST", token);

    const navigate = useNavigate();

    const [form] = Form.useForm();
    const [isUpload, setUpload] = useState(false)
    const [images, setImages] = useState();

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;

    };
    const handleDeletePhoto = async ({ fileList: newFileList }) => {
        setFileList(newFileList)
    };


    const handleImageChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onSubmitPhotos = async () => {
        setUpload(true);
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


    const onFinish = async (values) => {
        setUpload(true);
        const formData = { ...values, "img": images }
        postData(formData)
    }

    useEffect(() => {
        if (error) {
            message.error(error.message);
        }
        if (data && data.newSlider) {
            form.resetFields();
            setFileList([]);
        }
    }, [data, error])


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
                    name="sub_title"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Slider URL"
                    name="slider_url"
                    rules={[{ max: 200, message: 'Maximum 200!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Slider Topic"
                    name="topic"
                    rules={[{ max: 50, message: 'Maximum 50!' }]}>
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
                    <Button disabled={!fileList.some(file => file.originFileObj)} onClick={onSubmitPhotos} type='primary'>Upload Photos</Button>

                </Form.Item>

                <Button disabled={isUpload} type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form>
        </Spin >

    )
}


