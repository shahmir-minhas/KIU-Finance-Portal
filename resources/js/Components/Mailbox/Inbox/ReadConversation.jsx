import { List, message } from "antd";
import { useState } from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import emptyMessage from "../../../components/svgs/message-empty.svg";
import moment from "moment";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
const ReadConversation = ({
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
                        <div className="text-center mt-75">
                            {/* <img src={emptyMessage} /> */}
                            <div className="f-14 fw-500 color-black mt-7">
                                You haven't received messages yet.
                            </div>
                        </div>
                    ),
                }}
                itemLayout="vertical"
                size="large"
                pagination={
                    true && {
                        pageSizeOptions: ["5", "10", "15"],
                        showSizeChanger: true,
                        locale: { items_per_page: "" },
                        // ...pagination,
                        // onChange: handlePaginationChange,
                    }
                }
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

export default ReadConversation;

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
            className="conversation cursor-pointer  d-flex justify-content-between nowrap align-items-center"
        >
            {/* //// name/email  */}

            <div className="w-25-p">
                <div className="f-14 fw-500 color-cod-gray">
                    Contact Management
                </div>
            </div>

            {/* subject */}
            <div className=" w-70-p message-overflow">
                <span className="f-14 fw-400 mr-38 ml-15 color-dusty-gray">
                    Lorem ipsum dolor sit amet, consetetur
                </span>

                {/* //// message  */}

                <span className="email-message fw-400 f-14 color-dusty-gray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam
                </span>
            </div>

            {/* //// time  */}
            <div onClick={deleteEmail}>
                <div className="f-12 color-grey fw-400 message-time">
                    {/* {moment(data?.created_at, "HH:MM a").format("HH:MM a")} */}
                    {moment(data?.createdAt, "HH:MM a").format("HH:MM a")}
                </div>
            </div>
        </div>
    );
};
