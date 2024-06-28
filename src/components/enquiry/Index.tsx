"use client";
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import AOS from "aos";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ApiServices from "@/services/Apiservices";
import Footer from "../Footer";
import { UIStore } from "@/services/pullstate/store";
import { ToastContainer, toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required(),
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    mobileNo: yup.number().required(),
    message: yup.string().required(),
    check: yup
      .boolean()
      .test("singleCheckbox", "please read terms &  condition", (val) => {
        return val;
      }),
  })
  .required();
const Inquiry = () => {
  const router = useRouter();
  const id = UIStore.useState((s) => s.selectLanguage);
  const showToastMessage = () => {
    toast.success("Enquiry Add Succesfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "mt-3",
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Error!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: "mt-3",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      check: false,
    },
  });
  const onSubmit = async (data: any) => {
    const InquiryData = {
      name: data.name,
      companyName: data.companyName,
      email: data.email,
      mobileNo: data.mobileNo,
      message: data.message,
    };
    const res = await ApiServices.add_Enquiry(InquiryData);
    if (res.status == true) {
      reset();
      showToastMessage();
    } else {
      showToastErrorMessage();
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <>
      <section id="enquiry" className=" bg-white  pb-5 pt-16 md:pt-20 lg:pt-24">
        <div>
          <SectionTitle
            title="Bhume Enquiry"
            ctitle="布姆查询"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          {/* <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:mt-7 lg:px-8">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                <div className="img-box">
                  <img
                    src="assets/inquiry.png"
                    alt="About Us tailwind page"
                    className="hidden lg:block "
                  />
                </div>
                <div className="flex items-center lg:pr-24">
                  <div className="data w-full">
                    <img
                      src="assets/inquiry.png"
                      alt="About Us tailwind page"
                      className="mx-auto mb-9 block lg:hidden"
                    />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="z-40 rounded-lg bg-white p-5 opacity-100 shadow-md">
                        <div className="relative mb-2">
                          <label
                            htmlFor="email"
                            className={`text-sm leading-7 text-gray-600 ${errors.name ? "text-red-500" : ""}`}
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            {...register("name")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.name ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="email"
                            className={`text-sm leading-7 text-gray-600 ${errors.companyName ? "text-red-500" : ""}`}
                          >
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="Company Name"
                            {...register("companyName")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.companyName ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="email"
                            className={`text-sm leading-7 text-gray-600 ${errors.email ? "text-red-500" : ""}`}
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            {...register("email")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.email ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="number"
                            className={`text-sm leading-7 text-gray-600 ${errors.mobileNo ? "text-red-500" : ""}`}
                          >
                            Phone Number *
                          </label>
                          <input
                            type="number"
                            id="number"
                            name="number"
                            {...register("mobileNo")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.mobileNo ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="message"
                            className={`text-sm leading-7 text-gray-600 ${errors.message ? "text-red-500" : ""}`}
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            {...register("message")}
                            className={`w-full rounded border  border-gray-300 bg-white px-3   text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.message ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="mb-4 ">
                          <div className="flex items-center">
                            <input
                              id="link-checkbox"
                              type="checkbox"
                              {...register("check")}
                              className={`" h-5 w-5 rounded  ${errors.check ? "border-red-500" : "border-gray-600"}  text-blue-600  `}
                            />
                            <label
                              htmlFor="link-checkbox"
                              className={`"text-gray-900" ms-2 text-base  font-medium dark:text-gray-300`}
                              onClick={() => router.push("/terms-conditions")}
                            >
                              I agree with the &nbsp;
                              <a className="text-[#014aad]  hover:underline">
                                terms and conditions
                              </a>
                            </label>
                          </div>

                          <p className="ml-7 text-sm text-red-500">
                            {errors.check?.message}
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="cursor-pointer rounded border-0 bg-[#014aad] px-6 py-2 text-lg  text-white focus:outline-none"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="relative  w-auto  lg:mt-5 ">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                <div className="img-box h-auto lg:h-96">
                  <img
                    src="assets/inquiry.png"
                    alt="About Us tailwind page"
                    className="hidden lg:block"
                  />
                </div>
                <div className="flex items-center px-3 md:px-0 lg:pr-24">
                  <div className="data w-full">
                    <img
                      src="assets/inquiry.png"
                      alt="About Us tailwind page"
                      className="mx-auto mb-9 block lg:hidden"
                    />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="z-40 rounded-lg bg-white p-5 opacity-100 shadow-md">
                        <div className="relative mb-2">
                          <label
                            htmlFor="email"
                            className={`text-sm leading-7 text-gray-600 ${errors.name ? "text-red-500" : ""}`}
                          >
                            {id == "Chinese" ? "全名 *" : "Full Name *"}
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.name ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="email"
                            className={`text-sm leading-7 text-gray-600 ${errors.companyName ? "text-red-500" : ""}`}
                          >
                            {id == "Chinese" ? "公司名称 *" : "Company Name *"}
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register("companyName")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.companyName ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="email"
                            className={`text-sm leading-7 text-gray-600 ${errors.email ? "text-red-500" : ""}`}
                          >
                            {id == "Chinese"
                              ? "电子邮件地址 *"
                              : "Email Address *"}
                          </label>
                          <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.email ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="number"
                            className={`text-sm leading-7 text-gray-600 ${errors.mobileNo ? "text-red-500" : ""}`}
                          >
                            {id == "Chinese" ? "电话号码 *" : "Phone Number *"}
                          </label>
                          <input
                            type="number"
                            id="number"
                            {...register("mobileNo")}
                            className={`w-full rounded border border-gray-300 bg-white px-3  py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.mobileNo ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="message"
                            className={`text-sm leading-7 text-gray-600 ${errors.message ? "text-red-500" : ""}`}
                          >
                            {id == "Chinese" ? "信息 *" : "Message *"}
                          </label>
                          <textarea
                            id="message"
                            {...register("message")}
                            className={`w-full rounded border  border-gray-300 bg-white px-3   text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out ${errors.message ? "border-red-500" : "border-gray-300"}`}
                          />
                        </div>
                        <div className="mb-4 ">
                          <div className="flex items-center">
                            <input
                              id="link-checkbox"
                              type="checkbox"
                              {...register("check")}
                              className={`" h-5 w-5 rounded  ${errors.check ? "border-red-500" : "border-gray-600"}  text-blue-600  `}
                            />
                            <label
                              htmlFor="link-checkbox"
                              className={`"text-gray-900" ms-2 text-base  font-medium dark:text-gray-300`}
                              onClick={() => router.push("/terms-conditions")}
                            >
                              {id == "Chinese" ? "我同意" : "I agree with the"}
                              &nbsp;
                              <a className="text-[#014aad]  hover:underline">
                                {id == "Chinese"
                                  ? "条款和条件"
                                  : "terms and conditions"}
                              </a>
                            </label>
                          </div>

                          <p className="ml-7 text-sm text-red-500">
                            {errors.check?.message}
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="cursor-pointer rounded border-0 bg-[#014aad] px-6 py-2 text-lg  text-white focus:outline-none"
                        >
                          {id == "Chinese" ? "提交" : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={8000} />
      </section>
      <Footer />
    </>
  );
};

export default Inquiry;
