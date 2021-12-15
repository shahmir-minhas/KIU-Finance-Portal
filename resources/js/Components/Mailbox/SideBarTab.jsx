import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
import MailActive from "../../Assets/icons/mail-active-indicator.svg";
// return single tab  for mailbox sidebar component.
const SideBarTab = ({ item, index, currentPage = 0, url, isTabCount }) => {
    return (
        <div className="list-item-link">
            <InertiaLink href={item.url} preserveState preserveScroll>
                <div
                    className={
                        item.key === currentPage
                            ? "list-item current-list-item"
                            : "list-item"
                    }
                    onClick={() => Inertia.visit(url, { method: "get" })}
                >
                    <img
                        className={
                            currentPage === item?.key
                                ? "mr-13"
                                : "mr-13 invisible"
                        }
                        src={MailActive}
                    ></img>
                    {item?.icon && <span className="icon">{item?.icon}</span>}
                    <span className="name">{item?.name}</span>

                    {index === 0 && isTabCount && (
                        <span className="f-12 ml-3 unread-mail-count">1 </span>
                    )}
                    {index === 2 && isTabCount && (
                        <span className="f-12 ml-3 unread-draft">03 </span>
                    )}
                </div>
            </InertiaLink>
        </div>
    );
};

export default SideBarTab;
