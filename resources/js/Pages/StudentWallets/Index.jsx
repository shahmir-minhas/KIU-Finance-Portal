import React, { Component } from "react";
import Layout from "../../layout/Index";
import DataTable from "./../../Components/Common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";

const Index = () => {
    const data = [
        {
            id: 0,
            walletId: "0312",
            studentName: "John Doe",
            studentId: "ID-0923",
            totalUSD: "$4438",
            totalSar: "1200",
            spentUSD: "$7453",
            spentSAR: "1200",
        },
        {
            id: 1,
            walletId: "0312",
            studentName: "John Doe",
            studentId: "ID-0923",
            totalUSD: "$4438",
            totalSar: "1200",
            spentUSD: "$7453",
            spentSAR: "1200",
        },
        {
            id: 2,
            walletId: "0312",
            studentName: "John Doe",
            studentId: "ID-0923",
            totalUSD: "$4438",
            totalSar: "1200",
            spentUSD: "$7453",
            spentSAR: "1200",
        },
    ];
    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
        },
        {
            name: "Wallet ID",
            selector: (row) => row.walletId,
        },
        {
            name: "Student Name",
            selector: (row) => (
                <div className="d-flex flex-column">
                    <div className="mt-2">{row.studentName}</div>
                    <span className="mb-2">{row.studentId}</span>
                </div>
            ),
        },
        {
            name: "Total USD (SAR)",
            selector: (row) => (
                <div className="d-flex align-items-center">
                    <div className="me-1">{row.totalUSD}</div>
                    <span>({row.totalSar})</span>
                </div>
            ),
        },
        {
            name: "Spent USD (SAR)",
            selector: (row) => (
                <div className="d-flex align-items-center">
                    <div className="me-1">{row.spentUSD}</div>
                    <span>({row.spentSAR})</span>
                </div>
            ),
        },
    ];

    return (
        <React.Fragment>
            <Layout currentPage={3}>
                <div className="student-wallet-wrapper">
                    <div className="d-flex justify-content-start align-items-center">
                        <h6 className="fw-bold f-18 m-0">Student wallets</h6>
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
                                    Showing all student wallets :
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

export default Index;
