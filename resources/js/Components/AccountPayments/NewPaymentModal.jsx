import React, { Component } from "react";
import { Modal, Button } from "antd";
import AddIcon from "../../Assets/icons/Icon material-add-circle.svg";

const NewPaymentModal = () => {
// Modal Visibility State
    const [isModalVisible, setIsModalVisible] = React.useState(false);
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
                width={776}
                className="new-employee-modal"
            >
                <h4 className="fw-bold f-18 mb-3">Create New Employee</h4>

                <div className="mt-3 text-end">
                    <Button
                        onClick={handleCancel}
                        className="btn-modal-cancel me-3"
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleOk} className="btn-modal-create">
                        Create
                    </Button>
                </div>
            </Modal>

            <Button className="btn-create-new" onClick={showModal}>
                <span className="me-2">
                    <img src={AddIcon} alt="" />
                </span>
                Create new
            </Button>
        </React.Fragment>
    );
};

export default NewPaymentModal;
