import React, { Children, Component } from "react";
import { Modal } from "antd";
import ExportDropdown from "../Common/ExportDropdown";

const DetailsModal = ({ id }) => {
    console.log(id);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    //Modal Handle
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <React.Fragment>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={932}
                className="employee-details-modal"
            >
                <h4 className="fw-bold f-18 mb-3">Details</h4>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex justify-content-between">
                            <p>User ID</p>
                            <p>2316</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Designation</p>
                            <p>Faculty</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Bank</p>
                            <p>Demo Bank</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Branch</p>
                            <p>Demo Branch</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Account No</p>
                            <p>96 05230 0228 2340 0014 0000</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Account name</p>
                            <p>John Doe</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Salary Status</p>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-between">
                            <p>Name</p>
                            <p>John Doe</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Salary</p>
                            <p>3500 (SAR)</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Bank Country</p>
                            <p>Pakistan</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Bank swift code</p>
                            <p>0321</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>IBAN number</p>
                            <p>96 05230 0228 2340 0014 0000</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Amount Paid</p>
                            <p>200 (SAR)</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-end">
                    <ExportDropdown />
                </div>
            </Modal>
            <span className="text-decoration-underline" onClick={showModal}>
                {id}
            </span>
        </React.Fragment>
    );
};

export default DetailsModal;
