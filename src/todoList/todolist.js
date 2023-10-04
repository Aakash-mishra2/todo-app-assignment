import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Button from "../shared/formElements/Button";

import './styles/todoList.css';

export default function ToDoList() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [boardName, setBoardName ] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  const handleTodo = (event) => {
    const bName = event.target.value;
    setBoardName(bName);
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
  const d = new Date();
  const date = d.getDate();
  const month = d.toLocaleString('default', {month: 'long'});
  const year = d.getFullYear();

  const fullDate = date + " " + month + ", " + year;
  return (
    <div className="container">
      <div className="heading">
          {!boardName && <h1> New board! </h1> }
          {boardName && <h1>{boardName}</h1>} 
          <h6>{fullDate}</h6>
      </div>
      <InputArea 
        onChecked = {handleTodo}
        inputText = {boardName}
        placeholder = "Enter Board Name !!"
      />
      <InputArea
        onChecked={handleChange}
        addItem={addItem}
        inputText={inputText}
        placeholder=" Add Tasks todo  "
        btn="+"
      />
      <div>
        <ul style={{margin: 0, listStyle: "inside", }}>
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
          <Button className="inputButtons" to="/" ><b> CREATE </b></Button>
          <Button ><b> DISCARD </b></Button>
        </ul>
      </div>
    </div>
  );
}

