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
                    className="md:block w-12 h-12 bg-transparent border-none flex flex-col gap-4 justify-around items-center mr-8 cursor-pointer"
                    onClick={openMenu}
                >
                    <span className="w-12 h-0.5 bg-white"/>
                    <span className="w-12 h-0.5 bg-white"/>
                    <span className="w-12 h-0.5 bg-white"/>
                </button>
                    <h1 className="text-white items-center tracking-wider font-bold text-3xl flex flex-row gap-5 ml-0.5 text-left">
                    <img style={{width: 60, height: 60}} src={Icon} alt="App icon" />
                    <Link to='/'>ToDo-App</Link>

                </h1>
                <nav className="block md:hidden">
                    <Navlinks />
                </nav>

            </MainHeader>
        </React.Fragment>
    );
};