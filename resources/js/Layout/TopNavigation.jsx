import React from "react";
import avatar from "../assets/avatar.png";
import LogoutIcon from "../assets/icons/logout-icon.png";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "antd";
import LanguageDropdown from "./../components/common/LanguageDropDown";

const TopNavigation = ({ currentPage, url }) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <InertiaLink href={url}>
                    <span
                        className="avatar mr-30"
                        style={{ backgroundImage: `url(${avatar})` }}
                    />
                </InertiaLink>
                <LanguageDropdown/>
            </div>

            <div>
                <Button
                    className="button-logout"
                    icon={<img className="mr-9" src={LogoutIcon} />}
                >
                    Log out
                </Button>
            </div>
        </div>
    );
};

export default TopNavigation;
