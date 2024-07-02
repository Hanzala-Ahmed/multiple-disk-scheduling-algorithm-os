// src/components/SeekChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { color } from 'chart.js/helpers';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SeekChart = ({ seekSequence }) => {
  const data = {
    labels: seekSequence.map((_, idx) => idx),
    datasets: [
      {
        label: 'Disk Scheduling Seek Sequence',
        data: seekSequence,
        fill: false,
        borderColor: 'white',
        tension: 0.1,
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Sequence',
          color:"white"
        },
        grid:{
          color:"white"
        },
        ticks:{
          color:"white"
        },border:{
          color:"white"
        }
      },
      y: {
        title: {
          display: true,
          text: 'Disk Position',
          color:"white"
        },
        grid:{
          color:"white"
        },
        ticks:{
          color:"white"
        },border:{
          color:"white"
        },
        min: 0,
        max: 200
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Change the label color
          // font: {
          //   size: 14, 
          //   family: 'Arial', 
          //   style: 'italic'
          // }
        }
      }}
  };

  return <Line data={data} options={options} />;
};

export default SeekChart;

