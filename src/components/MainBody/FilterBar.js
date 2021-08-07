import React, { useState } from "react";
import classes from "./FilterBar.module.css";

const FilterBar = (props) => {
    const [enteredFilterData, setEnteredFilterData] = useState("");
    const [resetFilter, setResetFilter] = useState("Save Filters")
    
    const onFocusHandler = () => {
        setResetFilter("Save Filters")
    }

    const filterInputHandler = (event) => {
        event.preventDefault();
        setResetFilter("Save Filters")  
        // console.log(event.target.value);
        setEnteredFilterData(event.target.value);
    };

    const submitFilterHandler = (event) => {
        event.preventDefault();

        // lifting the state up
        props.setFilterValue(enteredFilterData);
        setResetFilter("Reset Filters")
        setEnteredFilterData("");
    };

    return (
        <form className={classes["filter-bar"]}>
            <input
                type="text"
                name="search"
                value={enteredFilterData}
                onChange={filterInputHandler}
                onFocus={onFocusHandler}
                placeholder="Enter Technology Filter Here (Case Sensitive)"
            />
            <button onClick={submitFilterHandler}>
                <span>{resetFilter}</span>
            </button>
        </form>
    );
};

export default FilterBar;