import React from "react";
import { useForm } from "react-hook-form";

function Form({ formhandle }) {
  const { register, handleSubmit, reset } = useForm();
  const handle = (data) => {
    formhandle(data);
    reset();
  };
  return (
    <div>
      <form action="" className="flex gap-5 " onSubmit={handleSubmit(handle)}>
        <input
          {...register("name")}
          className="outline-none font-semibold text-base py-2 px-5 "
          type="text"
          placeholder="enter your name"
        />
        <input
          {...register("text")}
          className="outline-none font-semibold text-base py-2 px-5 "
          type="text"
          placeholder="enter your text"
        />
        <input
          {...register("url")}
          className="outline-none font-semibold text-base py-2 px-5 "
          type="text"
          placeholder="enter your url"
        />
        <input
          className=" bg-blue-600 text-white outline-none font-semibold text-base py-2 px-5 "
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
}

export default Form;
