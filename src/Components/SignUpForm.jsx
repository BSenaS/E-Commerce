import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./LoadingSpinner";

//Initial data
const formInitialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role_id: "3",
};

//Validasyon regexleri
const turkeyPhoneNumber = /^(\+90)?[0-9]{10}$/;
const storeTaxRegex = /^T\d{4}V\d{6}$/;
const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/;

const SignUpForm = () => {
  //Apiden gelen rolleri set ettiğim state.
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: formInitialData,
  });

  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });

  //Şifreleri doğrulama
  const password = useRef({});
  password.current = watch("password", "");

  //Rolleri izleme
  const selectedRole = watch("role_id");

  //Sayfa render oldugun da, rollere get isteği.
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await instance.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  //OnSubmit fonk. -> Formdatasını ilgili apiye yollar ve serverdan dönen isteğe göre gerekli işlemleri yapar.
  const onSubmit = (data) => {
    delete data.confirmPassword;
    setIsLoading(true);
    instance
      .post("/signup", data)
      .then(
        (res) => {
          toast.success(
            "You need to click link in email to activate your account!",
            { position: "top-right" }
          );
          setIsLoading(false);
        },
        //Önceki sayfaya yönlendir.
        setTimeout(() => navigate(-1), 5000)
      )
      .catch((err) => {
        console.log("Error:", err);
        setIsLoading(false);
        toast.error(
          "An error occurred while submitting the form. Please try again.",
          { position: "top-right" }
        );
      });
    console.log("form datasi:", data);
  };

  //Get isteğinden verinin gelmesini bekle, yoksa sayfa crashleniyor.
  if (roles.length < 1) {
    return;
  }
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto my-16 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto w-[800px] sm:w-full gap-3 md:w-full"
      >
        <label htmlFor="name" className="text-xl">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border rounded-md py-2 "
          placeholder="Enter your name"
          {...register("name", {
            required: "İsim alanı boş bırakılamaz.",
            minLength: {
              value: 3,
              message: "İsim 3 karakterden az olamaz",
            },
          })}
        />
        <p className="text-red-500">{errors.name?.message}</p>

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
        <p className="text-red-500">{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border rounded-md py-2"
          placeholder="Enter your password"
          {...register("password", {
            required: "Şifre boş bırakılamaz.",
            minLength: {
              value: 8,
              message: "Şifre en az 8 karakter uzunluğunda olmalıdır.",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:
                "Şifre en az bir küçük harf, bir büyük harf, bir rakam içermelidir.",
            },
          })}
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="border rounded-md py-2"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Şifre boş bırakılamaz.",
            minLength: {
              value: 8,
              message: "Şifre en az 8 karakter uzunluğunda olmalıdır.",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:
                "Şifre en az bir küçük harf, bir büyük harf, bir rakam içermelidir.",
            },
            validate: (value) =>
              value === watch("password") || "Şifreler eşleşmiyor.",
          })}
        />
        <p className="text-red-500">{errors.confirmPassword?.message}</p>

        {/* Api isteğinden dönen datayı mapleme. */}
        <label htmlFor="role_id">Choose youre role</label>
        <select
          id="role_id"
          className="border rounded-md py-2"
          defaultValue={roles[2].id}
          {...register("role_id")}
        >
          {roles.map((item) => {
            return (
              <option value={item.id} id={item.id} key={item.id}>
                {item.code}
              </option>
            );
          })}
        </select>

        {selectedRole === "2" && (
          <>
            <label htmlFor="storeName">Store Name</label>
            <input
              type="text"
              id="storeName"
              className="border rounded-md py-2"
              {...register("storeName", {
                required: "İsim alanı boş bırakalamaz.",
                minLength: {
                  value: 3,
                  message: "İsim 3 karakterden az olamaz.",
                },
              })}
            />
            {errors.storeName && (
              <span className="text-red-500">{errors.storeName.message}</span>
            )}
            <label htmlFor="storePhone">Store Phone Number</label>
            <input
              type="text"
              id="storePhone"
              className="border rounded-md py-2"
              {...register("storePhone", {
                required: "Telefon numarası gereklidir.",

                pattern: {
                  value: turkeyPhoneNumber,
                  message: "Geçersiz Telefon Numarası, +90 XXX XXX XX XX",
                },
              })}
            />
            {errors.storePhone && (
              <span className="text-red-500">{errors.storePhone.message}</span>
            )}

            <label htmlFor="storeTax">Store Tax ID</label>
            <input
              type="text"
              id="storeTax"
              className="border rounded-md py-2"
              {...register("storeTax", {
                required: "Tax ID gereklidir.",

                pattern: {
                  value: storeTaxRegex,
                  message: "Geçersiz Tax ID Girişi, TXXXXVXXXXXX",
                },
              })}
            />
            {errors.storeTax && (
              <span className="text-red-500">{errors.storeTax.message}</span>
            )}

            <label htmlFor="storeIban">Store İban Numarası</label>
            <input
              type="text"
              id="storeIban"
              className="border rounded-md py-2"
              {...register("storeIban", {
                required: "IBAN gereklidir.",

                pattern: {
                  value: ibanRegex,
                  message: "Geçersiz İban Girişi",
                },
              })}
            />
            {errors.storeIban && (
              <span className="text-red-500">{errors.storeIban.message}</span>
            )}
          </>
        )}
        <ToastContainer position="top-right" autoClose={5000} />
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-12 rounded-md bg-pBlue text-white font-bold"
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
