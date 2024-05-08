import React from 'react';
import { Pie } from '@ant-design/plots';

// TODO :Make it dynamic
export const PopularCategories = () => {
    const config = {
        data: [
            { category: 'Women', sale: 671 },
            { category: 'Men', sale: 517 },
            { category: 'Kids', sale: 293 },
            { category: "Home", sale: 45 }
        ],
        angleField: 'sale',
        colorField: 'category',
        label: {
            text: 'sale',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
    };
    return <Pie {...config} />;
};

