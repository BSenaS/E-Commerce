import React from "react";
import { useForm } from "react-hook-form";
import { loginUserAction } from "../store/actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//initial form data.
const loginInitialData = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: loginInitialData,
  });

  const onSubmit = (formData) => {
    dispatch(loginUserAction(formData, navigate));
    console.log("Login Datası:", formData);
  };

  return (
    <div className="flex max-w-[300px] mx-auto py-24">
      <ToastContainer position="top-right" autoClose={5000} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-3 "
      >
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border rounded-md py-2"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email alanı boş bırakılamaz",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Geçersiz email addresi",
              },
            })}
          />
        </div>
        <p className="text-red-500">{errors.email?.message}</p>

        <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border rounded-md py-2"
            placeholder="Enter your password"
            {...register("password", {})}
          />
        </div>
        <button
          type="submit"
          className="py-3 px-12 rounded-md bg-pBlue text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};
