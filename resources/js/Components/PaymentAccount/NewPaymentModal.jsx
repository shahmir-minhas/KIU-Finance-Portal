import React, { Component } from "react";
import { Modal, Button, Form, Switch, Input } from "antd";
import AddIcon from "../../Assets/icons/Icon material-add-circle.svg";

const NewPaymentModal = () => {
    // Modal Visibility State
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [switchStatus, setSwitchStatus] = React.useState(true);

    // Modal handling
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Form handling
    const onFinish = () => {
        console.log("Success:");
    };

    const onFinishFailed = () => {
        console.log("Failed:");
    };

    //Switch Handling
    const handleSwitch = () => {
        setSwitchStatus(!switchStatus);
    };

    return (
        <React.Fragment>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={776}
                className="payment-modal create-modals-layout"
            >
                <h4 className="fw-bold f-18 mb-3">Create New Account</h4>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <div className="row">
                        <div className="col-6">
                            <Form.Item
                                label="Account Name"
                                name="accountName"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your account name!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="Bank branch (English/Arabic)"
                                name="bankBranch"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your bank branch in English or Arabic!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <div className="row">
                                <div className="col-8">
                                    <Form.Item
                                        label="Swift Code"
                                        name="swiftCode"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your swift code!",
                                            },
                                        ]}
                                    >
                                        <Input className="primary-input" />
                                    </Form.Item>
                                </div>
                                <div className="col-4">
                                    <Form.Item label="Status" name="">
                                        <Switch
                                            checked={switchStatus}
                                            onChange={handleSwitch}
                                            className={`${
                                                switchStatus
                                                    ? "bg-success"
                                                    : "bg-secondary"
                                            }`}
                                        />
                                        <span className="ms-2 status">
                                            {switchStatus
                                                ? "Active"
                                                : "Inactive"}
                                        </span>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <Form.Item
                                label="Bank name (English/Arabic)"
                                name="bankName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your bank name!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="Account number"
                                name="accountNumber"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your account number!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                        </div>
                    </div>
                </Form>
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
