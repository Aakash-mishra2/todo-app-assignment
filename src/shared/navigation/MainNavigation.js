import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import Navlinks from "./Navlinks";
import SideMenu from "../UIElements/SideMenu";
import Backdrop from "../UIElements/BackDrop";
import Icon from "../../icons/to-do-list.png";

export default function MainNavigation() {
    const [menu, setMenu] = useState(false);

    function openMenu() { setMenu(true); }
    const closeMenu = () => setMenu(false);

    return (
        <React.Fragment>
            <SideMenu show={menu} closeMenu={closeMenu} >
                <nav className="h-full">
                    <Navlinks />
                </nav>
            </SideMenu>
            {menu && <Backdrop onClick={closeMenu} />}

            <MainHeader>
                <button
                    className="md:hidden h-12 w-12 bg-transparent border-none flex flex-col gap-4 justify-around items-center ml-0 cursor-pointer"
                    onClick={openMenu}
                >
                    <span className="w-12 h-0.5 bg-white"/>
                    <span className="w-12 h-0.5 bg-white"/>
                    <span className="w-12 h-0.5 bg-white"/>
                </button>
                    <h1 className="text-white items-center tracking-wider font-bold text-4xl flex flex-row gap-2 ml-0 items-left p-0">
                    <img style={{width: 60, height: 60}} src={Icon} alt="App icon" />
                    <Link to='/'>ToDo-App</Link>

                </h1>
                <nav className="md:block hidden">
                    <Navlinks />
                </nav>

            </MainHeader>
        </React.Fragment>
    );
};