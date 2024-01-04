import React, { useState } from "react";
import { useTodo } from "../TodoContext";

function Todoform() {
  const [todo, setTodo] = useState();
  const { addtodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    } else {
      addtodo({ todo, completed: false });
      setTodo("");
    }
  };

  return (
    <>
      <form className="flex" onSubmit={add}>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="Write Todo.."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20
     py-1.5"
        />
        <button
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Todoform;
