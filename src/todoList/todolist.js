import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Button from "../shared/formElements/Button";
import { AwesomeButtonProgress } from "react-awesome-button";
import './styles/todoList.css';
import { createBoard } from "../features/boardSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function ToDoList() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [boardName, setBoardName] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
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
  const month = d.toLocaleString('default', { month: 'long' });
  const year = d.getFullYear();
  const fullDate = date + " " + month + ", " + year;

  const createNewBoard = () => {
    const newID = uuidv4();
    const date = fullDate;
    const todo = items;
    dispatch(createBoard({
      id: newID,
      date: date,
      todo: todo
    }));
    history('/');
  }

  return (
    <div className="container">
      <div className="heading">
        {!boardName && <h1> New board! </h1>}
        {boardName && <h1>{boardName}</h1>}
        <h6>{fullDate}</h6>
      </div>
      <InputArea
        onChecked={handleTodo}
        inputText={boardName}
        placeholder="Enter Board Name !!"
      />
      <InputArea
        onChecked={handleChange}
        addItem={addItem}
        inputText={inputText}
        placeholder=" Add Tasks todo  "
        btn="+"
      />
      <div>
        <ul style={{ margin: 0, listStyle: "inside", }}>
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
          <AwesomeButtonProgress type="secondary"
            onPress={async (element, next) => {
              await delay(1000);
              createNewBoard();
              next();
              await delay(500);
            }}>
            Create
          </AwesomeButtonProgress>
          <AwesomeButtonProgress type="danger"
            onPress={async (element, next) => {
              await delay(1000);
              history('/');
              next();
              await delay(500);
            }}>
            DISCARD
          </AwesomeButtonProgress>
        </ul>
      </div>
    </div>
  );
}

