import React from "react";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import SideBar from "./components/SideBar/SideBar";
import classes from "./App.module.css";

const App = () => {
    return (
        <div className={classes["main-app_container"]}>
            <Header />
            <SideBar />
            <MainBody />
        </div>
    );
};
export default App;
