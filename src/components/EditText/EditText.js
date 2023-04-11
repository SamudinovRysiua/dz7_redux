import React from "react";
import styles from "./EditText.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelChange,
  changeInputEditSlice,
  saveNewText,
} from "../../store/todoSlice";

const EditText = ({ todo }) => {
  const dispatch = useDispatch();
  const { editNewValue } = useSelector((state) => state.todoSlice);

  const changeInputEdit = (e) => {
    dispatch(changeInputEditSlice(e.target.value));
    console.log(e.target.value);
  };

  const changeSave = () => {
    const stateNewInfo = {
      id: todo.id,
      newText: editNewValue,
    };
    dispatch(saveNewText(stateNewInfo));
  };

  const changeCancel = () => {
    dispatch(cancelChange(todo.id));
  };

  return (
    <div className={styles.parent_EditText_Block}>
      <input placeholder="Введите новую задачу" onChange={changeInputEdit} />
      <div>
        <button onClick={changeSave}>save</button>
        <button onClick={changeCancel}>cancel</button>
      </div>
    </div>
  );
};

export default EditText;
