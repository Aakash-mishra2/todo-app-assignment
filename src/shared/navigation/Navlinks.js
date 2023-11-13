import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/accountSlice";

export default function Navlinks() {
    const isLoggedIn = useSelector((state) => state.userAccount.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <ul className="m-0 p-0 w-full h-full font-rem text-base tracking-wider
                flex flex-col gap-8 justify-center items-center 
                md:flex-row md:gap-4 md:text-lg list-none">

            <li>
                {isLoggedIn && <NavLink
                    className="text-[#292929] md:text-white md:bg-[#213555] pt-1.5 pb-1.5 pl-0.5 pr-0.5 border-2 border-[#213555] rounded-lg
                    hover:bg-[#213555] hover:text-[#f4f6f8] active:bg-[#213555] active:text-[#f4f6f8] md:border-[#eae3d2]
                    md:hover:bg-[#eae3d2] md:hover:text-[#292929] md:active:bg-[#eae3d2] md:active:text-[#292929]"
                    to="/">
                    Dashboard
                </NavLink>}
            </li>
            <li>
                {isLoggedIn && <NavLink
                    className="text-[#292929] md:text-white md:bg-[#213555] pt-1.5 pb-1.5 pl-0.5 pr-0.5 border-2 border-[#213555] rounded-lg
                    hover:bg-[#213555] hover:text-[#f4f6f8] active:bg-[#213555] active:text-[#f4f6f8] md:border-[#eae3d2]
                    md:hover:bg-[#eae3d2] md:hover:text-[#292929] md:active:bg-[#eae3d2] md:active:text-[#292929]"
                    to="/boards/new">
                    New Board
                </NavLink>}
            </li>
            {!isLoggedIn && <li>
                <NavLink 
                className="text-[#292929] md:text-white md:bg-[#213555] pt-1.5 pb-1.5 pl-0.5 pr-0.5 border-2 rounded-lg
                    hover:bg-[#213555] hover:text-[#f4f6f8] active:bg-[#213555] active:text-[#f4f6f8] md:border-white border-[#213555]
                    md:hover:bg-[#eae3d2] md:hover:text-[#292929] md:active:bg-[#eae3d2] md:active:text-[#292929]"
                to="/"> LOGIN </NavLink>
            </li>}
            <li>
                {isLoggedIn && <button onClick={() => dispatch(logout())}
                  className="curson-pointer font-rem border-2 border-[#213555] md:border-white rounded-lg text-[#292929] md:text-white md:bg-[#213555] pt-1.5 pb-1.5 pl-0.5 pr-0.5 font-inherit
                   hover:bg-[#292929] hover:text-white active:bg-[#292929] active:text-white
                  md:hover:bg-[#eae3d2] md:hover:text-[#292929] md:active:bg-[#eae3d2] md:active:text-[#292929] md:border-white"  
                > 
                LOGOUT </button>}
            </li>
        </ul>
    );
}