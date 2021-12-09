import DataTableComponent from "react-data-table-component";
import { PropTypes } from "prop-types";
import React from "react";

// render data table with custom functionality - it uses react data table component package
const DataTable = ({
    children,
    data,
    columns,
    apiEndPoint,
    pagination,
    keyField,
    paginationPerPage,
    paginationRowsPerPageOptions,
}) => {
    // custom styling for table (data-table-component)
    const customStyles = {
        headCells: {
            style: {
                color: "#686874",
                fontSize: "12px",

                "&:last-child": {
                    display: "flex",
                    justifyContent: "end",
                },
            },
        },

        cells: {
            style: {
                fontSize: "14px",
                "&:first-child": {
                    textAlign: "center",
                },
                "&:last-child": {
                    display: "flex",
                    justifyContent: "end",
                },
            },
        },
    };

    // handle table page change
    const handlePageChange = (page, sizePerPage) => {
        console.log("page, sizePerPage", page, sizePerPage);
        // api call
        console.log("apiEndPoint", apiEndPoint);
    };

    return (
        <div className="primary-table-wrapper">
            {
                // table header
            }

            {children}
            <DataTableComponent
                columns={columns}
                data={data}
                pagination={
                    data.length > paginationPerPage ? pagination : false
                }
                paginationPerPage={paginationPerPage}
                customStyles={customStyles}
                keyField={keyField}
                onChangePage={handlePageChange}
                paginationRowsPerPageOptions={paginationRowsPerPageOptions}
            />
        </div>
    );
};

export default DataTable;

DataTable.defaultProps = {
    children: "",
    data: [],
    columns: [],
    apiEndPoint: "",
    pagination: true,
    paginationPerPage: 9,
    paginationRowsPerPageOptions: [5, 10, 15, 20],
};

DataTable.propTypes = {
    isModalVisible: PropTypes.bool,
    children: PropTypes.element,
    data: PropTypes.array,
    columns: PropTypes.array,
    apiEndPoint: PropTypes.string,
    pagination: PropTypes.bool,
    paginationPerPage: PropTypes.number,
    paginationRowsPerPageOptions: PropTypes.array,
};
