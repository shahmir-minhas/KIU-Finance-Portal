import IconGraduated from "../../Assets/icons/icon_graduated.svg";
import IconDollarSymbol from "../../Assets/icons/icon_dollar_symbol.svg";
import SaveMoney from "../../Assets/icons/save_money.svg";
import React from "react";

const Statistics = () => {
    return (
        <div className="row statistics-wrapper mb-24">
            <div className="col-5">
                <div className="primary-card-rounded">
                    <h2 className="f-16 fw-500 mb-18">Students</h2>
                    <div className="d-flex justify-content-center">
                        <img src={IconGraduated} alt="" className="mr-30" />
                        <div className="f-18 fw-600">
                            258
                            <span className="d-block color-mid-gray fw-400 f-14">
                                Total
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-7">
                <div className="primary-card-rounded">
                    <h2 className="f-16 fw-500 mb-18">Amount</h2>

                    <div className="d-flex justify-content-between mx-4">
                        <div className="d-flex justify-content-center">
                            <img
                                src={IconDollarSymbol}
                                alt=""
                                className="mr-30"
                            />
                            <div className="f-18 fw-600">
                                258
                                <span className="d-block color-mid-gray fw-400 f-14">
                                    Total
                                </span>
                            </div>
                        </div>
                        <div className="vertical-divider" />
                        <div className="d-flex justify-content-center">
                            <img src={SaveMoney} alt="" className="mr-30" />
                            <div className="f-18 fw-600">
                                258
                                <span className="d-block color-mid-gray fw-400 f-14">
                                    Spent
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
