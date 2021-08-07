import React from "react";
import arrowRight from "../../../src/assets/icons/arrow-right.svg";
import classes from "./SubmitBar.module.css";

const SubmitBar = () => {
    return (
        <div className={classes["submit-bar_container"]}>
            <input type="text" />
            <button>Submit</button>
            <img src={arrowRight} alt="arrow-right" />
        </div>
    );
};

export default SubmitBar;