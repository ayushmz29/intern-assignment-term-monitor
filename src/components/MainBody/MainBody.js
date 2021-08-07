import React, { useState } from "react";
import FilterBar from "./FilterBar";
import MainTable from "./MainTable";
import classes from "./MainBody.module.css";

const MainBody = () => {
    const [filterValue, setFilterValue] = useState("");

    return (
        <div className={classes["main-body_container"]}>
            <div className={classes["filter-bar_heading_container"]}>
                <button className={classes["filter-bar_heading_text1"]}>
                    Add Another Keyword
                </button>

                <div className={classes["filter-bar_heading_text2_container"]}>
                    <span className={classes["filter-bar_heading_text2"]}>
                        1/3
                    </span>
                </div>

                <button className={classes["filter-bar_heading_text3"]}>
                    UPGRADE
                </button>
                <button className={classes["filter-bar_heading_text4"]}>
                    Advanced search
                </button>
            </div>

            {/* Filter Bar component */}
            <FilterBar setFilterValue={setFilterValue} />

            <div className={classes["filter-bar_heading_container"]}>
                <button className={classes["filter-bar_heading_text5"]}>
                    The Terms You're Tracking
                </button>

                <button className={classes["filter-bar_heading_text6"]}>
                    The data will refresh every 5 min
                </button>
            </div>

            {/* Table Component */}
            <MainTable filterValue={filterValue} />

            {/* View Result Button */}
            <button className={classes["view-btn"]}>
                <span>View Result</span>{" "}
            </button>
        </div>
    );
};

export default MainBody;