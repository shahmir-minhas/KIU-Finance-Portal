import React, { Component } from "react";
import Layout from "../../layout/Index";
import BackIcon from "../../Assets/icons/Icon material-arrow_back.svg";
import Recipt from "../../Assets/recipt.png";
import { InertiaLink } from "@inertiajs/inertia-react";


const PaymentRecipt = () => {
    const id = window.history.state.url.split('/').pop();
    return (
        <Layout currentPage={2}>
            <div className="payment-recipt-wrapper">
                <h6 className="fw-bold f-18 m-0">Details</h6>
                <div className="mt-4 primary-card-rounded">
                    <div>
                        <InertiaLink href={`/expenses/${id}`}>
                            <span>
                                <img src={BackIcon} alt="" className="me-1" />
                            </span>
                            Back
                        </InertiaLink>
                    </div>
                    <div className="border-top border-bottom mt-3 p-3">
                        <h6 className="mb-3">Payment receipt</h6>
                        <div className="row">
                            <div className="col-3">
                                <div className="img-holder"><img src={Recipt} alt="" /></div>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-3">
                                        <div className=" mb-5 details-cell">
                                            <p>Expense ID</p>
                                            <h6>120348</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Payment Date</p>
                                            <h6>Study</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>To Account No</p>
                                            <h6>PK230125697786</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Updated at</p>
                                            <h6>20-jan-2021</h6>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className=" mb-5 details-cell">
                                            <p>Student Name</p>
                                            <h6>Jibran Azghar</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Bank name</p>
                                            <h6>Allied Bank ltd</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Created by</p>
                                            <h6>John Doe</h6>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className=" mb-5 details-cell">
                                            <p>Payment method</p>
                                            <h6>Bank</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Bank Branch</p>
                                            <h6>Bara Tower</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Created at</p>
                                            <h6>10-jan-2021</h6>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className=" mb-5 details-cell">
                                            <p>Payed to</p>
                                            <h6>John Doe</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Bank Country</p>
                                            <h6>Pakistan</h6>
                                        </div>
                                        <div className=" mb-5 details-cell">
                                            <p>Updated by</p>
                                            <h6>John Doe</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PaymentRecipt;
