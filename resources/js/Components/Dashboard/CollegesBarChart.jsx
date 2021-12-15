import React from "react";
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Cell,
    Tooltip,
} from "recharts";

const CollegesBarChart = () => {
    // temporary data array
    const data = [
        {
            name: "English",
            uv: 4000,
            pv: 3000,
        },
        {
            name: "French",
            uv: 3000,
            pv: 1000,
        },
        {
            name: "Urdu",
            uv: 2000,
            pv: 3230,
        },
        {
            name: "Arabic",
            uv: 2780,
            pv: 3800,
        },
    ];

    const colors = ["#36AA72", "#5F3379", "#343379", "#1F6166"];

    return (
        <div className="colleges-cashflow-card primary-card-rounded mt-4">
            <div className="d-flex justify-content-between mb-18">
                <h6 className="f-14 fw-600">Colleges Cashflow</h6>
                <div>
                    <div className="d-flex align-items-center">
                        <div className="rounded-circle green-circle"></div>
                        <span className="ms-3">Cash Inflow</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="rounded-circle blue-circle"></div>
                        <span className="ms-3">Cash Outflow</span>
                    </div>
                </div>
            </div>
            {/* 
                    // Bar Chart 
            */}
            <div style={{ width: "100%", height: 260 }}>
                <ResponsiveContainer>
                    <BarChart data={data} barGap={0}>
                        <XAxis
                            fontSize={10}
                            fontWeight={300}
                            dataKey="name"
                            strokeWidth={1}
                        />
                        <YAxis fontSize={10} fontWeight={300} strokeWidth={1} />
                        <Tooltip />
                        <Bar barSize={20} dataKey="uv" fill="#089752" />
                        <Bar barSize={20} dataKey="pv" fill="#343379" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CollegesBarChart;
