import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



// In the object of Array you created you were not writting the key value well.
// I don't know much of chart for now, so i got this one from online. though i tried comparing it with your own, but is only at the Object arrays i saw mistake.

function Linechart() {

    const data = [
        {
            "name": "Jan ",
            "Product A": 3432,
            "Product B": 2342
        },
        {
            "name": "Feb ",
            "Product A": 2342,
            "Product B": 3246
        },
        {
            "name": "Mar ",
            "Product A": 4565,
            "Product B": 4556
        },
        {
            "name": "Apr ",
            "Product A": 6654,
            "Product B": 4465
        },
        {
            "name": "May ",
            "Product A": 8765,
            "Product B": 4553
        },
        {
            "name": "Jun ",
            "Product A": 6578,
            "Product B": 4833
        },
        {
            "name": "July ",
            "Product A": 7352,
            "Product B": 5244
        }
    ]
        return (
            <LineChart width={650} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
                <Line type="monotone" dataKey="Product B" stroke="#FF0000" />
            </LineChart>
        )
    };
export default Linechart;

