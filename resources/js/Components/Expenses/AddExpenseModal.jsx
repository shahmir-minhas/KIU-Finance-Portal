import React, { Component } from "react";
import {
    Modal,
    Input,
    Button,
    Form,
    Select,
    DatePicker,
    Upload,
    message,
} from "antd";

const AddExpenseModal = () => {
    // Modal Visibility State
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    // Drag and Drop Uplaoder
    const props = {
        name: "file",
        multiple: true,
        action: "#",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(
                    `${info.file.name} file uploaded successfully.`
                );
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };

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
                <h4 className="fw-bold f-18 mb-3">Add Expense</h4>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <div className="row">
                        <div className="col-6">
                            <Form.Item
                                label="Select College"
                                name="college"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select college!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select"
                                    className="select-primary"
                                >
                                    <Select.Option value="Select">
                                        College 1
                                    </Select.Option>
                                    <Select.Option value="2">
                                        College 2
                                    </Select.Option>
                                    <Select.Option value="3">
                                        College 2
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Payment Method"
                                name="paymentMethod"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select your payment method!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select"
                                    className="select-primary"
                                >
                                    <Select.Option value="Select">
                                        payment method 1
                                    </Select.Option>
                                    <Select.Option value="2">
                                        payment method 2
                                    </Select.Option>
                                    <Select.Option value="3">
                                        payment method 3
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Bank name"
                                name="bankName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Bank name!",
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
                                            "Please input your bank country!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select"
                                    className="select-primary"
                                >
                                    <Select.Option value="Select">
                                        Pakistan
                                    </Select.Option>
                                    <Select.Option value="2">
                                        Saudia
                                    </Select.Option>
                                    <Select.Option value="3">
                                        Turkey
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Payment Date"
                                name="paymentDate"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select date!",
                                    },
                                ]}
                            >
                                <DatePicker className="primary-input" />
                            </Form.Item>
                        </div>

                        <div className="col-6">
                            <Form.Item
                                label="Expense Category"
                                name="expenseCategory"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your expense category!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select"
                                    className="select-primary"
                                >
                                    <Select.Option value="Select">
                                        category 1
                                    </Select.Option>
                                    <Select.Option value="2">
                                        category 1
                                    </Select.Option>
                                    <Select.Option value="3">
                                        category 1
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Paid To"
                                name="paidTo"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your paid to!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="Bank Branch"
                                name="bankBranch"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your bank branch!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                            <Form.Item
                                label="To Account No"
                                name="toAccountNo"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your to account no!",
                                    },
                                ]}
                            >
                                <Input className="primary-input" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <Form.Item
                            label="Payment Receipt"
                            name="paymentReceipt"
                            rules={[
                                {
                                    required: true,
                                    message: "Please attach payment reciept",
                                },
                            ]}
                        >
                            <Upload.Dragger
                                {...props}
                                className="primary-upload"
                            >
                                <div className="text-center">
                                    <p>Drag & Drop Files</p>
                                    <p>OR</p>
                                    <p>
                                        <u>Browse</u>
                                    </p>
                                </div>
                            </Upload.Dragger>
                        </Form.Item>
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

            <Button className="btn-add" onClick={showModal}>
                Add Expense
            </Button>
        </React.Fragment>
    );
};

export default AddExpenseModal;
