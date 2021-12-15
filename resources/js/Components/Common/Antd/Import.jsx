import React from "react";
import { Button, Modal, Upload } from "antd";
import ImportIcon from "../../../Assets/icons/Icon awesome-file-import.svg";

const { Dragger } = Upload;
// inport and modal
const ImportDropdown = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const props = {
        name: "file",
        multiple: true,
        action: "#",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(
                    `${info.file.name} file uploaded successfully.`
                );
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCreate = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <React.Fragment>
            <Modal
                visible={isModalVisible}
                width={776}
                centered
                onOk={() => setIsModalVisible(false)}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
                className="import-modal"
            >
                <p>File upload</p>
                <Dragger {...props}>
                    <div className="text-center">
                        <p>Drag & Drop Files</p>
                        <p>OR</p>
                        <p>Browse</p>
                    </div>
                </Dragger>
                <div className="mt-3 text-end">
                    <Button
                        onClick={handleCancel}
                        className="btn-modal-cancel me-3"
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} className="btn-modal-create">
                        Create
                    </Button>
                </div>
            </Modal>

            <Button
                className="button-default button-export"
                icon={<img className="mr-8" src={ImportIcon} alt={"export"} />}
                onClick={showModal}
            >
                <span>Import</span>
            </Button>
        </React.Fragment>
    );
};

export default ImportDropdown;
