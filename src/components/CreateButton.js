import React from "react";
import "../css/CreateButton.css";
function CreateButton({
  name = "NoName",
  text = "no button text",
  onHandleClick,
}) {
  return (
    <div className="CreateTodoButton" name={name} onClick={onHandleClick}>
      {text}
    </div>
  );
}

export { CreateButton };
