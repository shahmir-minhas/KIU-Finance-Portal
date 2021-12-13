import React, { Component } from "react";
import { Select } from "antd";
import Layout from "../../layout/Index";
import DataTable from "./../../Components/Common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import EditIcon from "../../Assets/icons/Icon material-edit.svg";
import ExportDropdown from "../../Components/Common/ExportDropdown";
import ImportDropdown from "../../Components/Common/Antd/Import";
import NewEmployeeModal from "./../../Components/Employees/NewEmployeeModal";
import DetailsModal from "./../../Components/Employees/DetailsModal";

const { Option } = Select;

const Index = () => {
    const data = [
        {
            id: "0225",
            name: "John Doe",
            designation: "Faculty",
            salary: "35,000",
            bankName: "Allied Bank Limited Pakistan",
            salaryStatus: "Paid",
            amountPaid: "35,000",
        },
        {
            id: "0342",
            name: "John Doe",
            designation: "Faculty",
            salary: "35,000",
            bankName: "Allied Bank Limited Pakistan",
            salaryStatus: "Paid",
            amountPaid: "35,000",
        },
        {
            id: "0948",
            name: "John Doe",
            designation: "Faculty",
            salary: "35,000",
            bankName: "Allied Bank Limited Pakistan",
            salaryStatus: "Paid",
            amountPaid: "35,000",
        },
    ];
    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
        },
        {
            name: "ID",
            selector: (row) => <DetailsModal id={row.id} />,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Designation",
            selector: (row) => row.designation,
        },
        {
            name: "Salary",
            selector: (row) => (
                <div className="d-flex align-items-center">
                    <div className="me-1">{row.salary}</div>
                    <span>(SAR)</span>
                </div>
            ),
        },
        {
            name: "Bank Name",
            selector: (row) => row.bankName,
        },
        {
            name: "Salary Status",
            selector: (row) => (
                <span className="paid-status">{row.salaryStatus}</span>
            ),
        },
        {
            name: "Amount Paid",
            selector: (row) => row.amountPaid,
        },
        {
            name: "Action",
            selector: (row) => <img src={EditIcon} alt="" />,
        },
    ];

    return (
        <React.Fragment>
            <Layout currentPage={4}>
                <div className="employees-wrapper">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="fw-bold f-18 m-0">Employees</h6>
                        <NewEmployeeModal />
                    </div>
                    <div className="border border-top-0">
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            keyField="id"
                            paginationPerPage={8}
                        >
                            <div className="primary-table-header border mt-4">
                                <div className="d-flex align-items-center">
                                    <h2 className="f-14 fw-500 mb-0 me-3">
                                        Showing all Employees :
                                        <span className="mx-1">16</span>
                                    </h2>
                                    <ExportDropdown className="me-3" />
                                    <ImportDropdown />
                                </div>
                                <div>
                                    <div className="d-flex ms-5 align-items-center">
                                        <p className="m-0 me-3 f-14">View:</p>
                                        <Select defaultValue="All     ">
                                            <Option value="All">All</Option>
                                            <Option value="Faculty">
                                                Faculty
                                            </Option>
                                            <Option value="Staff">Staff</Option>
                                            <Option value="Admin">Admin</Option>
                                        </Select>
                                        <FormInput
                                            className="mb-0 ms-3"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </DataTable>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Index;
