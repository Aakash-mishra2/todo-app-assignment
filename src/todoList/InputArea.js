import React from "react";
import './styles/InputArea.css';
import { AwesomeButton } from "react-awesome-button";

function InputArea(props) {
  return (
    <div className="newTodo">
      <span>
        <input
          autoComplete="off"
          onChange={(event) => {
            props.onChecked(event);
          }}
          placeholder="Add New Todo"
          type="text"
          value={props.inputText}
        />
      </span>
      <span>
        <AwesomeButton 
          type="primary"
          onPress={() => props.addItem()}
          className="plus"
        >+</AwesomeButton>
      </span>
    </div>
  );
}

export default InputArea;
