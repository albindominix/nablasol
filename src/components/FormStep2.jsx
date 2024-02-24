import React, { useEffect, useRef, useState } from "react";
import list from "../assets/list.svg";
import board from "../assets/board.svg";
function FormStep3({ register, errors, watch, setValue }) {
  let ref = useRef("list");

  const setView = (view) => {
    // setActiveView(view);
    setValue("view", view);
  };

  if (watch("view")) {
    //if state is used will cause  re-render
    ref.current = watch("view");
  }
  console.log(watch("view"));
  return (
    <form>
      <div className=" min-h-[320px]">
        <div className="flex gap-10">
        <div className="flex flex-1 ">
        <div
          id="view"
          onClick={() => setView("list", { required: true })}
          className={` flex justify-center mb-2 flex-1  mt-1 p-3 rounded-md border border-gray-300 w-14 h-36 outline-none ${
            ref.current === "list" ? " ring border-indigo-300" : ""
          } `}
        >
          <img className="w-16 " src={list} alt="list" />
        </div>
        </div>
        <div className="flex flex-1">

        <div
          id="view"
          type="button"
          onClick={() => setView("board", { required: true })}
          className={` flex justify-center mb-2 flex-1  mt-1 p-3 rounded-md border border-gray-300 w-14 h-36 outline-none ${
            ref.current === "board" ? " ring border-indigo-300" : ""
          } `}
          value="board"
        >
          <img className="w-16" src={board} alt="" />
        </div>
        </div>
        </div>
       <div className="flex w-full justify-around gap-16">
        <p>List</p>
        <p>Board</p>
       </div>
      </div>
    </form>
  );
}

export default FormStep3;
