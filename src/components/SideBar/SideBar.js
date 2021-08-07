import React from "react";
import classes from "./SideBar.module.css";
import arrowDown from "../../assets/icons/arrow-down.png";
import homeIcon from "../../assets/icons/home-icon.png";
import itemIcon from "../../assets/icons/item-icon.png";
import starIcon from "../../assets/icons/star-icon.png";
import socialIcon from "../../assets/icons/social-icon.png";
import SideBarMenuItem from "./SideBarMenuItem";

const sideBarItems = [
    {
        id: Math.random(),
        icon: homeIcon,
        title: "Add keywords",
        selected: true,
        dropDownIcon: "",
    },
    {
        id: Math.random(),
        icon: socialIcon,
        title: "Matches",
        selected: false,
        dropDownIcon: "",
    },
    {
        id: Math.random(),
        icon: itemIcon,
        title: "Manage sources",
        selected: false,
        dropDownIcon: "",
    },
    {
        id: Math.random(),
        icon: itemIcon,
        title: "Integration",
        selected: false,
        dropDownIcon: "",
    },
    {
        id: Math.random(),
        icon: itemIcon,
        title: "Alerts",
        selected: false,
        dropDownIcon: "",
    },
    {
        id: Math.random(),
        icon: starIcon,
        title: "Settings",
        selected: "false",
        dropDownIcon: arrowDown,
    },
    {
        id: Math.random(),
        icon: '',
        title: "Billings",
        selected: false,
        dropDownIcon: "",
    }
];

const SideBar = () => {
    return (
        <ul className={classes["side-bar_container"]}>
            {sideBarItems.map((item) => {
                return (
                    <SideBarMenuItem
                        key={item.id}
                        title={item.title}
                        selected={item.selected}
                        icon={item.icon}
                        dropDownIcon = {item.dropDownIcon}
                    />
                );
            })}
        </ul>
    );
};

export default SideBar;