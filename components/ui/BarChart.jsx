import React from "react";
import {
  Bar,
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "jun",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "feb",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "mar",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "apr",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "may",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "jun",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "jul",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "aug",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "sep",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "oct",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "nov",
    total: Math.floor(Math.random() * 5000) + 100,
  },
  {
    name: "dec",
    total: Math.floor(Math.random() * 5000) + 100,
  },
];
export default function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        dsad
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]}></Bar>
      </BarGraph>
    </ResponsiveContainer>
  );
}
