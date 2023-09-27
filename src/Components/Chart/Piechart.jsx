/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend } from 'recharts';
import { useState,useEffect } from 'react';

  const Piechart=()=> {

    const[yourDonationData,setYourDonationData]=useState([])
    const [totalDonation,setTotalDonation]=useState([])

    useEffect(()=>{
        const donationData=JSON.parse(localStorage.getItem('donatedItem'))
          if(donationData){
            setYourDonationData(donationData)
          }
          fetch("/donation.json")
          .then(res=>res.json())
          .then(data=>setTotalDonation(data))
    },[])
  const data = [
  { name: 'Your Donation', value: yourDonationData.length },
  { name: 'Total Donation', value: totalDonation.length-yourDonationData.length },
];
    
    const COLORS = ['#00C49F', '#FF444A', '#FFBB28', '#FF8042'];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={800}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend iconSize={30}></Legend>
        </PieChart>
      </ResponsiveContainer>
    );
  }

  
export default Piechart;
