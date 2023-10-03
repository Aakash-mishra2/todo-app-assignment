import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Button from "../shared/formElements/Button";

import './styles/shoplist.css';

export default function ToDoList() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

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
          <Button className="inputButtons" to="/" ><b> ALL Lists </b></Button>
        </ul>
      </div>
    </div>
  );
}

