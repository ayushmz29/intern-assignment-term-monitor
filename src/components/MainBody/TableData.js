import React from "react";
import classes from "./TableData.module.css";

const TableData = ({ item, deleteIcon }) => {
    return (
        <tr className={classes["main-table_data"]}>
            <td>{item.keyword}</td>
            <td>{item.goal}</td>
            <td>{item.matches}</td>
            <td>{item.search_status}</td>
            <td>
                <button>
                    <img src={deleteIcon} alt="deleteIcon" />
                </button>
            </td>
        </tr>
    );
};

export default TableData;