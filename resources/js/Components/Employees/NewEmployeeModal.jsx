import React, { Component } from "react";
import { Modal, Input, Button, Form, Select } from "antd";
import AddIcon from "../../Assets/icons/Icon material-add-circle.svg";

const NewEmployeeModal = () => {
    // Modal Visibility State
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

    // Form handle
    const onFinish = () => {
        console.log("Success:");
    };

    const onFinishFailed = () => {
        console.log("Failed:");
    };

    return (
        <React.Fragment>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={776}
                className="create-modals-layout"
            >
                <h4 className="fw-bold f-18 mb-3">Create New Employee</h4>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <div className="row">
                        <div className="col-6">
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your name!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="Salary"
                                name="salary"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your salary!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="Bank Country"
                                name="bankCountry"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your Bank Country!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select"
                                    className="select-primary"
                                >
                                    <Select.Option value="Saudia">
                                        Saudia
                                    </Select.Option>
                                    <Select.Option value="Pakistan">
                                        Pakistan
                                    </Select.Option>
                                    <Select.Option value="UAE">
                                        UAE
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Account Number"
                                name="accountNo"
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
                        </div>
                        <div className="col-6">
                            <Form.Item
                                label="Designation"
                                name="designation"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your designation!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="Bank Name"
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
                                label="Branch"
                                name="branch"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your branch!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="IBAN Number"
                                name="ibanNumber"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your IBAN number!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="Bank Swift Code"
                                name="bankSwiftCode"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your bank swift code!",
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
                    <Button onClick={onFinish} className="btn-modal-create">
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

export default NewEmployeeModal;
