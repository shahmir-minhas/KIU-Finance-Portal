import { Form, Input } from "antd";
import React from "react";
import SearchIcon from "../../../Assets/icons/search-icon.svg";

const FormInput = ({ label, name, placeholder, handler, type, ...rest }) => {
    return (
        <Form.Item name={name} label={label} {...rest}>
            <Input
                prefix={
                    type === "search" ? <img src={SearchIcon} alt="" /> : ""
                }
                className="primary-search"
                placeholder={type === "search" ? "Search" : placeholder}
                onChange={handler}
            />
        </Form.Item>
    );
};

export default FormInput;
