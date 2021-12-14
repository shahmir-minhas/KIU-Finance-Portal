import React, { Component } from "react";
import { Select } from "antd";
import Layout from "../../layout/Index";

import AllCountriesBarChart from "./../../Components/Dashboard/AllCountriesBarChart";

const { Option } = Select;
const AllCountries = () => {
    return (
        <React.Fragment>
            <Layout currentPage={0}>
                <div className="dashboard-wrapper">
                    <div className="d-flex justify-content-start align-items-center">
                        <h6 className="fw-bold f-14 m-0">Countries</h6>
                        <div className="d-flex ms-5 align-items-center">
                            <p className="m-0 me-3 f-14 text-dark">Session:</p>
                            <Select defaultValue="2020" className="select-secondary">
                                <Option value="2019">2019</Option>
                                <Option value="2018">2018</Option>
                                <Option value="2017">2017</Option>
                            </Select>
                        </div>
                        <div className="d-flex ms-5 align-items-center">
                            <p className="m-0 me-3 f-14 text-dark">Semester:</p>
                            <Select defaultValue="Fall" className="f-14" className="select-secondary">
                                <Option value="Spring">Spring</Option>
                                <Option value="Fall">Fall</Option>
                            </Select>
                        </div>
                    </div>
                    {/* 
                        // Shows All Countries Bar Chart  
                    */}
                    <AllCountriesBarChart />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AllCountries;
