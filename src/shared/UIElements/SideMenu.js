import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

export default function SideMenu(props) {
    const sideDrawer = (
        <CSSTransition
            in={props.show}
            mountonEnter
            unmountOnExit
            timeout={200}
            classNames="slide-in-left"
        >
            <aside className="fixed top-0 left-0 z-20 h-full w-1/2 bg-white shadow-md" onClick={props.closeMenu}>{props.children}</aside>
        </CSSTransition>
    );

    return ReactDOM.createPortal(sideDrawer, document.getElementById('sidemenu'));
}