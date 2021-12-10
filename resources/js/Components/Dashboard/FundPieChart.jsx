import React, { Component } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const FundPieChart = () => {
    const data = [
        { name: "Salaries", value: 100 },
        { name: "Examination", value: 75},
        { name: "Advertisment", value: 60 },
        { name: "Others", value: 50},
    ];

    const COLORS = ["#5F3379", "#089752", "#343379", "#1F6166"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);


        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                className="f-14"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        // <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={160}>
            <Legend layout='vertical' align="right" verticalAlign="middle" iconSize={10} fontSize={12}/>
            <Pie
                cx={75}
                cy={75}
                data={data}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                innerRadius={25}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
        </PieChart>
        // </ResponsiveContainer>
    );
};

export default FundPieChart;
