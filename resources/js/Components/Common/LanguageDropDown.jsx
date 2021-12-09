import { Select } from "antd";
import React from "react";
import DropDownIcon from "../../assets/icons/drop-down-icon.svg";

const { Option } = Select;

const LanguageDropdown = () => {
    return (
        <div>
            <Select
                className="select-option-language"
                defaultValue="English"
                suffixIcon={<img className="" src={DropDownIcon} />}
            >
                <Option value="en">English</Option>
                <Option value="ar">Arabic</Option>
                <Option value="Ur">Urdu</Option>
                <Option value="fr">French</Option>
            </Select>
        </div>
    );
};

export default LanguageDropdown;
