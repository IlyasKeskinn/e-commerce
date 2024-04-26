import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { json } from 'react-router-dom';

export const UploadComponent = () => {
    const [fileList, setFileList] = useState([]);


    const handleUpload = () => {
        const formy = new FormData();
        fileList.forEach(file => {
            console.log(file);
            formy.append("files", file.originFileObj);
        });
      
        formy.append('name', 'ABC');   //append the values with key, value pair

        for(var pair of formy.entries()) {
            console.log(pair[0]+', '+pair[1]);
          }
      
        fetch('http://localhost:3000/upload/photo', {
            method: 'POST',
            body: formy
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Burada sunucudan gelen yanıta göre işlem yapabilirsiniz
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleChange = info => {
        let fileList = [...info.fileList];

        // Dosya boyutu kontrolü yapılabilir
        fileList = fileList.slice(-1);

        setFileList(fileList);
    };
    

    return (
        <>
            <Upload
            beforeUpload={true}
                fileList={fileList}
                onChange={handleChange}
            >
                <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
            <Button onClick={handleUpload}>Upload</Button>
        </>
    );
};

