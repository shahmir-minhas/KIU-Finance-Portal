import React, { useEffect, useContext } from "react";
import { Button } from "antd";
import SideBarTab from "./SideBarTab";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import TrashIcon from "@material-ui/icons/Delete";
import { PropTypes } from "prop-types";
import Compose from "../Mailbox/Compose/Compose";
import { ComposeContext } from "../../Context/StudentComposeContext";

const initialComposeState = {
    showCompose: false,
    minimize: false,
};

// return Sidebar component for Mailbox.
function MailSideBar({ children, currentPage }) {
    const staticSideBarData = [
        {
            name: "Inbox",
            icon: <InboxIcon className="message-icon" />,
            url: "/mail/inbox",
            key: 0,
        },
        {
            name: "Sent",
            icon: <SendIcon className="message-icon" />,
            url: "/mail/sent",
            key: 1,
        },
        {
            name: "Drafts",
            icon: <DraftsIcon className="message-icon" />,
            url: "/mail/draft",
            key: 2,
        },
        {
            name: "Trash",
            icon: <TrashIcon className="message-icon" />,
            url: "/mail/trash",
            key: 3,
        },
    ];

    // compose

    const {
        setShowCompose,
        editorHtml,
        setEditorHtml,
        showCompose,
        setShowComposeState,
        minimize,
        setMinimizeState,
        setMinimize,
    } = useContext(ComposeContext);

    useEffect(() => {
        (() => {
            const mail = sessionStorage.getItem("studentMail")
                ? JSON.parse(sessionStorage.getItem("studentMail"))
                : initialComposeState;
            setShowComposeState(mail.showCompose);
            setMinimizeState(mail.minimize);
        })();
    }, []);

    return (
        <>
            {
                // page heading
            }

            {
                /// =========================================================
                //                          Compose
                // ==========================================================
            }

            {showCompose && (
                <Compose
                    showCompose={showCompose}
                    setShowCompose={setShowCompose}
                    editorHtml={editorHtml}
                    setEditorHtml={setEditorHtml}
                    minimize={minimize}
                    setMinimize={setMinimize}
                />
            )}
            <div className="messages-wrapper d-flex ">
                {
                    /// =========================================================
                    //                          SideBar
                    // ==========================================================
                }
                <div className=" mr-16 ">
                    <Button
                        onClick={() => {
                            showCompose && minimize
                                ? setShowCompose(true) & setMinimize(false)
                                : !showCompose
                                ? setShowCompose(true)
                                : "";
                        }}
                        className="button-primary button-gradient"
                    >
                        Compose
                    </Button>

                    <div className="container-sidebar">
                        <div className="list">
                            {staticSideBarData.map((item, index) => {
                                return (
                                    <SideBarTab
                                        key={index}
                                        item={item}
                                        index={index}
                                        currentPage={currentPage}
                                        url={item.url}
                                        isTabCount={true}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                {
                    /// =========================================================
                    //                          side tabs content
                    // ==========================================================
                }
                <div className="content-container">{children}</div>
            </div>
        </>
    );
}

export default MailSideBar;

MailSideBar.prototypes = {
    currentPage: PropTypes.number.isRequired,
    children: PropTypes.element,
};
