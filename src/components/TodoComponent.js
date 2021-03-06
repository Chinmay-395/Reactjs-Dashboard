import React from "react";
import todo_data from "./data/todo_data";

const todoNode = () => {
  console.log("THE TODO", todo_data);
  return (
    <>
      {todo_data.map((item, index) => (
        <div key={index}>
          <li>{item.title}</li>
          <span>
            <button className="fa fa-trash" />
          </span>
        </div>
      ))}
    </>
  );
};

function TodoComponent(props) {
  console.log("THE RUN");
  return (
    <>
      <ul>
        {/* <TodoNode /> */}
        {todoNode()}
      </ul>
    </>
  );
}

export default TodoComponent;
