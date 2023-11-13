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
          placeholder={props.placeholder}
          type="text"
          value={props.inputText}
          className="font-arch_daug"
        />
      </span>
      { props.btn && <span>
        <AwesomeButton 
          type="primary"
          onPress={() => props.addItem()}
          className="plus"
        >{props.btn}</AwesomeButton>
      </span>}
    </div>
  );
}

export default InputArea;
