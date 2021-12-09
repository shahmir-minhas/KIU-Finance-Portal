import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { useState } from "react";
import { Button, Form, Select, Input } from "antd";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Editor from "./../../Common/QuillEditor";
import SendIcon from "@material-ui/icons/Send";
// import ComposeSelectStudentModal from "./../ComposeFaculty/ComposeSelectStudentModal";

const { Option } = Select;
const Compose = ({
    setShowCompose,
    editorHtml,
    setEditorHtml,
    minimize,
    setMinimize,
}) => {
    const children = [];
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [composeModal, setComposeModal] = useState(false);
    const [mode, setMode] = useState("tags");

    const selectProps = {
        maxTagCount: "responsive",
    };

    /// =========================================================
    //                          methods
    // ==========================================================

    const handleEditorChange = (html) => {
        setEditorHtml(html);
    };
    function handleChange(value) {
        setSelectedEmails(value);
    }
    const handleClickClose = () => {
        setShowCompose(false);
    };
    const sendEmail = (values) => {};

    const handleDone = () => {
        setSelectedEmails(selectedRows);
        setComposeModal(false);
    };

    const [toDepartmentValue, setToDepartmentValue] = useState("");

    return (
        <div
            className={
                minimize ? "container-compose minimize" : "container-compose"
            }
        >
            {
                /// =========================================================
                //                          header
                // ==========================================================
            }
            <div className="d-flex justify-content-between align-items-center compose-header cursor-pointer">
                <div
                    onClick={() => {
                        setMinimize(!minimize);
                    }}
                    className="d-flex justify-content-between flex-grow-1"
                >
                    <div className="f-14 fw-600">New Message</div>

                    <div className="d-inline-block">
                        <RemoveIcon className="mr-2" />
                    </div>
                </div>
                <span
                    onClick={handleClickClose}
                    className="d-inline-block close-icon"
                >
                    <CloseIcon className="mr-2" />
                </span>
            </div>
            {
                /// =========================================================
                //                          content
                // ==========================================================
            }
            <Form onFinish={sendEmail}>
                <div className="compose-content">
                    {
                        /// ==============================
                        //             Department
                        // ===============================
                    }
                    <div className="compose-content-department mb-16 w-100">
                        <Select
                            suffixIcon={
                                <ArrowDropDownIcon className="select-arrow-down" />
                            }
                            className={
                                toDepartmentValue !== ""
                                    ? "select-option-primary select-option-compose flex-1"
                                    : "select-option-primary select-option-compose flex-1 br-transparent"
                            }
                            placeholder="Select department"
                            onChange={(e) => setToDepartmentValue(e)}
                        >
                            <Option value={0}>Admission Department</Option>
                            <Option value={1}>Admission Department</Option>
                            <Option value={2}>Admission Department</Option>
                            <Option value={3}>Admission Department</Option>
                        </Select>
                    </div>
                    {
                        /// ==============================
                        //             send to
                        // ===============================
                    }
                    {toDepartmentValue !== "" && (
                        <div className="compose-content-to mb-16 d-flex w-100 align-items-center">
                            <div
                                onClick={() => setMode("multiple")}
                                className="compose-to-subject compose-to-subject__label fw-400 f-12 ml-16 send-to cursor-pointer"
                                onClick={() => setComposeModal(true)}
                                tabIndex="0"
                            >
                                Send To
                                <ArrowDropDownIcon />
                            </div>
                            {/* <span className="compose-horizontal-divider"></span> */}
                            <div
                                className={
                                    mode === "tags"
                                        ? "compose-select flex-1"
                                        : "compose-select multiple-last-child-styling flex-1"
                                }
                                onClick={() => setMode("tags")}
                            >
                                <Select
                                    tabIndex="1"
                                    mode={mode}
                                    style={{
                                        width: "100%",
                                        maxHeight: "200px",
                                    }}
                                    onChange={handleChange}
                                    value={selectedEmails}
                                    tokenSeparators={[","]}
                                    maxTagCount={
                                        mode === "multiple"
                                            ? "responsive"
                                            : false
                                    }
                                    dropdownClassName="compose-content-to-menu"
                                >
                                    {children}
                                </Select>
                            </div>
                        </div>
                    )}

                    {
                        /// ==============================
                        //             subject
                        // ===============================
                    }

                    <div className="compose-content-subject mb-16">
                        <span className="compose-content-subject__label f-12 color-black-10">
                            Subject
                        </span>
                        <Input className="compose-content-subject__input" />
                    </div>
                    {
                        /// ==============================
                        //             Message
                        // ===============================
                    }
                    <div
                        className={
                            toDepartmentValue !== ""
                                ? "compose-content-message mb-16"
                                : "compose-content-message responsive-h mb-16"
                        }
                        onClick={() => setMode("multiple")}
                    >
                        <Editor
                            key="compose-content-message"
                            editorHtml={editorHtml}
                            handleChange={handleEditorChange}
                        />
                        <div className="content-message-action float-right">
                            <AttachFileIcon className="attach-icon mb-1 cursor-pointer" />
                            <Button
                                htmlType="submit"
                                className="button-main btn-compose-send"
                            >
                                <SendIcon className="btn-send-icon" /> Send
                            </Button>
                        </div>
                    </div>
                    {
                        /// ==============================================
                        //             compose select all students modal
                        // ===============================================
                    }
                    {/* <ComposeSelectStudentModal
                        isModalVisible={composeModal}
                        setModalVisible={setComposeModal}
                        setSelectedRows={setSelectedRows}
                        selectedRows={selectedRows}
                        handleDone={handleDone}
                        selectedEmails={selectedEmails}
                    /> */}
                </div>
            </Form>
        </div>
    );
};

export default Compose;
