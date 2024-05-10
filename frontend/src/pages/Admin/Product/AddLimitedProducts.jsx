import React, { useEffect, useRef, useState } from 'react'
import { Space, Table, Button, message, Input, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useFetch from '../../../hooks/useFetch'


export const AddLimitedProducts = () => {

    const fetchUrl = `/product/getproducts`;
    const postLimitedProductURL = `/product/postlimitedProduct`;
    const limitedURL = `/product/getlimitedproducts`;
    const token = localStorage.getItem("x-auth-token");
    const [products, setProducts] = useState([]);
    const fetchedProducts = useFetch(fetchUrl);
    const limitedProducts = useFetch(limitedURL);

    const { data, isLoading, error, postData } = useFetch(postLimitedProductURL, "POST", token);

    const [selectedKeys, setSelectedKeys] = useState('');
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input ref={searchInput} placeholder={`Search ${dataIndex}`} value={selectedKeys[0]} onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block', }}
                />
                <Space>
                    <Button type="primary" onClick={() => handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
                        Search
                    </Button>
                    <Button type="link" size="small" onClick={() => { close() }}>
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
    });

    const addLimitedProduct = (productId) => {
        const formData = { product: productId };
        postData(formData)
    }


    useEffect(() => {
        if (data && data.product) {
            const updatedProducts = products.filter((product) => product._id !== data.product);
            setProducts(updatedProducts);
            message.success("The product has been successfully added to the limited products list.")
        }
        if (error) {
            message.error(error);
        }
    }, [data, error]);

    useEffect(() => {
        if (fetchedProducts.error) {
            message.error(fetchedProducts.error.message)
        }
        if (limitedProducts.data && limitedProducts.data.length >= 1) {
            const updatedProducts = fetchedProducts.data.filter((product) => {
                return !limitedProducts.data.some((limitedProduct) => limitedProduct.product._id === product._id);
            });
            setProducts(updatedProducts);
        }
    }, [fetchedProducts.data, fetchedProducts.error, , limitedProducts.data]);
    const columns = [
        {
            title: "Image",
            dataIndex: "images",
            key: "image",
            render: (images) => <img src={`./img/images/${images[0]}`} alt="Image" width={100} />,

        },
        {
            title: "Product",
            dataIndex: "title",
            key: "title",
            ...getColumnSearchProps("title"),
            render: (title) => <b>{title}</b>,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button onClick={() => { addLimitedProduct(record._id) }}>Add Limited Product List</Button>
            )
        },

        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => <b>{price.current}</b>,
        },
    ]


    return (

        <div>
            <Spin spinning={isLoading}>
                <Table
                    style={{ textTransform: "capitalize" }}
                    columns={columns}
                    dataSource={products}
                    loading={fetchedProducts.isLoading}
                    rowKey={(record) => record._id} />
            </Spin>
        </div>
    )
}
