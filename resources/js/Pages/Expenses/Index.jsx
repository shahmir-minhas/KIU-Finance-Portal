import React, { Component } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import Layout from "../../layout/Index";
import DataTable from "./../../Components/Common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import AddExpenseModal from "./../../Components/Expenses/AddExpenseModal";
import ActionEdit from "../../Components/Expenses/ActionEdit";

import AddIcon from "../../Assets/icons/Icon material-add-circle.svg";

const Index = () => {
    const data = [
        {
            id: 0,
            totalExpenses: "$30213",
            category: "Inventory",
        },
        {
            id: 1,
            totalExpenses: "$4322",
            category: "Inventory",
        },
        {
            id: 2,
            totalExpenses: "$7621",
            category: "Inventory",
        },
    ];
    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
        },
        {
            name: "Category",
            selector: (row) => (
                <InertiaLink href={`expenses/${row.id}`}>
                    {row.category}
                </InertiaLink>
            ),
        },
        {
            name: "Total Expenses",
            selector: (row) => row.totalExpenses,
        },
        {
            name: "Action",
            selector: (row) => <ActionEdit />,
        },
    ];

    return (
        <React.Fragment>
            <Layout currentPage={2}>
                <div className="expenses-wrapper">
                    <div className="d-flex justify-content-start align-items-center">
                        <h6 className="fw-bold f-18 m-0">Expenses</h6>
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
                                <h2 className="f-14 fw-500 mb-0">
                                    Showing all Expenses Category
                                </h2>
                                <div className="d-flex align-items-center">
                                    <InertiaLink
                                        href={`#`}
                                        className="create-category"
                                    >
                                        <span className="me-2">
                                            <img src={AddIcon} alt="" />
                                        </span>
                                        Create new Category
                                    </InertiaLink>
                                    {/* 
                                        //   Add Expense modal 
                                    */}
                                    <AddExpenseModal />
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
