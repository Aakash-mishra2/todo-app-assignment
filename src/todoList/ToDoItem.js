import React from "react";
import './styles/ToDoItem.css';

function ToDoItem(props) {
  return (
    <div className="tasksList"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li><b><em>{props.text}</em></b>
      <span className="material-symbols-outlined">
        close
      </span>
      </li>
    </div>
  );
}
export default ToDoItem;
