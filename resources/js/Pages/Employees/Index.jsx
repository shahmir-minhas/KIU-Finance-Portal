import React, { Component } from "react";
import Layout from "../../layout/Index";
const Index = () => {
    return (
        <React.Fragment>
            <Layout currentPage={4}>
                <div className="dashboard-wrapper"></div>
            </Layout>
        </React.Fragment>
    );
};

export default Index;