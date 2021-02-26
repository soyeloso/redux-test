import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    items: [
      {
        id: 1,
        label: "Aller chercher Bérenger",
        isDone: false,
      },
      {
        id: 2,
        label: "Faire les courses",
        isDone: true,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const nextId = Math.max(...state.items.map((item) => item.id)) + 1;
      const newItem = {
        id: nextId,
        label: action.payload,
        isDone: false,
      };
      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem } = todoListSlice.actions;
export const selectItems = (state) => state.todoList.items;

export default todoListSlice.reducer;
