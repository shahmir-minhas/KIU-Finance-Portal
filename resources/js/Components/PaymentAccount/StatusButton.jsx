import React, { Component } from "react";
import { Button, Menu, Dropdown, Input, Form } from "antd";
import { DownOutlined } from "@ant-design/icons";

const StatusButton = ({ payStatus, id }) => {
    console.log(payStatus, id);
    //  status button
    const [status, setStatus] = React.useState(payStatus);
    //  dropdown
    const [visible, setvisible] = React.useState(false);
    //   handling status approve/reject
    const handleApprove = () => {
        setStatus(!status);
        setvisible(!visible);
    };
    // handling form
    const onFinish = () => {
        console.log("Success:");
    };

    const onFinishFailed = () => {
        console.log("Failed:");
    };
    //  Dropdown menu
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        className="mb-0"
                        name="reason"
                        rules={[
                            {
                                required: true,
                                message: "Please input your reason!",
                            },
                        ]}
                    >
                        <Input.TextArea
                            className="text-area-dropdown f-10 mb-0"
                            rows={6}
                            placeholder="Plz enter the reason"
                        />
                    </Form.Item>
                </Form>
            </Menu.Item>
            <Menu.Item key="1">
                <div className="text-end">
                    <Button
                        className="btn-dropdown-cancel"
                        onClick={handleApprove}
                    >
                        Cencel
                    </Button>
                    <Button className="btn-dropdown-submit" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={["click"]}
            visible={visible}
            placement="bottomCenter"
            arrow
        >
            <Button
                className={`f-12 ${status ? "btn-active" : "btn-rejected"} `}
                type="button"
                onClick={handleApprove}
            >
                {status ? "Active" : "Inactive"} <DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default StatusButton;
