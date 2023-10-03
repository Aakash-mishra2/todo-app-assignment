import React from "react";
import './styles/ToDoItem.css';

function ToDoItem(props) {
  return (
    <div className="tasksList"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoItem;
