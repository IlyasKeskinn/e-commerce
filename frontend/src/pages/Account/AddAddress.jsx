import React, { useEffect, useState } from 'react';
import "./Account.css"
import { Form, Input, Select, Col, Row, InputNumber, Spin, message } from 'antd';
import proviencesData from "../../../data/turkey_ provinces.json";
import districtData from "../../../data/turkey_districts.json";
import neighbourhoodData from "../../../data/turkey_neighbourhood.json"
import neighbourhoodData2 from "../../../data/turkey_neighbourhood2.json"
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;


export const AddAdressForm = () => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";
    const navigate = useNavigate();
    const [districts, setDistricts] = useState([]);
    const [town, setTown] = useState([]);
    const [neighbourhood, setNeighbourhood] = useState([]);
    const [form] = Form.useForm();
    const fetchURL = `/user/postAddress/${user.user._id}`
    const { data, isLoading, error, updateData } = useFetch(fetchURL, "PUT", token);

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                defaultValue={"90"}
                style={{
                    width: 90,
                }}
            >
                <Option value="90">+90</Option>
            </Select>
        </Form.Item>
    );


    const onFormChange = (e) => {
        if (e.city) {
            setDistricts([]);
            setTown([]);
            setNeighbourhood([]);
            form.setFieldsValue({ "town": "", "districts": "", "neighbourhood": "", })
            const filteredDistricts = districtData.filter(district => district.il_id === e.city);
            setDistricts(filteredDistricts);
        }
        if (e.district) {
            setTown([]);
            setNeighbourhood([]);
            form.setFieldsValue({ "town": "", "neighbourhood": "", })
            const filteredTown = neighbourhoodData.filter(town => town.ilce_id === e.district);
            setTown(filteredTown);
        } if (e.town) {
            setNeighbourhood([]);
            form.setFieldValue("neighbourhood", "");
            const filteredNeighbourhood = neighbourhoodData2.filter(neighbourhood => neighbourhood.koy_id === e.town);
            setNeighbourhood(filteredNeighbourhood);
        }
    }
    const onFinish = async (values) => {
        const formData = { "userId": user.user._id, ...values };
        updateData(formData);
    }
    
    useEffect(() => {
        if (error) {
            message.error(error.message);
        }
        if (data && data.user_address) {
            navigate(`/account/address`)
            form.resetFields();
        }
    }, [data, error])

    return (
        <Spin spinning={isLoading}>
            <Form
                name='basic'
                labelCol={{
                    span: 8,
                }}
                form={form}
                wrapperCol={{
                    span: 24,
                }}
                onFinish={onFinish}
                onValuesChange={onFormChange}
                size='large'
                layout="vertical"
                style={{
                    maxWidth: "100%",
                }}
            >
                <Form.Item name={"title"} label="Address Title" rules={[{ required: true, message: "Please enter a address title!" }]}>
                    <Input placeholder="Address Title" />
                </Form.Item>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <Form.Item name={"name"} label="Name" rules={[{ required: true, message: "Please enter a name!" }]}>
                            <Input placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name={"surname"} label="Surname" rules={[{ required: true, message: "Please enter a surname!" }]}>
                            <Input placeholder="Surname" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="City" name={"city"} required rules={[{ required: true, message: "Please select a city!" }]}>
                    <Select>
                        {proviencesData.map((city) => {
                            return <Select.Option key={city.id} value={city.id}>{city.name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <Form.Item name={"district"} label="District" required rules={[{ required: true, message: "Please select a district!" }]}>
                            <Select disabled={districts.length <= 0}>
                                {districts.map((district) => { return <Select.Option key={district.id} value={district.id}>{district.name}</Select.Option> })}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item name={"town"} label="Town" required rules={[{ required: true, message: "Please select a town!" }]}>
                            <Select disabled={town.length <= 0}>
                                {town.map((town) => { return <Select.Option key={town.id} value={town.id}>{town.name}</Select.Option> })}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name={"neighbourhood"} label="Neighbourhood" required rules={[{ required: true, message: "Please select a neighbourhood!" }]}>
                    <Select disabled={neighbourhood.length <= 0}>
                        {neighbourhood.map((neighbourhood) => { return <Select.Option key={neighbourhood.id} value={neighbourhood.id}>{neighbourhood.name}</Select.Option> })}
                    </Select>
                </Form.Item>

                <Row gutter={16}>
                    <Col className="gutter-row" span={16}>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name={"postal_code"} label="Zip Code" rules={[{ required: true, message: "Zip code is required!" }, { defaultField: Number, message: "Please enter a postal code!" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Address" name={"address"} rules={[{ required: true, message: "Address is required!" }]}>
                    <TextArea rows={4} />
                </Form.Item>
                <div className="button__wrapper my-5">
                    <button htmlType="submit" className="text-uppercase button btn-primary w-100" style={{ padding: "20px " }} >
                        Submit
                    </button>
                </div>
            </Form>
        </Spin>
    )
}

