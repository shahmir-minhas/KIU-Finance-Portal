import { Divider } from "antd";
import React from "react";

const DetailsHeader = () => {
    return (
        <div className="academic-details-wrapper__header">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <p className="f-10 mb-0">demo@gmail.com</p>
                    <h2 className="f-14 fw-600 mb-1">Student John Doe</h2>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="f-12 color-abbey mb-5-px">Scholarship</p>
                        <h2 className="f-14 fw-500">Sibling Concession</h2>
                    </div>
                    <div className="vertical-divider" />
                    <div>
                        <p className="f-12 color-abbey mb-5-px">Semester</p>
                        <h2 className="f-14 fw-500">1st</h2>
                    </div>
                    <div className="vertical-divider" />
                    <div>
                        <p className="f-12 color-abbey mb-5-px">CGPA</p>
                        <h2 className="f-14 fw-500">3.53</h2>
                    </div>
                    <div className="vertical-divider" />
                </div>
            </div>

            <p className="color-black-pearl mb-0">ID-123</p>
            <Divider className="primary-divider" />
            <div className="d-flex justify-content-between">
                <p className="mb-0 f-12">
                    <span className="fw-500">College: </span>
                    <span>College of Religion and Quranic Studies</span>
                </p>
                <p className="mb-0 f-12">
                    <span className="fw-500">Department: </span>
                    <span>Quranic Studies</span>
                </p>
                <p className="mb-0 f-12">
                    <span className="fw-500">Major: </span>
                    <span>Tafseer</span>
                </p>
            </div>
        </div>
    );
};

export default DetailsHeader;
