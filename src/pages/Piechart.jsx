// PieChartComponent.js
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';



const PieChartComponent = () => {
    const[yourDonationData,setYourDonationData]=useState([])

    useEffect(()=>{
        const donationData=JSON.parse(localStorage.getItem('donatedItem'))
          if(donationData){
            setYourDonationData(donationData)
          }
    },[])
  const data = [
  { name: 'Your Donation', value: yourDonationData.length },
  { name: 'Total Donation', value: 12 },
];

const COLORS = ['#00C49F', '#FF444A'];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
