import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const ChartComponent = (props) => {
  
  /*
        ______________________randomly generate colors
  
  const generateColors = (data) => {
    const colors = [];
    const colorCount = data.length;
    
    for (let i = 0; i < colorCount; i++) {
      // Generate a random color
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      colors.push(color);
    }
    
    return colors;
  };

  const colors = generateColors(props.gridItems); // Generate unique colors
  */

  const colors = ['#1ABC9C', '#5D6D7E', '#7D3C98', '#2471A3', '#229954', '#E67E22', '#0E6655', '#27AE60', '#884EA0', '#626567'];
  return (
    <PieChart width={400} height={500}>
      <Pie
        data={props.gridItems}
        dataKey="loc"
        nameKey="title"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {props.gridItems.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default ChartComponent;
