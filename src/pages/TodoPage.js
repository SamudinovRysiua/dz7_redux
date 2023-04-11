import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, changeNewValue, deleteAll } from "../store/todoSlice";
import EveryTodo from "../components/EveryTodo/EveryTodo";

const TodoPage = () => {
  const dispatch = useDispatch();
  const { value, todos } = useSelector((state) => state.todoSlice);

  const changeNewInput = (e) => {
    dispatch(changeNewValue(e.target.value));
  };

  const addTodo = () => {
    if (value.trim() === "") {
      alert("Введите текст!!!");
      return;
    }
    dispatch(addTodos(value));
  };

  const deleteAllTodos = () => {
    dispatch(deleteAll());
  };

  return (
    <div className="wrapper">
      <div className="parent_main_block">
        <input
          placeholder="Введите вашу задачу"
          onChange={changeNewInput}
          value={value}
        />
        <button onClick={addTodo}>add</button>
        <button onClick={deleteAllTodos}>clear</button>
        {console.log(todos)}
      </div>
      <div>
        {todos.length === 0 ? (
          <p>список задач пуст</p>
        ) : (
          todos.map((todo) => <EveryTodo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
};

export default TodoPage;
