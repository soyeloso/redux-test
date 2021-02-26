import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../features/todo-list/todoListSlice";

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
