import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../formElements/Button";
import { logout } from "../../features/accountSlice";
import "./styles/Navlinks.css";

export default function Navlinks() {
    const isLoggedIn = useSelector((state) => state.userAccount.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <ul className="nav-links">
            <li>
                {isLoggedIn && <NavLink to="/">Dashboard</NavLink>}
            </li>
            <li>
                {isLoggedIn && <NavLink to="/boards/new">New Board</NavLink>}
            </li>
           {!isLoggedIn && <li>
                <NavLink to="/"> LOGIN </NavLink>
            </li>}
            <li> 
                {isLoggedIn && <Button onClick={() => dispatch(logout())}> LOGOUT </Button> }
            </li>
        </ul>
    );
}