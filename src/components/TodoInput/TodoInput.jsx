import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../actions/index";
import { nanoid } from "@reduxjs/toolkit";

function TodoInput() {
  const [todoText, setTodoText] = useState("");

  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function insertTodo() {
    dispatch(addTodo({ title: todoText, id: nanoid() }));
    setTodoText("");
  }
  return (
    <>
      <input
        type="text"
        placeholder="add todo .... "
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={insertTodo}>Add todo</button>
    </>
  );
}

export default TodoInput;
