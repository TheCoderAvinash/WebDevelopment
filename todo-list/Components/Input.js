"use Client";
import { useState, React } from "react";
const Input = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);
  const formHandler = (e) => {
    settask([...task, { title, desc }]);
    e.preventDefault();
    settitle("");
    setdesc("");
  };
  const deleteHandler = (i) =>{
    let copy = [...task]
    copy.splice(i,1)
    settask(copy)
  }
  let taskBar = <h2> No task Available</h2>;
  if (task.length > 0) {
    taskBar = task.map((t, i) => {
      return (
        <li key={i} className="flex justify-around items-center">
          <p className="w-2/3 mb-2">
            <h3 className="text-2xl font-semibold">{t.title}</h3>
            <h5 className="text-lg">{t.desc}</h5>
          </p>
          <button onClick={()=>{deleteHandler(i)}} className="p-3 rounded-lg bg-green-500">Task Done</button>
        </li>
      );
    });
  }
  return (
    <>
      <form className="flex justify-center my-3 gap-3" onSubmit={formHandler}>
        <input
          type="text"
          className="text-2xl rounded p-2 border-zinc-600 border-2 "
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl rounded p-2 border-zinc-600 border-2 "
          placeholder="Enter Task Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="text-2xl text-white rounded bg-amber-800 p-2">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-zinc-200"> {taskBar} </div>
    </>
  );
};

export default Input;
