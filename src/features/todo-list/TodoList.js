import React, { useState } from "react";
import { selectItems, updateItem, removeItem, addItem } from "./todoListSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TodoList.module.css";

export function TodoList() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [itemLabel, setItemLabel] = useState("");

  function toggleDone(item) {
    const newItem = { ...item };
    newItem.isDone = !item.isDone;
    dispatch(updateItem(newItem));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addItem(itemLabel));
  }

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <span className={item.isDone ? styles.done : ""}>
                {item.label}
              </span>{" "}
              {item.isDone ? (
                <button onClick={() => toggleDone(item)}>undone</button>
              ) : (
                <button onClick={() => toggleDone(item)}>done</button>
              )}{" "}
              <button onClick={() => dispatch(removeItem(item))}>remove</button>
            </li>
          );
        })}
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add todo item </label>
          <input
            value={itemLabel}
            onChange={(e) => setItemLabel(e.target.value)}
            onSubmit={() => handleSubmit}
          ></input>{" "}
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}
