"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function LineChartComponent() {
  const data = [
    {
      name: "Jan",
      Sales: 100,
    },
    {
      name: "Feb",
      Sales: 500,
    },
    {
      name: "Mar",
      Sales: 300,
    },
    {
      name: "Apr",
      Sales: 200,
    },
    {
      name: "May",
      Sales: 150,
    },
    {
      name: "Jun",
      Sales: 320,
    },
    {
      name: "Jul",
      Sales: 50,
    },
  ];

  return (
    <>
      <p className="font-normal text-sm w-fit mx-auto pl-6 mb-4">
        Statistics for the year
      </p>
      <ResponsiveContainer
        className="w-full p-0 m-0 box-border mx-auto"
        aspect={1.5}
      >
        <LineChart
          className="w-full p-0 m-0"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#E47513" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
