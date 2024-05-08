import { Line } from '@ant-design/plots';
import React from 'react';

// TODO :Make it dynamic
export const UsersChart = () => {
  const data = [
    { month: 'Jan', user: 200 },
    { month: 'Feb', user: 700 },
    { month: 'Mar', user: 760 },
    { month: 'Apr', user: 1000 },
    { month: 'May', user: 2500 },
  ];
  const config = {
    data,
    xField: 'month',
    yField: 'user',
    point: {
      shapeField: 'circle',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: true,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Line {...config} />;
};

