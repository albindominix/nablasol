import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import { useSnackbar } from "notistack";

import FormStep4 from "./FormStep4";

const initTask = [
  { id: 0, task: "Marketing Website Design", checked: false },
  { id: 1, task: "Branding Design", checked: false },
  { id: 2, task: "Mobile App Development", checked: false },
  { id: 3, task: "SEO Optimization", checked: false },
  { id: 4, task: "Analytics Setup", checked: false },
  { id: 5, task: "Email Marketing", checked: false },
  { id: 6, task: "Video Production", checked: false },
  { id: 7, task: "UI/UX Design", checked: false },
  { id: 8, task: "Product Photography", checked: false },
  { id: 9, task: "Social Media Marketing", checked: false },
];

const headings = [
  { id: 1, title: "Create a project" },

  {
    id: 2,
    title: "Select a view",
    desc: "You can also customize this views in settings",
  },
  {
    id: 3,
    title: "Who can manage projects",
    desc: "Dont panic - You can also customize this views in settings",
  },
  { id: 4, title: "Tasks" },
];
export default function ModalComponent() {
  const [showModal, setShowModal] = useState(false);
  const [formStepValue, setFormStepValue] = useState(1);
  const [tasks, setTasks] = useState(initTask);
  const { enqueueSnackbar } = useSnackbar();
console.log(formStepValue)
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      view: "list",
      "manage-project": "admin",
    },
  });
  const onSubmit = (data) => {
    setShowModal(false);
    setFormStepValue(1);
    alert(JSON.stringify(data))
    localStorage.setItem('project',JSON.stringify(data))
    reset();
    setTasks(initTask)
    enqueueSnackbar(
      `Congratulations, your project has been created`
    );
  };


  return (
    <>
      <button
        className="text-md bg-blue-700   py-3 px-4 text-white rounded-md"
        type="button"
        onClick={() => {
          setShowModal(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Create Project
      </button>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-2xl my-6 mx-auto md:w-[30rem]">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-h-[95vh]">
                  {/*header*/}
                  <div className="flex relative items-start w-full  justify-center p-5 border-slate-200 rounded-t">
                    {headings.map((item, index) => (
                      <React.Fragment key={index}>
                        {formStepValue == item.id && (
                          <div className="flex flex-col items-center gap-2">
                            <h3 className="text-2xl font-semibold">
                              {item.title}
                            </h3>
                            {item.desc && (
                              <p className="text-teal-500">{item.desc}</p>
                            )}
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                    <button
                      className="p-1 ml-auto bg-transparent absolute right-3 top-0 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal(false);
                        reset();
                      }}
                    >
                      x
                    </button>
                  </div>
                  {/*body*/}

                  <div className="relative p-6 flex-auto">
                    {formStepValue == 1 && (
                      <FormStep1
                        register={register}
                        getValues={getValues}
                        errors={errors}
                      />
                    )}

                    {formStepValue == 2 && (
                      <FormStep2
                        register={register}
                        watch={watch}
                        setValue={setValue}
                        errors={errors}
                      />
                    )}

                    {formStepValue == 3 && (
                      <FormStep3
                        register={register}
                        watch={watch}
                        setValue={setValue}
                        errors={errors}
                      />
                    )}
                    {formStepValue == 4 && (
                      <FormStep4
                        register={register}
                        watch={watch}
                        tasks={tasks}
                        setTasks={setTasks}
                        setValue={setValue}
                        errors={errors}
                      />
                    )}
                  </div>
                  {/*footer*/}
                  <div className="flex relative items-center justify-center px-6 pt-0 border-solid border-slate-200 rounded-b">
                    <div className="absolute left-3">
                      {formStepValue == 1 ? (
                        <button
                          className="text-red-600-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal(false);
                            reset();
                          }}
                        >
                          Close
                        </button>
                      ) : (
                        <button
                          className="text-red-600-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            {
                              setFormStepValue((prev) => prev - 1);
                              setFormStepValue;
                            }
                          }}
                        >
                          Prev
                        </button>
                      )}
                    </div>
                    <div className="">
                      {formStepValue == 4 ? (
                        <button
                          className={`${
                            !isValid ? "bg-emerald-100" : "bg-emerald-500"
                          }  bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                          type="submit"
                          disabled={isSubmitting}
                        >
                     Create Project
                        </button>
                      ) : (
                        <button
                          className={`${
                            !isValid ? "bg-emerald-100" : "bg-emerald-500"
                          }  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 `}
                          type="button"
                          disabled={!isValid}
                          onClick={(e) => {
                            e.preventDefault(); 
                            setFormStepValue((prev) => formStepValue + 1);
                          }}
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3  p-6 items-center justify-center">
                    {[1, 2, 3, 4].map((value, index) => (
                      <div
                        className={`rounded-full w-3 h-3 transition-all duration-300 ease-in-out bg-slate-300 ${
                          formStepValue === value ? "w-6 bg-teal-500" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
