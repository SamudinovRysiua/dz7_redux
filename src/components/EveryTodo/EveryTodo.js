import React from "react";
import styles from "./EveryTodo.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  EditTextChange,
  changeEveryStatus,
  deleteEveryTodo,
} from "../../store/todoSlice";
import EditText from "../EditText/EditText";

const EveryTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteEveryTodoFN = () => {
    dispatch(deleteEveryTodo(todo.id));
  };

  const changeStatus = (e) => {
    const todoStatus = {
      status: e.target.checked,
      id: todo.id,
    };
    console.log(todoStatus.status);
    dispatch(changeEveryStatus(todoStatus));
  };

  const changeWithEdit = () => {
    dispatch(EditTextChange(todo.id));
  };

  return (
    <>
      {todo.view ? (
        <EditText todo={todo} />
      ) : (
        <div className={styles.parent_everyBlock}>
          <input type="checkbox" onChange={changeStatus} />

          <p className={todo.status ? styles.active : ""}>{todo.text}</p>

          <div className={styles.actions}>
            <button onClick={changeWithEdit}>Edit</button>
            <button onClick={deleteEveryTodoFN}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EveryTodo;
