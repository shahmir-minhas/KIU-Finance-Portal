import React from "react";
import { Table } from "antd";

function AcademicReportCard(props) {
    const GradeBarBG = {
        "A+": "#39EF6A",
        A: "#6CF69A",
        "B+": "#B9EF39",
        B: "#D4FB79",
        "C+": "#EAC100",
        C: "#FBE26C",
        "D+": "#F8990B",
        D: "#F5C071",
        F: "#EF3939",
    };

    const Grades = [
        {
            CourseCode: "A+",
            Coursename: "95-100",
            Division: "95-100",
            Credits: "3",
            Points: "3",
            Grade: "F",
            key: 0,
        },
        {
            CourseCode: "A",
            Coursename: "95-100",
            Division: "95-100",
            Credits: "3",
            Points: "3",
            Grade: "F",
            key: 1,
        },
        {
            CourseCode: "B+",
            Coursename: "95-100",
            Division: "4-5",
            Credits: "3",
            Points: "3",
            Grade: "B",
            key: 2,
        },
        {
            CourseCode: "B",
            Coursename: "95-100",
            Division: "4-5",
            Credits: "3",
            Points: "3",
            Grade: "A+",
            key: 3,
        },
        {
            CourseCode: "A+",
            Coursename: "95-100",
            Division: "4-5",
            Credits: "3",
            Points: "3",
            Grade: "F",
            key: 4,
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
            title: "Points",
            dataIndex: "Points",
            key: "Points",
        },
        {
            title: "Grade",
            dataIndex: "Grade",
            key: "Grade",
            render: (value, record) => (
                <div>
                    <span className="w-27 d-inline-block">{value}</span>
                    <span
                        className="result-color-bar"
                        style={{ backgroundColor: GradeBarBG[value] }}
                    ></span>
                </div>
            ),
        },
    ];

    const OldReportsTableColumn = [
        {
            title: "Credits",
            dataIndex: "Credits",
            key: "Credits",
        },

        {
            title: "Registered",
            dataIndex: "Registered",
            key: "Registered",
        },
        {
            title: "Passed",
            dataIndex: "Passed",
            key: "Passed",
        },
        {
            title: "Gained",
            dataIndex: "Gained",
            key: "Gained",
        },
        {
            title: "Points",
            dataIndex: "Points",
            key: "Points",
        },
        {
            title: "Average",
            dataIndex: "Average",
            key: "Average",
        },
    ];
    const OldGrades = [
        {
            key: 1,
            Credits: "Quaterly",
            Registered: "19",
            Passed: "0",
            Gained: "19",
            Points: "19",
            Average: "1",
        },
        {
            key: 2,
            Credits: "Cumulative",
            Registered: "19",
            Passed: "0",
            Gained: "19",
            Points: "19",
            Average: "1",
        },
    ];

    return (
        <div className="report-card">
            <div className="card-wrapper bg-white">
                <h1 className="text-center f-16 fw-500">
                    Reported academic record 2009/2010 Fall Semester
                </h1>

                <Table
                    pagination={false}
                    dataSource={Grades}
                    columns={columns}
                />
                <Table
                    pagination={false}
                    className="header-transparent"
                    dataSource={OldGrades}
                    columns={OldReportsTableColumn}
                />
            </div>
        </div>
    );
}

export default AcademicReportCard;
