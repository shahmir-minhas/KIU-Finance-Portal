import React from "react";
import { Input } from "antd";

const InputSearch = () => {
    return (
        <div className="primary-search-input w-95">
            <Input
                onChange={handleSearch}
                placeholder="Search email"
                prefix={<SearchIcon className="search-icon" />}
            />
        </div>
    );
};

export default InputSearch;
