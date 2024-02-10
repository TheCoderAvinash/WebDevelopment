
import { useState, React } from "react";
const Input = () => {
    const [title, settitle] = useState(" ");
    const [desc, setdesc] = useState(" ");
  return (
    <>
      <form className="flex justify-center my-3 gap-3">
        <input
          type="text"
          className="text-2xl rounded p-2 border-zinc-600 border-2 "
          placeholder="Enter Task Title"
        />
        <input
          type="text"
          className="text-2xl rounded p-2 border-zinc-600 border-2 "
          placeholder="Enter Task Description"
        />
        <button className="text-2xl text-white rounded bg-amber-800 p-2">
          Add Task
        </button>
      </form>
    </>
  );
};

export default Input;
