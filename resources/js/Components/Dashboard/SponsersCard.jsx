import React, { Component } from "react";
import Rate from "../../Assets/icons/Group 3112.svg";

const SponsersCard = () => {
    return (
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
                                <img src={Rate} alt="" className="me-1" />
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
    );
};

export default SponsersCard;
