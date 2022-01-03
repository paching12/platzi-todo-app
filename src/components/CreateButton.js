import React from "react";
import "../css/CreateButton.css";
function CreateButton({
  name = "NoName",
  text = "no button text",
  onHandleClick,
}) {
  return (
    <button className="CreateTodoButton" name={name} onClick={onHandleClick}>
      {text}
    </button>
  );
}

export { CreateButton };
