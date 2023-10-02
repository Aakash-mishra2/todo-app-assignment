import React, { useContext, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Button from "../shared/formElements/Button";

import './styles/shoplist.css';

export default function ShopList() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const auth = useContext(UserContext);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(
      previousItems => previousItems.filter((item, index) => index !== id)
    );
  }
  function userLogoutHandler() {
    auth.userData = { name: '', email: '', password: '' };
    auth.logout();
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>
          Shopping List <br /> {new Date().toLocaleString()}
        </h1>
      </div>
      <InputArea
        onChecked={handleChange}
        addItem={addItem}
        inputText={inputText}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
        <ul>
          <Button className="inputButtons" to="/listStore" ><b> ALL Lists </b></Button>
          <button className="inputButtons" onClick={userLogoutHandler}><b>LOGOUT</b></button>
        </ul>
      </div>
    </div>
  );
}

