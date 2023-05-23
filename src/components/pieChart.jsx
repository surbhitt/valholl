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
  const chartDimen = {
    xs: 300,
    sm: 400,
    md: 500,
    lg: 600,
  };
  const chartRad = {
    xs: 70,
    sm: 100,
    md: 120,
    lg: 150,
  };
  // Determine the height based on the current breakpoint
  const getChartDimen = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return chartDimen.lg;
    } else if (screenWidth >= 992) {
      return chartDimen.md;
    } else if (screenWidth >= 768) {
      return chartDimen.sm;
    } else {
      return chartDimen.xs;
    }
  };
  const getChartRad = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return chartRad.lg;
    } else if (screenWidth >= 992) {
      return chartRad.md;
    } else if (screenWidth >= 768) {
      return chartRad.sm;
    } else {
      return chartRad.xs;
    }
  };

  const colors = ['#1ABC9C', '#5D6D7E', '#7D3C98', '#2471A3', '#229954', '#E67E22', '#0E6655', '#27AE60', '#C91C1C', '#626567'];
  const chartDimension = getChartDimen();
  const chartRadius = getChartRad();
  return (
    <PieChart width={chartDimension} height={chartDimension}>
      <Pie
        data={props.gridItems}
        dataKey="loc"
        nameKey="title"
        cx="50%"
        cy="50%"
        outerRadius={chartRadius}
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
