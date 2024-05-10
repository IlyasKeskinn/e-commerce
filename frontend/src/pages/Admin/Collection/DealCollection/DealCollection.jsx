import { React, useEffect, useState } from 'react'
import {
    Form, Input, DatePicker, Button, Upload,
    Spin, message
} from "antd"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

import { useNavigate } from 'react-router-dom';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;


import useFetch from '../../../../hooks/useFetch';

export const DealCollection = () => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_BASE_API_URL;

    const fetchUrl = `/collection/get_deal_collection/`;
    const token = localStorage.getItem("x-auth-token");

    const collectionData = useFetch(fetchUrl)

    const [fileList, setFileList] = useState([]);
    const [images, setImages] = useState([]);

    const [form] = Form.useForm();
    const [isUpload, setUpload] = useState(false)
    const [updateURL, setUpdateURL] = useState("");


    const { data, isLoading, error, updateData } = useFetch(updateURL, "PUT", token);




    useEffect(() => {
        if (collectionData.data && collectionData.data[0]) {
            setImages(collectionData.data[0].img);
            setFileList([{ uid: 1, name: collectionData.data[0].img, status: "done", url: collectionData.data[0].img }]);
            const date = dayjs(collectionData.data[0].date);

            form.setFieldsValue({
                "title": collectionData.data[0].title,
                "topic": collectionData.data[0].topic,
                "collection_url": collectionData.data[0].collection_url,
                "date-time-picker": date
            });
            setUpdateURL(`/collection/update_deal_collection/${collectionData.data[0]._id}`);

        }
    }, [collectionData.data[0]])

    useEffect(() => {
        if (data && data._id) {
            navigate("/admin");
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
        const date = form.getFieldValue("date-time-picker");
        try {
            setUpload(true)
            const formData = { ...values, "img": images, date: date }
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
                    label="Collection Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input collection title!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Collection Topic"
                    name="topic"
                    rules={[{ max: 50, message: 'Maximum 50!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="date-time-picker"
                >
                    <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        showTime={{
                            defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Collection URl"
                    name="collection_url"
                    rules={[{ max: 200, message: 'Maximum 200!' }]}>
                    <Input />
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



