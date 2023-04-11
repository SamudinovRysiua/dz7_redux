import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    value: "",
    todos: [],
    editNewValue: "",
  },
  reducers: {
    changeNewValue: (state, action) => {
      state.value = action.payload;
    },
    addTodos: (state, action) => {
      if (state.todos.length === 0) {
        state.todos = [
          ...state.todos,
          { id: 1, text: action.payload, status: false, view: false },
        ];
      } else {
        state.todos = [
          ...state.todos,
          {
            id: state.todos[state.todos.length - 1].id + 1,
            text: action.payload,
            status: false,
          },
        ];
      }
      state.value = "";
    },
    deleteEveryTodo: (state, action) => {
      const filteredTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = filteredTodo;
    },
    deleteAll: (state, action) => {
      state.todos = [];
    },
    changeEveryStatus: (state, action) => {
      const newStatus = action.payload.status;
      const id = +action.payload.id;
      const newChangesStatus = state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: newStatus,
          };
        } else {
          return item;
        }
      });
      state.todos = newChangesStatus;
    },
    EditTextChange: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload) {
          item.view = true;
        }
      });
    },
    changeInputEditSlice: (state, action) => {
      state.editNewValue = action.payload;
    },
    saveNewText: (state, action) => {
      const id = action.payload.id;
      state.todos.filter((item) => {
        if (item.id === id) {
          item.text = action.payload.newText;
          item.view = false;
        } else {
          return item;
        }
      });
    },
    cancelChange: (state, action) => {
      state.todos.filter((item) => {
        if (item.id === action.payload) {
          item.view = false;
          return;
        }
      });
    },
  },
});

export const {
  changeNewValue,
  addTodos,
  deleteEveryTodo,
  deleteAll,
  changeEveryStatus,
  EditTextChange,
  changeInputEditSlice,
  saveNewText,
  cancelChange,
} = todoSlice.actions;
export default todoSlice.reducer;
