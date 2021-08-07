import React from "react";
import classes from "./Header.module.css";
import headerLogo from "../../assets/icons/header-logo.png";
import SubmitBar from "./SubmitBar";

const Header = () => {
    return (
        <header className={classes["main-header_container"]}>
            <div className={classes["left-header_container"]}>
                <img src={headerLogo} alt="logo" />

                <span className={classes["left-header_text"]}>
                    Term
                    <span>Monitor</span>
                </span>
            </div>

            <div className={classes["right-header_container"]}>
                <span className={classes["right-header_text"]}>
                    KEYWORDS
                </span>
                
                {/* SUBMIT BAR */}
                <SubmitBar />
                
                {/* profile icon */}
                <div className={classes["profile-icon"]}>
                    <span> A </span>
                </div>
            </div>
        </header>
    );
};

export default Header;