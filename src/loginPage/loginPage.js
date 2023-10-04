import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/accountSlice";

import './loginPage.css';
import { AwesomeButton } from "react-awesome-button";
export default function LoginPage(props) {
    const dispatch = useDispatch();

    const [contact, setContact] = useState({
        name: '',
        email: '',
        password: ''
    })

    function userLoginHandler() {
        dispatch(login({
            name: contact.name,
            email: contact.email,
            password: contact.password
        }));
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setContact((previnfo) => {
            return {
                ...previnfo,
                [name]: value
            };
        });
    }



    return (
        <div className="login-form">
            <h1>
                Welcome {contact.name} !
            </h1>
            <p><i>Please login below </i></p>
                <input
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    value={contact.name}
                    autoComplete="off"
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={contact.email}
                    autoComplete="off"
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    value={contact.password}
                    autoComplete="off"
                />
                <AwesomeButton type="primary" className="login-btn"
                    onPress={userLoginHandler}
                > Login </AwesomeButton>
        </div>
    )
}