'use client';
import React from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { setChartData } from './dataSlice';
import { RootState } from './store';
import chartData from './data/stackline_frontend_assessment_data_2021.json';

export default function LineChartSection() {
  const dispatch = useDispatch();

  // Dispatch the static data when the app starts
  React.useEffect(() => {
    const formattedData = chartData[0].sales.map((saleDataPoint) => ({
      weekEnding: saleDataPoint.weekEnding,
      retailSales: saleDataPoint.retailSales,
      wholesaleSales: saleDataPoint.wholesaleSales
    }));
    
    dispatch(setChartData(formattedData));
  }, [dispatch]);

  const data = useSelector((state: RootState) => state.data.chartData);

  const formatMonth = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTooltipDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

    // Variable to track the previous label
    let prevLabel = '';

    const uniqueMonthLabel = (tick: string) => {
      const currentLabel = formatMonth(tick);
      if (currentLabel === prevLabel) {
        return ''; // Hide duplicate month labels
      }
      prevLabel = currentLabel; // Update prevLabel
      return currentLabel; // Show current month label
    };
  

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis 
          dataKey="weekEnding" 
          tickFormatter={uniqueMonthLabel}
          tickMargin={10}
        />
        <Tooltip labelFormatter={(value) => formatTooltipDate(value)} />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};


