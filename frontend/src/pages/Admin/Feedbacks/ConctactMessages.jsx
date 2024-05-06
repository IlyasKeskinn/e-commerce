import { Tag, Table, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useFetchWithToken from '../../../hooks/useFetchWithToken';

export const ConctactMessages = () => {
    const navigate = useNavigate();
    const fetchURL = "/contact/get_contacts";
    const token = localStorage.getItem("x-auth-token") ? JSON.parse(localStorage.getItem("x-auth-token")) : "";


    const statusColor = (status) => {
        let color;
        switch (status.toLowerCase()) {
            case 'new':
                color = '#f50';
                break;
            case 'progress':
                color = '#19b7b7';
                break;
            case 'closed':
                color = '#87d068';
                break;
            default:
                color = '#6a7070';
        }
        return color;
    };

    const columns = [
        {
            title: "User Mail",
            dataIndex: "mail",
            key: "mail",
            render: (text) => <b>{text}</b>,
        },
        {
            title: "Messeages",
            dataIndex: "msg",
            key: "msg",
            render: (msg) => <p style={{ width: "75px" }} className='truncate'>{msg}</p>,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => <Tag color={`${statusColor(status)}`} >{status}</Tag>

        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button type='primary' onClick={() => { navigate(`/admin/feedbacks/update_contacts/${record._id}`) }}>Details</Button>
            )
        }
    ]

    const { data, isLoading, error} = useFetchWithToken(fetchURL, token,);

    if (error) {
        message.error(error)
    }

    return (
        <div>
            <Table style={{ textTransform: "capitalize" }} columns={columns} dataSource={data} loading={isLoading} rowKey={(record) => record._id} />
        </div>
    )
}

