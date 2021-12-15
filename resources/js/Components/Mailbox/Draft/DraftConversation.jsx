import { List, message } from "antd";
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import emptyMessage from "../../../Assets/messageEmpty.svg";

const DraftConversation = ({
    emails = [],
    handlePaginationChange,
    pagination,
    setShowCompose,
    editorHtml,
    setEditorHtml,
    total,
    setMinimize,
}) => {
    const [mailsData, setmailsData] = useState([
        {
            id: 1,
            username: "Saeed",
            subject: "Testing",
            content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
            createdAt: "12/05/2020",
            read: true,
        },
        {
            id: 1,
            username: "Saeed",
            subject: "Testing",
            content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
            createdAt: "12/05/2020",
            read: false,
        },
        {
            id: 1,
            username: "Saeed",
            subject: "Testing",
            content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
            createdAt: "12/05/2020",
            read: true,
        },
        {
            id: 1,
            username: "Saeed",
            subject: "Testing",
            content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
            createdAt: "12/05/2020",
            read: true,
        },
    ]);
    const handleClickDraft = (item) => {
        setEditorHtml(item.message);
        setMinimize(true);
        setShowCompose(true);

        axios
            .delete(`/admin/draft/delete/${item.id}`)
            .then((res) => {
                Inertia.visit("/admin/email/drafts", {
                    method: "get",
                    preserveState: true,
                });
            })
            .catch((err) => {});
    };

    const maxEmails = 5;

    return (
        <div>
            {
                /// =========================================================
                //                          conversation list
                // ==========================================================
            }
            <List
                locale={{
                    emptyText: (
                        <div className="text-center mt-95">
                            <img src={emptyMessage} />
                            <div className="f-14 fw-500 color-black mt-7">
                                No Drafts yet.
                            </div>
                        </div>
                    ),
                }}
                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSizeOptions: ["5", "10", "15"],
                    showSizeChanger: true,
                    locale: { items_per_page: "" },
                    ...pagination,
                    onChange: handlePaginationChange,
                }}
                dataSource={mailsData}
                renderItem={(item, index) => {
                    return (
                        <List.Item key={index}>
                            <Conversation
                                email={item}
                                handleClickDraft={handleClickDraft}
                            />
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default DraftConversation;

{
    /// =========================================================
    //                          single conversation
    // ==========================================================
}

const Conversation = ({ email, handleClickDraft }) => {
    const handleDraftDelete = () => {
        axios
            .delete(`/admin/draft/delete/${email.id}`)
            .then((res) => {
                Inertia.visit("/admin/email/drafts", {
                    method: "get",
                    preserveState: true,
                });
                message.warning("draft deleted", 3);
            })
            .catch((err) => {});
    };
    // .read-conversation class for -> read conversations
    return (
        <div
            className="conversation cursor-pointer  d-flex justify-content-between nowrap align-items-center"
            onClick={() => handleClickDraft(email)}
        >
            {/* //// name/email  */}
            <div>
                <div className="f-16 fw-600" style={{ minWidth: 100 }}>
                    <span className="color-secondary fw-600 f-16">Draft</span>
                </div>
            </div>

            {/* subject */}
            <div className=" w-70-p message-overflow">
                <span className="f-14 fw-500 mr-38 ml-15 color-tudor">
                    Lorem ipsum dolor sit amet, consetetur
                </span>

                {/* //// message  */}

                <span className="email-message fw-400 f-14 color-dusty-gray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam
                </span>
            </div>

            {/* //// time  */}
            <div className="w-80">
                <div className="f-12 color-grey fw-400 message-time">
                    12/05/2020
                </div>
                <div
                    className="f-12 color-danger fw-400 conversation-action"
                    // onClick={handleDraftDelete}
                >
                    <DeleteIcon className="f-18 mb-1" />
                    Delete
                </div>
            </div>
        </div>
    );
};
