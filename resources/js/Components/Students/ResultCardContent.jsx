import React from "react";
import SemesterCard from "./SemesterCard";
import AcademicReportCard from "./AcademicReportCard";
import ExportPDF from "../../Assets/icons/pdf-export.svg";
import ArrowDownIcon from "../../Assets/icons/drop-down-icon.svg";
import { Select, Button } from "antd";

const { Option } = Select;

function ResultCardContent(props) {
    const Grades = [
        { grade: "A+", marks: "95-100", points: "95-100", fill: "#39EF6A" },
        { grade: "A", marks: "95-100", points: "95-100", fill: "#6CF69A" },
        { grade: "B+", marks: "95-100", points: "4-5", fill: "#B9EF39" },
        { grade: "B", marks: "95-100", points: "4-5", fill: "#D4FB79" },
        { grade: "C+", marks: "95-100", points: "4-5", fill: "#EAC100" },
        { grade: "C", marks: "95-100", points: "4-5", fill: "#FBE26C" },
        { grade: "D+", marks: "95-100", points: "4-5", fill: "#F5C071" },
        { grade: "D", marks: "95-100", points: "4-5", fill: "#FCEACF" },
        { grade: "F", marks: "95-100", points: "4-5", fill: "#EF3939" },
    ];

    return (
        <div className="ml-26 academic-details-wrapper__content">
            {
                // page heading
            }
            <div className="f-18 fw-600 mb-10">Result Card</div>
            <p className="result-card-qualifation"> Qualifications</p>
            <div className="d-flex mb-0">
                <div className="mr-65">
                    <p className="result-card-college">
                        College:
                        <span className="ml-1">
                            College of Religion and Quranic Studies
                        </span>
                    </p>
                    <p className="result-card-department">
                        Department:{" "}
                        <span className="ml-1">Quranic Studies</span>
                    </p>
                </div>
                <div>
                    <p className="result-card-college-major">
                        Major: <span className="ml-1">Tafseer</span>
                    </p>
                    <p className="result-card-college-education">
                        Education Level: <span className="ml-1">1</span>
                    </p>
                </div>
            </div>
            <div className="student-result-card-wrapper">
                <div className="d-flex justify-content-between">
                    <div style={{ flex: 1 }}>
                        <p className="wrapper-table-heading">Grade scale</p>
                        <p className="wrapper-table-grade">Grade</p>
                        <p className="wrapper-table-points">Points</p>
                    </div>

                    {Grades.map((grade, index) => (
                        <div
                            key={index}
                            className="content-right text-center"
                            style={{ flex: 1 }}
                        >
                            <div className="d-flex justify-content-center">
                                <div
                                    className="grade-color"
                                    style={{
                                        backgroundColor: `${grade.fill}`,
                                    }}
                                ></div>
                            </div>
                            <p className="grade"> {grade.grade}</p>
                            <p className="marks"> {grade.marks}</p>
                            <p className="points"> {grade.points}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-between mb-20">
                <div>
                    <p className="mb-7">Show</p>
                    <Select
                        suffixIcon={<img src={ArrowDownIcon} alt="" />}
                        defaultValue={0}
                        className="select-primary w-156"
                    >
                        <Option value={0}>All Semesters</Option>
                    </Select>
                </div>

                <Button className="button-default-bordered mt-auto">
                    <img src={ExportPDF} className="mr-2" />
                    Export as PDF
                </Button>
            </div>
            <SemesterCard />
            <AcademicReportCard TableName="Reported academic record 2009/2010 Fall Semester" />
        </div>
    );
}

export default ResultCardContent;
