import React from "react";
import { NavLink } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import Button from "../formElements/Button";
//import {logOut } from '../../features/UserAccount/loginSlice';
import "./styles/Navlinks.css";

export default function Navlinks() {
    // const currentUserId = useSelector((state) => state.userAccount.UserId);
    // const isLoggedIn = useSelector((state) => state.userAccount.isloggedIn);
    // const dispatch = useDispatch();
    const isLoggedIn = true;
    return (
        <ul className="nav-links">
            
            {/* <li>
                <NavLink to="/">Citizens</NavLink>
            </li> */}
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
                {isLoggedIn && <Button> LOGOUT </Button> }
            </li>
        </ul>
    );
}