import React from 'react';
import header from "./header";
import footer from "./footer";
import {Outlet} from "react-router-dom";

const layout = () => {
    return <>
        <header/>
        <Outlet/>
        <footer/>
    </>
}

export default layout;