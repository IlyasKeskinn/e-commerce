import { Tag, Table, Button, message, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import useFetchWithToken from '../../../hooks/useFetchWithToken';
import { useEffect, useState } from 'react';

export const ProductReviews = () => {
  const navigate = useNavigate();
  const fetchURL = "/product/get_all_comments";
  const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";
  const { data, isLoading, error } = useFetchWithToken(fetchURL, token,);
  const [comments,setComments] = useState([]);



  const columns = [
    {
      title: "User",
      dataIndex: "userName",
      key: "userName",
      render: (text) => <b>{text}</b>,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (text) => <div style={{width : "100px"}}><Rate style={{fontSize : "10px"}} disabled defaultValue={text} /></div>
    },
    {
      title: "R",
      dataIndex: "reviewText",
      key: "reviewText",
      render: (reviewText) => <span>{reviewText}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type='dashed' onClick={() => { navigate(`/admin/feedbacks/update_contacts/${record._id}`) }}>Action</Button>
      )
    }
  ]


  console.log(data);
  useEffect(() => {
    data.map((product) => {
      product.reviews.map((review) => {
        setComments((prevReviews) => [...prevReviews, review]);
      })
    })
  },[data])

  console.log(comments);
  return (
    <div>
      <Table style={{ textTransform: "capitalize" }} columns={columns} dataSource={comments} loading={isLoading} rowKey={(record) => record._id} />
    </div>
  )
}

