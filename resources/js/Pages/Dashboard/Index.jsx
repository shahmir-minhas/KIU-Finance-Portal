import React from "react";
import Layout from "../../layout/Index";
import { Select } from "antd";
import Bars from "../../Assets/icons/bars.svg";
import Rate from "../../Assets/icons/Group 3112.svg";
import CashFlowGraph from "../../Components/Dashboard/CashFlowGraph";
import RevenueBarChart from "./../../Components/Dashboard/RevenueBarChart";
import CollegesBarChart from "../../Components/Dashboard/CollegesBarChart";
import FundPieChart from "../../Components/Dashboard/FundPieChart";
import SponsersCard from "../../Components/Dashboard/SponsersCard";

const { Option } = Select;

const Index = () => {
    return (
        <Layout currentPage={0}>
            <div className="dashboard-wrapper">
                <div className="d-flex justify-content-start align-items-center">
                    <h6 className="fw-bold f-18 m-0">Dashboard</h6>
                    <div className="d-flex ms-5 align-items-center">
                        <p className="m-0 me-3 f-14 text-black">Session:</p>
                        <Select
                            defaultValue="2020"
                            className="select-secondary"
                        >
                            <Option value="2019">2019</Option>
                            <Option value="2018">2018</Option>
                            <Option value="2017">2017</Option>
                        </Select>
                    </div>
                    <div className="d-flex ms-5 align-items-center">
                        <p className="m-0 me-3 f-14 text-black">Semester:</p>
                        <Select
                            defaultValue="Fall"
                            className="f-14 select-secondary"
                        >
                            <Option value="Spring">Spring</Option>
                            <Option value="Fall">Fall</Option>
                        </Select>
                    </div>
                </div>

                {/* //  Content  */}

                <div className="row mt-4">
                    <div className="col-4">
                        {/* // Finance Card  */}

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

                        {/* //  College Cashflow Bar Chart */}

                        <CollegesBarChart />

                        {/* //  Sponsers  */}

                        <SponsersCard />

                        {/* //Funds Pie Chart */}

                        <FundPieChart />
                    </div>

                    <div className="col-8">
                        {/* // Cash Inflow / Outflow lineChart */}

                        <CashFlowGraph />

                        {/* // Revenue from top 10 countries Bar Chartt  */}

                        <RevenueBarChart />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
