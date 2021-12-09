import { List, message } from "antd";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import moment from "moment";
import EmptyMessage from "../../../Assets/messageEmpty.svg";
import React from "react";
const InboxConversation = ({
    emails = [],
    handlePaginationChange,
    pagination,
    total,
    detailsURL,
}) => {
    const maxEmails = 5;

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
                        <div className="text-center translateY-50-p">
                            <img src={EmptyMessage} />
                            <div className="f-14 fw-500 color-black mt-7">
                                You haven't received messages yet.
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
                    // onChange: handlePaginationChange,
                }}
                dataSource={mailsData}
                renderItem={(item, index) => {
                    return (
                        <List.Item key={index}>
                            <Conversation data={item} detailsURL={detailsURL} />
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default InboxConversation;

{
    /// =========================================================
    //                          single conversation
    // ==========================================================
}

const Conversation = ({ data, detailsURL }) => {
    // .read-conversation class for -> read conversations
    const deleteEmail = () => {
        Inertia.visit(`/admin/email/delete/${data.id}`, {
            only: ["emails", "errors"],
            preserveState: true,
            method: "delete",
            onSuccess: () => {
                message.success("Email deleted Successfully");
            },
        });
    };

    return (
        <div
            onClick={() => Inertia.visit(`${detailsURL}/${data.id}`)}
            className={
                data.read === true
                    ? "conversation cursor-pointer  d-flex justify-content-between nowrap align-items-center "
                    : "conversation cursor-pointer  d-flex justify-content-between nowrap align-items-center conversation-read-1"
            }
        >
            {/* //// name/email  */}

            <div className="w-25-p">
                <div
                    className={
                        data.read === true
                            ? "f-14 fw-500 color-cod-gray"
                            : "f-14 fw-400 text-read-1 color-gray"
                    }
                >
                    {/* {data?.user?.full_name} */}
                    Contact Management
                </div>
            </div>

            {/* subject */}
            <div className=" w-70-p message-overflow">
                <span
                    className={
                        data.read === true
                            ? "f-14 fw-500 mr-38 ml-15 color-tudor"
                            : "f-14 fw-400 mr-38 ml-15 text-read-1 color-gray"
                    }
                >
                    Lorem ipsum dolor sit amet, consetetur
                </span>

                {/* //// message  */}

                <span
                    className={
                        data.read === true
                            ? "email-message fw-400 f-14 color-dusty-gray"
                            : "email-message fw-300 f-14 text-read-1 color-gray"
                    }
                >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam
                </span>
            </div>

            {/* //// time  */}
            <div onClick={deleteEmail}>
                <div
                    className={
                        data.read === true
                            ? "f-12 color-grey fw-400 message-time"
                            : "f-12 color-grey fw-300 message-time"
                    }
                >
                    {/* {moment(data?.created_at, "HH:MM a").format("HH:MM a")} */}
                    {moment(data?.createdAt, "HH:MM a").format("HH:MM a")}
                </div>
            </div>
        </div>
    );
};
