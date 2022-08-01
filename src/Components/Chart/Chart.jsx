import React from 'react';
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Jan',
        "Patients Registered": 400,
    },
    {
        name: 'Feb',
        "Patients Registered": 300,
       
    },
    {
        name: 'Mar',
        "Patients Registered":370,
       
    },
    {
        name: 'Apr',
        "Patients Registered": 780,
        
    },
    {
        name: 'May',
        "Patients Registered": 400,
       
    },
    {
        name: 'Jun',
        "Patients Registered": 190,
       
    },
    {
        name: 'Jul',
        "Patients Registered": 640,
      
    },
    {
        name: 'Aug',
        "Patients Registered": 450,
       
    },
    {
        name: 'Sep',
        "Patients Registered": 700,
        
    },
    {
        name: 'Oct',
        "Patients Registered": 830,
      
    },
    {
        name: 'Nov',
        "Patients Registered": 600,
       
    },
    {
        name: 'Dec',
        "Patients Registered": 300,

    }
];


const Chart = ({dataKey,title}) => {
    return(
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    ) 
}

export default Chart;