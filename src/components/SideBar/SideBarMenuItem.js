import React from "react";
import classes from "./SideBarMenuItem.module.css";

const SideBarMenuItem = ({ title, selected, icon, dropDownIcon }) => {
    return (
        <li
            className={`${classes["side-bar_item"]} ${
                selected === true ? classes["side-bar_item_selected"] : ""
            }`}
        >
            {icon ? <img src={icon} alt="icon" /> : ""}
            <span className={`${!icon ? classes["side-bar_item_bill"] : ""}`}>
                {title}
            </span>
            {dropDownIcon ? <img src={dropDownIcon} alt="icon" /> : ""}
        </li>
    );
};

export default SideBarMenuItem;