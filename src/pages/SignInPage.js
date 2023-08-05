import React, { useContext, useEffect } from "react";
import Image from "../components/Image";
import OverLay from "../components/banner/OverLay";
import LogoNexFlix from "../components/icon/LogoNexFlix";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const schema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập email hoặc số điện thoại hợp lệ."),
  password: yup
    .string()
    .min(4, "Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự.")
    .required("Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự."),
});

const SignInPage = () => {
  const { setLogged } = useContext(MovieContext);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const handleSignIn = async (values) => {
    if (!isValid) return;
    console.log(values);
    // await createUserWithEmailAndPassword(auth, values.email, values.password);
    const userRef = collection(db, "user");
    await addDoc(userRef, {
      email: values.email,
      password: values.password,
    });
    setLogged(true);
    toast.success("Registor succesfully");
  };
  useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message);
    }
  }, [errors]);
  return (
    <div className="w-full h-screen relative ">
      <Image
        className={"h-full"}
        url="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/e316c86e-cf54-45d5-992b-e7cb9a45652f/VN-vi-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      ></Image>
      <OverLay></OverLay>
      <h2 className="absolute top-5 left-5">
        <LogoNexFlix className="w-[170px] "></LogoNexFlix>
      </h2>
      <form
        className="w-[450px] h-[600px] bg-black bg-opacity-70 p-[60px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-xl"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <div className="flex justify-between ">
          <h2 className="text-3xl font-semibold mb-7">Đăng nhập </h2>
          <img
            src="/facebook.png"
            alt="img"
            className="object-contain relative -top-[18px] cursor-pointer"
          />
        </div>
        <Input
          placeholder="Email hoặc số điện thoại"
          name="email"
          control={control}
          className="mb-5 bg-[#333] focus:bg-[#454545] rounded-md"
        ></Input>

        <Input
          type="password"
          name="password"
          control={control}
          placeholder="Mật khẩu"
          className="mb-5 bg-[#333] focus:bg-[#454545] rounded-md"
        ></Input>

        {/* <Button>Đăng Nhập</Button> */}
        <button className="w-full mt-4 mb-3 bg-red-600 rounded-md py-3 font-medium">
          Đăng Nhập
        </button>
        <div className="flex justify-between text-sm text-[#b3b3b3]">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="check"
              id="checkbox"
              className="mr-2"
            />
            <label htmlFor="checkbox">Ghi nhớ tôi</label>
          </div>
          <a
            href="https://www.netflix.com/vn/LoginHelp"
            className="hover:underline"
          >
            Bạn cần trợ giúp?
          </a>
        </div>
        <h2 className="text-center text-xl mt-5">- Or Sign in with -</h2>
        <div className="flex items-center justify-center gap-3 mt-5">
          <button className="text-black bg-white border h-[40px] w-[100px] text-sm rounded-sm ">
            <i className="fa-brands fa-apple mr-1"></i>
            Apple ID
          </button>
          <button className="text-black bg-white border h-[40px] w-[100px] text-sm rounded-sm ">
            <i className="fa-brands fa-google mr-1"></i>
            Google
          </button>
        </div>
        <p className="text-xs mt-7">
          Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
          robot.
          <a
            href="https://support.google.com/accounts/answer/46526?hl=vi"
            target="_blank"
            className="text-blue-600 text-sm "
            rel="noreferrer"
          >
            Tìm hiểu thêm.
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
