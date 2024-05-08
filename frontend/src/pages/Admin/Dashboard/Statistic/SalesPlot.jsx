import React from 'react'
import { Column } from "@ant-design/plots"

// TODO :Make it dynamic
export const SalesPlot = () => {
    const data = [
        { month: 'Jan', sales: 1000 },
        { month: 'Feb', sales: 2500 },
        { month: 'Mar', sales: 500 },
        { month: 'Apr', sales: 4500 },
        { month: 'May', sales: 3500 },

    ];


    const config = {
        data,
        xField: 'month',
        yField: 'sales',
        style: {
            fill: ({ sales }) => {
                if (sales <= 500) {
                    return "#F5212D";
                } else if (sales <= 1500 && sales > 500) {
                    return '#7ABA78';
                }
                return '#017BFD';
            },
        },
        label: {
            text: (originData) => {
                const val = parseFloat(originData.value);
                if (val < 0.05) {
                    return (val * 100).toFixed(1) + '%';
                }
                return '';
            },
            offset: 10,
        },
        legend: false,
    };
    return <Column {...config} />;

}
