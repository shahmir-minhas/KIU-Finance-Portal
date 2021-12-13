import React, { Component } from "react";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { InertiaLink } from '@inertiajs/inertia-react';

import Layout from "../../layout/Index";
import DataTable from "./../../Components/Common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import Action from "../../Assets/icons/Icon material-remove-red-eye.svg";

const Index = () => {
    //status button
    const [status, setStatus] = React.useState(true);
    //dropdown
    const [visible, setvisible] = React.useState(false);

    const data = [
        {
            id: 0,
            name: "Muzamil Afirid",
            feeFor: "Study",
            paymentMethod: "Bank Transfer",
            semester: "6th",
            createdBy: "John Doe",
            status: true,
        },
    ];
    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
        },
        {
            name: "ID",
            selector: (row) => row.id,
        },
        {
            name: "Student Name",
            selector: (row) => row.name,
        },
        {
            name: "Fee for",
            selector: (row) => row.feeFor,
        },
        {
            name: "Payment Method",
            selector: (row) => row.paymentMethod,
        },
        {
            name: "Semester",
            selector: (row) => row.semester,
        },
        {
            name: "Created by",
            selector: (row) => row.createdBy,
        },
        {
            name: "Status",
            selector: (row) => (
                <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    visible={visible}
                    placement="bottomCenter"
                    arrow
                >
                    <Button
                        className={`f-12 ${
                            status ? "btn-approve" : "btn-rejected"
                        } `}
                        type="button"
                        onClick={handleApprove}
                    >
                        {status ? "Approve" : "Rejected"} <DownOutlined />
                    </Button>
                </Dropdown>
            ),
        },
        {
            name: "Action",
            selector: (row) => (
                <InertiaLink href={`/financial-payments/${row.id}`}>
                    <img src={Action} />
                </InertiaLink>
            ),
        },
    ];

    const handleApprove = () => {
        setStatus(!status);
        setvisible(!visible);
    };

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <textarea
                    className="text-area-dropdown f-10"
                    value="Plz enter the reason"
                ></textarea>
            </Menu.Item>
            <Menu.Item key="1">
                <Button className="btn-dropdown-cancel" onClick={handleApprove}>
                    Cencel
                </Button>
                <Button className="btn-dropdown-save">Submit</Button>
            </Menu.Item>
        </Menu>
    );
    return (
        <React.Fragment>
            <Layout currentPage={1}>
                <div className="financial-payments-wrapper">
                    <h6 className="fw-bold f-18 m-0">Financial Payments</h6>

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
                                    <h2 className="f-14 fw-500 mb-0">
                                        Showing enrolled students :
                                        <span className="mx-1">16</span>
                                    </h2>
                                </div>

                                <div className="d-flex align-items-center">
                                    <FormInput className="mb-0" type="search" />
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
