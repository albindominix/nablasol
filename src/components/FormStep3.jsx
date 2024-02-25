import React, { useEffect, useRef, useState } from "react";
import admin from "../assets/admin.svg";
import specific from "../assets/specific.svg";
import everyone from "../assets/everyone.svg";
function FormStep3({ register, errors, watch, setValue }) {
  // const [activeOwner, setActiveOwner] = useState('admin'); //upon each re-render the value will go back to as admin
  let ref = useRef("admin");
  const setOwner = (owner) => {
    // setActiveOwner(owner);
    setValue("manage-project", owner);
  };

  if (watch("manage-project")) {
    //if state is used will cause too much re-renders
    ref.current = watch("manage-project");
  }
console.log(watch("manage-project"))

  return (
    <div>
      <div className=" min-h-[320px] w-64 md:w-full">
        <div className="flex flex-col gap-6">
          <div
            onClick={() => setOwner("everyone")}
            className={`flex gap-3 border border-teal-300 p-3 rounded-md cursor-pointer ${
              ref.current === "everyone" ? " ring border-indigo-300" : ""
            }`}
          >
            <div className=" w-14 flex justify-center items-center ">
              <img src={everyone} alt="" />
            </div>
            <div className="flex flex-col ">
              <p>Everyone</p>
              <p className="text-xs text-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                molestias, optio esse laboriosam quasi earum!
              </p>
            </div>
          </div>
          <div
            onClick={() => setOwner("admin")}
            className={`flex gap-3 border border-teal-300 p-3 rounded-md cursor-pointer ${
              ref.current === "admin" ? " ring border-indigo-300" : ""
            }`}
          >
            <div className=" w-14 flex justify-center items-center ">
              <img src={admin} alt="" />
            </div>
            <div className="flex flex-col ">
              <p>Only Admin's</p>
              <p className="text-xs text-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                molestias, optio esse laboriosam quasi earum!
              </p>
            </div>
          </div>
          <div
            onClick={() => setOwner("specific")}
            className={`flex gap-3 border border-teal-300 p-3 rounded-md cursor-pointer ${
              ref.current === "specific" ? " ring border-indigo-300" : ""
            }`}
          >
            <div className=" w-14 flex justify-center items-center ">
              <img src={specific} alt="" />
            </div>
            <div className="flex flex-col ">
              <p>Only to Specific people</p>
              <p className="text-xs text-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                molestias, optio esse laboriosam quasi earum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormStep3;
