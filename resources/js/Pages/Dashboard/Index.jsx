import React from "react";
import Layout from "../../layout/Index";
import { Select } from "antd";
import Bars from "../../Assets/icons/bars.svg";
import Rate from "../../Assets/icons/Group 3112.svg";
import AmountGraph from "../../Components/Dashboard/AmountGraph";
import GenderAreaChart from "./../../Components/Dashboard/GenderAreaChart";
import RevenueBarChart from "./../../Components/Dashboard/RevenueBarChart";
import ScholarshipsProgramTable from "./../../Components/Dashboard/ScholarshipsProgramTable";
import Statistics from "./../../Components/Dashboard/Statistics";
import CollegesBarChart from "../../Components/Dashboard/CollegesBarChart";
import FundPieChart from "../../Components/Dashboard/FundPieChart";

const { Option } = Select;

const Index = () => {
    return (
        <Layout currentPage={0}>
            <div className="dashboard-wrapper">
                <div className="d-flex justify-content-start align-items-center">
                    <h6 className="fw-bold f-18 m-0">Dashboard</h6>
                    <div className="d-flex ms-5 align-items-center">
                        <p className="m-0 me-3 f-14">Session</p>
                        <Select defaultValue="2020">
                            <Option value="2019">2019</Option>
                            <Option value="2018">2018</Option>
                            <Option value="2017">2017</Option>
                        </Select>
                    </div>
                    <div className="d-flex ms-5 align-items-center">
                        <p className="m-0 me-3 f-14">Semester</p>
                        <Select defaultValue="Fall" className="f-14">
                            <Option value="Spring">Spring</Option>
                            <Option value="Fall">Fall</Option>
                        </Select>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-4">
                        <div className="finance-card primary-card-rounded">
                            <h6 className="f-14 fw-600">Finance</h6>
                            <div className="d-flex justify-content-between">
                                <img src={Bars} alt="" />
                                <div className="text-end">
                                    <p className="f-12">Total</p>
                                    <h4 className="f-22 fw-600">$2,582,123</h4>
                                    <p className="f-10">
                                        <span className="me-1">
                                            <img
                                                src={Rate}
                                                alt=""
                                                className="me-1"
                                            />
                                            20%
                                        </span>
                                        Since last month
                                    </p>
                                </div>
                            </div>
                        </div>

                        <CollegesBarChart />

                        <div className="sponsors-card primary-card-rounded mt-4">
                            <h6 className="f-14 fw-600 m-0">Sponsors</h6>
                            <hr />
                            <div className="card-content">
                                <div className="d-flex justify-content-between border-bottom py-2 align-items-center">
                                    <p>Total Sponsors</p>
                                    <div className="text-end">
                                        <p className="f-16">45</p>
                                        <p className="f-10 f-color-grey">
                                            <span className="me-1 f-12">
                                                <img
                                                    src={Rate}
                                                    alt=""
                                                    className="me-1"
                                                />
                                                20%
                                            </span>
                                            Since last month
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between py-2 align-items-center">
                                    <p>Sponsors Funds</p>
                                    <div className="text-end">
                                        <p className="f-16">$4,532,637</p>
                                        <p className="f-12">Spent $123,312</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-top py-2 align-items-center">
                                    <div>
                                        <p>Scholarship</p>
                                        <p>Students</p>
                                    </div>
                                    <div className="text-end">
                                        <p className="f-16">150</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="funds-utilization-card primary-card-rounded mt-4">
                            <h6 className="f-14 fw-600 mb-4">
                                Funds Utilization
                            </h6>
                            <FundPieChart />
                        </div>
                    </div>

                    <div className="col-8">
                        <AmountGraph />
                        <RevenueBarChart />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
