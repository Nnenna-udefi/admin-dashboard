import React from 'react'
import { Line } from 'react-chartjs-2'

const Linechart = () => {

    const data ={
        labels: [
            'Jan', 'Feb', 'March', 'April', 'May' ],
            datasets: [
               { 
                 label: 'No of Signups (M)',
                data: [3, 2, 2, 1, 5],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(255, 206, 86, 0.2)']
            }
            ]
    }
  return 
    
        <Line data ={data} />
 
  
}

export default Linechart
