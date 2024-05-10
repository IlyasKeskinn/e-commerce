import React, { useCallback, useEffect, useState } from 'react'
import { Popconfirm, Space, Table, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

export const Orders = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false)
    const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;


    const columns = [
        {
            title: "Customer Email",
            dataIndex: "metadata",

        },
        {
            title: "Price",
            dataIndex: "amount",
            render :(amount) => <b>${Math.round(amount / 100).toFixed(2)}</b>
          },
    ]



useEffect(() => {
    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.stripe.com/v1/payment_intents`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
                    },
                }
            );

            if (response.ok) {
                const { data } = await response.json();
                setData(data);

            } else {
                message.error("Data fetch failed");
            }
        } catch (error) {
            console.log("Data error:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
}, [MY_STRIPE_SECRET_KEY]);

const date = new Date(1715056644 * 1000)

return (
    <div>
        <Table style={{ textTransform: "capitalize" }} columns={columns} dataSource={data} loading={isLoading} rowKey={(record) => record.id} />
    </div>
)
}
