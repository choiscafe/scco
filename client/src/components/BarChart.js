import React from 'react'

import { Bar } from 'react-chartjs-2'

function BarChart(){
  return (
    <div>
      <Bar
        data={{
          labels: ["red", "yellow"]
        }}
        height={400}
        width={600}
      />
    </div>
  )
} 

export default BarChart

