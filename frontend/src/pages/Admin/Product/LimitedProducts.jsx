import React, { useEffect, useRef, useState } from 'react'
import { Space, Table, Button, message, Input, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useFetch from '../../../hooks/useFetch';


export const LimitedProducts = () => {
  const apiUrl = import.meta.env.VITE_BASE_API_URL;
  const fetchUrl = `/product/getlimitedproducts`;
  const deleteLimitedProductURL = `/product/deleteLimitedProduct`;
  const token = localStorage.getItem("x-auth-token");
  const [products, setProducts] = useState([]);


  const [selectedKeys, setSelectedKeys] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const { data, isLoading, error } = useFetch(fetchUrl);

  useEffect(() => {
    if (data && data.length >= 1) {
      setProducts(data)
    }
    if (error) {
      message.error(error);
    }
  }, [data, error])

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}${deleteLimitedProductURL}/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        }
      });
      if (response.ok) {
        message.success("Deleted successfully.");
        const updatedProducts = products.filter((product) => product._id !== productId);
        setProducts(updatedProducts);
      }
      else {
        const { error } = await response.json();
        message.error(error);
      }
    } catch (error) {
      message.error(error);
    }
  }


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

  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "image",
      render : (_, record) =>  <img src={`../src/images/${record.product.images[0]}`} alt="Image" width={100} />,

    },
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      render : (_, record) => <b>{record.product.title}</b>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render : (_, record) => <b>{record.product.price.current}</b>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button danger={true} onClick={() => { deleteProduct(record._id) }}>Remove List</Button>
      )
    },
  ]
  console.log(products);
  return (
    <div>
      <Spin spinning={isLoading}>
        <Table
          style={{ textTransform: "capitalize" }}
          columns={columns}
          dataSource={products}
          rowKey={(record) => record._id} />
      </Spin>
    </div>
  )
}
