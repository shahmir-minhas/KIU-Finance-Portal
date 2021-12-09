import { Button } from "antd";
import { Menu, Dropdown } from "antd";
import ExportIcon from "../../Assets/icons/export-icon.svg";
import React from "react";

// export dropdown
const ExportDropdown = ({ apiEndpoint, ...rest }) => {
    const handleExportClick = (item) => {
        window.open(apiEndpoint + `?extension=${item.key ?? "xlsx"}`, "_blank");
    };
    const menu = (
        <Menu className="export-dropdown-menu" onClick={handleExportClick}>
            <Menu.Item key="csv">
                <div>CSV</div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="xlsx">
                <div>Excel</div>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={["click"]}
            className="mr-16"
            {...rest}
        >
            <Button
                className="button-default button-export"
                icon={<img className="mr-8" src={ExportIcon} alt={"export"} />}
            >
                <span>Export</span>
            </Button>
        </Dropdown>
    );
};

export default ExportDropdown;
