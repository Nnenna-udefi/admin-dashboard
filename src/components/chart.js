import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



// In the object of Array you created you were not writting the key value well.
// I don't know much of chart for now, so i got this one from online. though i tried comparing it with your own, but is only at the Object arrays i saw mistake.

function Linechart() {

    const data = [
        {
            "name": "Jan",
            "No. of SignUps": 4000,
        },
        {
            "name": "Feb",
            "No. of SignUps": 3000,
        },
        {
            "name": "Mar",
            "No. of SignUps": 2000,
        },
        {
            "name": "Apr",
            "No. of SignUps": 2780,
        },
        {
            "name": "May",
            "No. of SignUps": 1890,
        },
        {
            "name": "June",
            "No. of SignUps": 2390,
           
          },
          {
            "name": "July",
            "No. of SignUps": 3490,
          
          },
    ]
        return (
            <LineChart width={730} height={250} data={data} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line type ="monotone" dataKey="No. of SignUps" stroke="#5550bd"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
            </LineChart>
        )
    };
export default Linechart;