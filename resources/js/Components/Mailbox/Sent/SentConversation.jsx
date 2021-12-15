import { Button, Skeleton, List, message } from "antd";
import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
// import DeleteIcon from "@material-ui/icons/Delete";
import { Inertia } from "@inertiajs/inertia";
// import emptyMessage from "../../../components/svgs/message-empty.svg";
import moment from "moment";

const SentConversation = ({
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
            id: 2,
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
                        <div className="text-center mt-95">
                            {/* <img src={emptyMessage} /> */}
                            <div className="f-14 fw-500 color-black mt-7">
                                You haven't sent any message yet.
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
                                email={item || {}}
                                detailsURL={detailsURL}
                            />
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default SentConversation;

{
    /// =========================================================
    //                          single conversation
    // ==========================================================
}

const Conversation = ({ email, detailsURL }) => {
    // .read-conversation class for -> read conversations
    const deleteEmail = () => {
        Inertia.visit(`/admin/email/sent/${email?.id}`, {
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
            className="conversation cursor-pointer d-flex justify-content-between nowrap align-items-center"
            onClick={() => Inertia.visit(`${detailsURL}/${email.id}`)}
        >
            {/* //// name/email  */}

            <div className="w-25-p">
                <div className="f-14 fw-500 text-dark">
                    <span className="message-to-heading color-dusty-gray">
                        To :
                    </span>
                    Contact Management
                </div>
                <div className="f-12 text-dark">{email?.email?.to}</div>
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
            <div className="w-80" onClick={deleteEmail}>
                <div className="f-12 color-grey fw-400 message-time">
                    {moment(email?.createdAt, "HH:MM a").format("HH:MM a")}
                </div>
            </div>
        </div>
    );
};
