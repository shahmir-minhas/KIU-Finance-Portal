import React, { Component } from "react";
import Layout from "../../layout/Index";
import DataTable from "./../../Components/Common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import EditIcon from "../../Assets/icons/Icon material-edit.svg";
import DelIcon from "../../Assets/icons/Icon material-remove-circle.svg";
import NewPaymentModal from "./../../Components/PaymentAccount/NewPaymentModal";
import StatusButton from "./../../Components/PaymentAccount/StatusButton";

const Index = () => {
    const [btnStatus, setBtnStatus] = React.useState(true);
    const data = [
        {
            id: "0225",
            accountNo: "0312546987226",
            swiftCode: "03115",
            status: true,
            createdAt: "10-jan-2021",
            updatedAt: "10-jan-2021",
        },
        {
            id: "0471",
            accountNo: "0312546987226",
            swiftCode: "03115",
            status: false,
            createdAt: "10-jan-2021",
            updatedAt: "10-jan-2021",
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
            name: "Account Number",
            selector: (row) => row.accountNo,
        },
        {
            name: "Swift Code",
            selector: (row) => row.swiftCode,
        },
        {
            name: "Status",
            selector: (row) => (
                <StatusButton payStatus={row.status} id={row.id} />
            ),
        },
        {
            name: "Created at",
            selector: (row) => row.createdAt,
        },
        {
            name: "Updated at",
            selector: (row) => (
                <span className="paid-status">{row.updatedAt}</span>
            ),
        },
        {
            name: "Action",
            selector: (row) => (
                <div>
                    <img src={EditIcon} alt="" className="me-2" />
                    <img src={DelIcon} alt="" />
                </div>
            ),
        },
    ];
    const handleBtnStatus = () => {
        setBtnStatus(!btnStatus);
    };
    return (
        <React.Fragment>
            <Layout currentPage={5}>
                <div className="payment-account-wrapper">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="fw-bold f-18 m-0">Payment Account</h6>
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
                                        Showing all Payment Accounts
                                    </h2>
                                </div>

                                <div className="d-flex ms-5 align-items-center">
                                    <NewPaymentModal />
                                    <FormInput
                                        className="mb-0 ms-3"
                                        type="search"
                                    />
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
