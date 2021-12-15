import React, { Component } from "react";
import EditIcon from "../../Assets/icons/Icon material-edit.svg";
import EditApprove from "../../Assets/icons/EditCheck.svg";
import EditCancel from "../../Assets/icons/EditCancel.svg";
import { Button } from "antd";

const ActionEdit = () => {
    //Edit Default State
    const [edit, setEdit] = React.useState(false);

    // EDIT HANDLING
    const handleEdit = () => {
        //to  edit
        setEdit(!edit);
    };
    const handleCancel = () => {
        //to cancel approve edit
        setEdit(!edit);
    };
    const handleApprove = () => {
        //do somethig to approve edit
        setEdit(!edit);
    };
    return (
        <React.Fragment>
            <div className={`${!edit ? "d-none" : "d-block"}`}>
                <Button className="btn-edit" onClick={handleCancel}>
                    <img src={EditCancel} alt="" />
                </Button>
                <Button className="btn-edit" onClick={handleApprove}>
                    <img src={EditApprove} alt="" />
                </Button>
            </div>
            <div className={`${edit ? "d-none" : "d-block"}`}>
                <Button className="btn-edit" onClick={handleEdit}>
                    <img src={EditIcon} alt="" />
                </Button>
            </div>
        </React.Fragment>
    );
};

export default ActionEdit;
