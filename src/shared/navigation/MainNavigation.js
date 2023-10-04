import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import Navlinks from "./Navlinks";
import SideMenu from "../UIElements/SideMenu";
import Backdrop from "../UIElements/BackDrop";
import Icon from "../../icons/to-do-list.png";

import './styles/MainNavigation.css';

export default function MainNavigation() {
    const [menu, setMenu] = useState(false);

    function openMenu() { setMenu(true); }
    const closeMenu = () => setMenu(false);

    return (
        <React.Fragment>
            {menu && <Backdrop onClick={closeMenu} />}
            <SideMenu show={menu} closeMenu={closeMenu} >
                <nav className="main-navigation__drawer-nav">
                    <Navlinks />
                </nav>
            </SideMenu>

            <MainHeader>
                <button
                    className="main-navigation__menu-btn"
                    onClick={openMenu}
                >
                    <span />
                    <span />
                    <span />
                </button>

                    <h1 className="main-navigation__title">
                    <img style={{width: 60, height: 60}} src={Icon} alt="App icon" />
                    <Link className="desktop-Title" to='/'>ToDo-App</Link>
                    <Link className="mobile-Title" to='/'>To-Do-App</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <Navlinks />
                </nav>

            </MainHeader>
        </React.Fragment>
    );
};