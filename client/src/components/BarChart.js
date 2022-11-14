import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  aspectRatio: 5,
  indexAxis: 'y',
  borderSkipped: false,
  barPercentage: 0.3,
  plugins: {
          //top title
    title: {
      display: true,
      text: 'Total Ingredient',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false
      }
    },
  },
};
//side label
const labels = [''];

function BarChart({ product }){
  const d1 = product.ingredients.filter(function(item){
    return item.ewg_rating <= 2  
  });

  const d2 = product.ingredients.filter(function(item){
    return (item.ewg_rating >= 3 && item.ewg_rating <= 6)
  });

  const d3 = product.ingredients.filter(function(item){
    return item.ewg_rating >= 7
  });
  
  const d4 = product.ingredients.filter(function(item){
    return item.ewg_rating === "N/A"
  });

  const data = {
    labels,
    datasets: [
      {
        label: '1-2 Low risk',
        data: 
        [d1.length],
        backgroundColor: '#40BDCF'
      },
      {
        label: '3-6 Middle risk',
        data: 
        [d2.length],
        backgroundColor: '#FDBE23',
      },
      {
        label: '7-10 High risk',
        data: 
        [d3.length],
        backgroundColor: '#F46954',
      },
      {
        label: 'N/A',
        data: 
        [d4.length],
        backgroundColor: '#DDDDDD',
      },
    ],
  };
  return (
    <div>
      <Bar
        options={options}
        data={data}
    />
    </div>
  )
} 

export default BarChart

