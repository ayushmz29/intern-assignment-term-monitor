import React, { useEffect, useState } from "react";
import classes from "./MainTable.module.css";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import TableData from "./TableData";

const MainTable = (props) => {
    const [tableData, setTableData] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
            );
            const responseData = await response.json();
            // console.log(responseData.data);

            let tableData = [];
            for (let i = 0; i < responseData.data.length; i++) {
                // console.log(responseData.data[i])
                tableData.push(responseData.data[i]);
            }
            setTableData(tableData);
        };

        fetchData();
    }, []);

    // Filtering rows
    let updatedTableData = tableData.filter(
        (item) => item.keyword === props.filterValue
    );

    return (
        <table className={classes["main-table_container"]}>
            <thead className={classes["main-table_heading"]}>
                <tr>
                    <td>Keywords</td>
                    <td>Goal</td>
                    <td>Matches</td>
                    <td>Search Status</td>
                    <td>Delete Keyword</td>
                </tr>
            </thead>

            {/* dynamically render table rows here*/}
            <tbody className={classes["main-table_data"]}>
                {console.log(tableData)}
                
                {props.filterValue ? updatedTableData.map((item) => (
                    <TableData
                        key={item.id + 1}
                        item={item}
                        deleteIcon={deleteIcon}
                    />
                )) : tableData.map((item) => (
                    <TableData
                        key={item.id + 1}
                        item={item}
                        deleteIcon={deleteIcon}
                    />
                ))}
                
                {/* {updatedTableData.map((item) => (
                    <TableData
                        key={item.id + 1}
                        item={item}
                        deleteIcon={deleteIcon}
                    />
                ))} */}
            </tbody>
        </table>
    );
};

export default MainTable;