import React from "react";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Action from "../../Assets/icons/Icon material-remove-red-eye.svg";
//status button
const [status, setStatus] = React.useState(true);
//dropdown
const [visible, setvisible] = React.useState(false);

const menu = (
    <Menu>
        <Menu.Item key="0">
            <textarea
                className="text-area-dropdown f-10"
                value="Plz enter the reason"
            ></textarea>
        </Menu.Item>
        <Menu.Item key="1">
            <Button className="btn-dropdown-cancel">Cencel</Button>
            <Button className="btn-dropdown-save">Submit</Button>
        </Menu.Item>
    </Menu>
);
export const columns = [
    {
        name: "S.no",
        selector: (row, index) => index + 1,
    },
    {
        name: "ID",
        selector: (row) => row.id,
    },
    {
        name: "Student Name",
        selector: (row) => row.name,
    },
    {
        name: "Fee for",
        selector: (row) => row.feeFor,
    },
    {
        name: "Payment Method",
        selector: (row) => row.paymentMethod,
    },
    {
        name: "Semester",
        selector: (row) => row.semester,
    },
    {
        name: "Created by",
        selector: (row) => row.createdBy,
    },
    {
        name: "Status",
        selector: (row) => (
            <Dropdown
                overlay={menu}
                trigger={["click"]}
                visible={visible}
                placement="bottomCenter"
                arrow
            >
                <Button
                    className={`f-12 ${
                        status ? "btn-approve" : "btn-rejected"
                    } `}
                    type="button"
                    onClick={handleApprove}
                >
                    {status ? "Approve" : "Rejected"} <DownOutlined />
                </Button>
            </Dropdown>
        ),
    },
    {
        name: "Action",
        selector: (row) => <img src={Action} />,
    },
];
export const handleApprove = () => {
    setStatus(!status);
    setvisible(!visible);
};