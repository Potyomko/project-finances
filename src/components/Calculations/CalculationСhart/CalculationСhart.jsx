import React from 'react';
import { Bar } from 'react-chartjs-2';

const CalculationChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.name),
        datasets: [
            {
                label: 'Ціна',
                data: data.map(item => item.price),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Bar data={chartData} />
        </div>
    );
};

export default CalculationChart;