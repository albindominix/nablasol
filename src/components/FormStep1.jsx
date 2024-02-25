import React from "react";
import plus from "../assets/plus.svg";
function FormStep1({ register, errors,getValues }) {

  return (
    <div>
      {" "}
      <div className="block mb-3">
        <span className="text-gray-700 font-semibold ">Project name</span>
        <input
          name="name"
          id="name"
          {...register("name", {
            required: true,
            maxLength: 30,
          })}
          type="text"
          className="block w-full mt-3 p-2 border  border-gray-300 rounded-md  text-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none placeholder:text-sm"
          placeholder="Enter project name here"
        />
        {errors.name && errors.name.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span className="text-red-600 m-3">Max length exceeded</span>
        )}
      </div>
      <div className="block mb-3 font-semibold">
        <span className="text-gray-700">Client</span>
        <div className="flex gap-2 items-center  mt-3">
          <div className="relative inline-flex flex-col  w-full">
            <svg
              className="w-2 h-2 absolute bottom-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <div className="max-h-[200px]">
              <select
                name="city"
                {...register("city", {
                  required: true,
                })}
                className="border border-gray-300 rounded-md   h-10 p-2 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full text-sm  font-normal placeholder:text-sm"
              >
                <optgroup label="Category" className="text-sm">
                  <option
                    className="text-teal-400"
                    value=""
                    disabled
                    selected
                    hidden
                  >
                    Select Client
                  </option>
                  <option>Client 1</option>
                  <option>Client 2</option>
                  <option>Client 3</option>
                  <option>Client 4</option>
                </optgroup>
              </select>
            </div>
          </div>

          <p className="text-xs font-light">Or</p>
          <div className="border relative border-gray-300 rounded-md  text-right h-10 p-2 bg-white hover:border-gray-400 focus:outline-none appearance-none w-[10rem] md:[7rem] text-sm  font-normal placeholder:text-sm">
            Add Client
            <img className="absolute w-3 top-[33%]" src={plus} alt="" />
          </div>
        </div>

        {errors.client && errors.client.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
      </div>
     <div className="flex flex-col mb-3">
     <span className="text-gray-700 font-semibold ">Date</span>

     <div className="flex gap-3">
     <div className="flex-grow">
        <input
          type="date"
          className="block w-full mt-3 p-2 border  border-gray-300 rounded-md  text-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none placeholder:text-sm"
          id="startTime"
          name="startTime"
          {...register("startTime", {
            required:true
          })}
        />
        {errors.startTime && errors.startTime.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
      </div>
      <div className="flex-grow">
        <input
          type="date"
          className="block w-full mt-3 p-2 border  border-gray-300 rounded-md  text-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none placeholder:text-sm"
          id="endTime"
          name="endTime"
          {...register("endTime", {
            validate: (value) =>
              value > getValues("startTime") ||
              "End date must be after start date",
          })}
        />
        {errors.endTime && errors.endTime.type === "required" && (
          <span className="text-red-600 m-3">This is required</span>
        )}
      </div>
      
      </div>
     </div>
     
     
      <div className="block mb-2">
        <span className="text-gray-700 font-semibold">Notes</span>

        <textarea
          name="notes"
          id="notes"
          {...register("notes")}
          placeholder="Optional"
          rows="4"
          className="block w-full mt-3 p-3 pt-1  text-sm border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
        ></textarea>
      </div>
    </div>
  );
}

export default FormStep1;
