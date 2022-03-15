import React from "react";

const TodoHeader = ({ children, loading }) => {
  return (
    <header>
      {React.Children.toArray(children).map((item) =>
        React.cloneElement(item, { loading })
      )}
    </header>
  );
};

export { TodoHeader };
