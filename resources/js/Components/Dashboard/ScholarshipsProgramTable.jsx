import React from "react";

const ScholarshipsProgramTable = () => {
    return (
        <div className="scholarships-wrapper mb-24">
            <div className="primary-card-rounded">
                <div className="table-header f-16 fw-500 mb-2">
                    Scholarship Program
                </div>
                <div className="table-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Program</th>
                                <th>Students</th>
                                <th>Total Amount</th>
                                <th>Amount Spent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                <tr key={item}>
                                    <td>Demo</td>
                                    <td>15</td>
                                    <td>1,4123</td>
                                    <td>123, 12</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipsProgramTable;
