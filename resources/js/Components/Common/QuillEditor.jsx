import React from "react";
import ReactQuill from "react-quill";
import moduleName from "../../../css/reactQuill.css";

const QuillEditor = ({ editorHtml, handleChange }) => {
    return (
        <div>
            <ReactQuill
                // readOnly={true}
                theme="snow"
                onChange={handleChange}
                value={editorHtml}
                modules={QuillEditor.modules}
                formats={QuillEditor.formats}
                bounds={".app"}
            />
        </div>
    );
};

export default QuillEditor;

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
QuillEditor.modules = {
    toolbar: [
        // [{ size: [] }],
        ["bold", "italic", "underline", { color: [] }],
        [
            { align: null },
            { align: "center" },
            { align: "right" },
            { align: "justify" },
        ],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
QuillEditor.formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "align",
    "bullet",
    "link",
    "image",
    "video",
    "color",
    "header",
];
