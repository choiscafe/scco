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
// const ingredients = ingredients.all
// const d1 = product.ingredients.filter(function(item){
//   if (item.ewg_rating <= 2 ) {
//     return d1.count();
//   } else {
//     return false;
//   }
// });
const data = {
  labels,
  datasets: [
    {
      label: '1-2 Low risk',
      data: 
      [9],
      // d1,
      backgroundColor: '#40BDCF',
    },
    {
      label: '3-6 Middle risk',
      data: [2],
      backgroundColor: '#FDBE23',
    },
    {
      label: '7-10 High risk',
      data: [0],
      backgroundColor: '#F46954',
    },
    {
      label: 'N/A',
      data: [0],
      backgroundColor: '#DDDDDD',
    },
  ],
};

function BarChart({ product }){
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

