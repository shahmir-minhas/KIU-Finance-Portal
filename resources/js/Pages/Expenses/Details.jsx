import React, { Component } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import Layout from "../../layout/Index";
import DataTable from "./../../Components/Common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import GreenEye from "../../Assets/icons/Icon material-remove-red-eye.svg";
import BackIcon from "../../Assets/icons/Icon material-arrow_back.svg";

const Details = () => {
    const data = [
        {
            id: 0,
            paymentMethod: "Bank Transfer",
            date: "10-jan-2021",
        },
        {
            id: 1,
            paymentMethod: "Bank Transfer",
            date: "10-jan-2021",
        },
        {
            id: 2,
            paymentMethod: "Bank Transfer",
            date: "10-jan-2021",
        },
    ];
    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
        },
        {
            name: "Expense ID",
            selector: (row) => row.id,
        },
        {
            name: "Payment Method",
            selector: (row) => row.paymentMethod,
        },
        {
            name: "Date",
            selector: (row) => row.date,
        },
        {
            name: "Action",
            selector: (row) => (
                <InertiaLink href={`/expenses/payment-recipt/${row.id}`}>
                    <img src={GreenEye} />
                </InertiaLink>
            ),
        },
    ];

    return (
        <React.Fragment>
            <Layout currentPage={2}>
                <div className="expenses-details-wrapper">
                    <InertiaLink href={`/expenses`} className="d-flex">
                        <span>
                            <img src={BackIcon} alt="" className="me-1" />
                        </span>
                        <h6 className="f-18 m-0">Inventory</h6>
                    </InertiaLink>

                    <div className="border border-top-0">
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            keyField="id"
                            paginationPerPage={8}
                        >
                            <div className="primary-table-header border mt-4">
                                <h2 className="f-14 fw-500 mb-0">
                                    Showing all Inventory Expenses:
                                    <span className="mx-1">16</span>
                                </h2>
                                <FormInput className="mb-0" type="search" />
                            </div>
                        </DataTable>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Details;
