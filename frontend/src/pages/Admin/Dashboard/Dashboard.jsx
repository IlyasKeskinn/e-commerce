import { Button, Card, Col, Flex, Row, Space, Spin, Statistic, Typography } from 'antd'
import { UserOutlined, ShoppingCartOutlined, RiseOutlined } from '@ant-design/icons';

import React from 'react'
import { SalesPlot } from './Statistic/SalesPlot';
import { UsersChart } from './Statistic/UsersChart';
import { PopularCategories } from './Statistic/PopularCategories';
import Title from 'antd/es/typography/Title';
import { ProductReviews } from '../Feedbacks/ProductReviews';

const data = 23123123
export const Dashboard = () => {



  return (
    <Spin spinning={false}>
      <Space
        direction="vertical"
        size="middle"
      >
        <Row gutter={16}>
          <Col span={8} style={{ height: "100px" }} >
            <Card style={{ backgroundColor: "#333333", height: "100%" }}>
              <Flex justify="space-between" >
                <div>
                  <Typography.Text style={{ color: "white", fontSize: "16px" }}>Total User</Typography.Text>
                  <Statistic valueStyle={{ color: "white" }} value={5734} />
                </div>
                <Flex justify='center' vertical>
                  <Button style={{ backgroundColor: "initial", color: "white", border: "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} shape='circle'>
                    <UserOutlined />
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col span={8} style={{ height: "100px" }} >
            <Card style={{ backgroundColor: "#FAAC14", height: "100%" }}>
              <Flex justify="space-between" >
                <div style={{ color: "white" }}>
                  <Typography.Text style={{ color: "white", fontSize: "16px" }}>Orders</Typography.Text>
                  <Statistic valueStyle={{ color: "white" }} value={1221} />

                </div>
                <Flex justify='center' vertical>
                  <Button style={{ backgroundColor: "initial", color: "white", border: "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} shape='circle'>
                    <ShoppingCartOutlined />
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col span={8} style={{ height: "100px" }} >
            <Card style={{ backgroundColor: "#017BFE", height: "100%" }}>
              <Flex justify="space-between" >
                <div>
                  <Typography.Text style={{ color: "white", fontSize: "16px" }}>Sales</Typography.Text>
                  <Statistic valueStyle={{ color: "white" }} value={25743} />
                </div>
                <Flex justify='center' vertical>
                  <Button style={{ backgroundColor: "initial", color: "white", border: "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} shape='circle'>
                    <RiseOutlined />
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Col>
        </Row>
        <Space></Space>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ height: "100%", width: "100%" }}>
              <Title level={2}>Monthly Sales</Title>
              <SalesPlot />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ height: "100%", width: "100%" }}>
              <Title level={2}>Popular Categories</Title>
              <PopularCategories />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ height: "100%", width: "100%" }}>
              <Title level={2}>Monthly User Registration</Title>
              <UsersChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ height: "100%", width: "100%" }}>
              <Title level={2}>New Comments</Title>
              <ProductReviews />
            </Card>
          </Col>
        </Row>

      </Space>
    </Spin>

  )
}
