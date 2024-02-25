import React, { useEffect, useRef, useState } from "react";

function FormStep4({ register, errors, watch, setValue,setTasks,tasks }) {
  const [nextId, setNextId] = useState(tasks.length);
  const [text, setText] = useState("");

  useEffect(() => {
    const formTasks = tasks
      .filter((item, index) => item.checked)
      .map((item, index) => item.task);
    setValue("tasks", formTasks);
  }, [tasks]);

  function addTask() {
    setNextId((prev) => prev + 1);
    console.log(nextId);
    if (!text) {
      return;
    }
    setTasks([...tasks, { id: nextId, task: text, checked: false }]);
    setText("");
  }

  function deleteTask(id) {
    const filtered = tasks.filter((item, i) => item.id !== id);
    setTasks(filtered);
  }

  function handleToggle(id) {
    const updatedtasks = [...tasks];
    // updatedtasks[index].checked = !updatedtasks[index].checked
    const filtered = updatedtasks.map((item, i) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setTasks(filtered);

  }
  console.log(watch("tasks"));
  console.log(tasks);
  return (
    <div>
      {" "}
      <label className="block mb-6">
        <span className="text-gray-700 font-semibold ">Add a task</span>
        <div className="flex gap-5 mt-3">
          <input
            name="task"
            id="task"
            value={text}
            onChange={(e) => setText(e.target.value)}
         
            type="text"
            className="block w-full  p-2 border border-gray-300 rounded-md text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none placeholder:text-sm"
            placeholder="Add Task"
          />
          <button
            type="button"
            onClick={() => addTask()}
            className=" px-8 rounded-md bg-blue-400 outline-none text-white hover:bg-blue-500 text-sm font-semibold"
          >
            Add
          </button>
        </div>

        {errors.name && errors.name.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span className="text-red-600 m-3">Max length exceeded</span>
        )}
      </label>
      <div className="flex flex-col  max-h-[18rem] overflow-y-scroll">
        {tasks?.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b-2 py-2"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={e => {}}
                onClick={() => handleToggle(item.id)}
              />
              <p className="text-sm">{item.task}</p>
            </div>
            <button
              type="button"
              onClick={() => deleteTask(item.id)}
              className="outline-none p-2 py-1 text-xs rounded-md bg-blue-200 font-semibold"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormStep4;
