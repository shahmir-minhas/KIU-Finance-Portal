import React from "react";
import { Table } from "antd";
import { DataTable } from "react-data-table-component";

function SemesterCard(props) {
    const dataSource = [
        {
            key: 1,
            CourseCode: "10000201",
            Coursename: "المدخل لعلوم الحديث الشريف",
            Division: "First",
            Credits: "3",
            Created: "2021-01-27 15:38:31",
            Updated: "2021-01-27 15:38:31",
        },
        {
            key: 2,
            CourseCode: "10000201",
            Coursename: "المدخل لعلوم الحديث الشريف",
            Division: "First",
            Credits: "3",
            Created: "2021-01-27 15:38:31",
            Updated: "2021-01-27 15:38:31",
        },
        {
            key: 3,
            CourseCode: "10000201",
            Coursename: "المدخل لعلوم الحديث الشريف",
            Division: "First",
            Credits: "3",
            Created: "2021-01-27 15:38:31",
            Updated: "2021-01-27 15:38:31",
        },
        {
            key: 4,
            CourseCode: "10000201",
            Coursename: "المدخل لعلوم الحديث الشريف",
            Division: "First",
            Credits: "3",
            Created: "2021-01-27 15:38:31",
            Updated: "2021-01-27 15:38:31",
        },
        {
            key: 5,
            CourseCode: "10000201",
            Coursename: "المدخل لعلوم الحديث الشريف",
            Division: "First",
            Credits: "3",
            Created: "2021-01-27 15:38:31",
            Updated: "2021-01-27 15:38:31",
        },
    ];

    const columns = [
        {
            title: "Course Code",
            dataIndex: "CourseCode",
            key: "Course Code",
        },
        {
            title: "Course name",
            dataIndex: "Coursename",
            key: "Course name",
        },
        {
            title: "Division",
            dataIndex: "Division",
            key: "Division",
        },

        {
            title: "Credits",
            dataIndex: "Credits",
            key: "Credits",
        },
        {
            title: "Created",
            dataIndex: "Created",
            key: "Created",
            render: (value) => <span className="color-silver">{value}</span>,
        },
        {
            title: "Updated",
            dataIndex: "Updated",
            key: "Updated",
            render: (value) => <span className="color-silver">{value} </span>,
        },
    ];

    return (
        <div className="semester-card mb-30">
            <h1 className="text-center f-16 fw-500">
                Current semester Result card ( 2020/2021 Spring Semester )
            </h1>

            <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
}

export default SemesterCard;
