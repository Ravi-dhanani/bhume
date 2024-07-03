"use client";
import ApiServices from "@/services/Apiservices";
import { UIStore } from "@/services/pullstate/store";
import { useQuery } from "@tanstack/react-query";
import AOS from "aos";
import { useEffect } from "react";
import Loadding from "../Common/Loadding";
import SectionTitle from "../Common/SectionTitle";
import { lstServices } from "../ourServices";

const AboutUs = () => {
  const id = UIStore.useState((s) => s.selectLanguage);
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: ApiServices.get_about_data,
  });
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  if (isLoading) return <Loadding />;

  return (
    <>
      <section id="aboutUs" className="bg-white py-16  md:py-20 lg:py-32">
        <div className="">
          <SectionTitle
            title="About Us"
            ctitle="关于我们"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <section className="relative lg:py-5">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div className="relative mx-auto    ">
                <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-2">
                  <div className="img-box">
                    <img
                      src="assets/aboutUs.png"
                      alt="About Us tailwind page"
                      className="max-lg:mx-auto"
                    />
                  </div>
                  <div className="mx-5 flex items-center ">
                    <div>
                      {data &&
                        data
                          .filter((v: any) => v.language.title == id)
                          .map((item: any, index: number) => {
                            const Icon = lstServices[index].icon;

                            return (
                              <div key={index}>
                                <p
                                  className=" max-w-max pb-3 text-xl font-normal leading-8 text-gray-500 max-lg:text-center"
                                  dangerouslySetInnerHTML={{
                                    __html: item.shortDescription,
                                  }}
                                />
                                <div className="flex justify-center">
                                  <div className="my-4">
                                    <h2 className="text-2xl font-semibold">
                                      {id == "Chinese"
                                        ? "为什么选择我们?"
                                        : "Why Choose Us?"}
                                    </h2>
                                    <hr className="h-[3px] w-48 bg-[#014AAd]" />
                                  </div>
                                </div>
                                <div className="grid gap-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3">
                                  <div className="flex justify-center">
                                    <div className="group relative  h-72 w-56 transform overflow-hidden rounded-lg bg-[#014AAD] p-5  shadow-md duration-500 hover:scale-105 hover:shadow-xl ">
                                      <span className="absolute left-1/2 top-24 z-0 h-0 w-0 -translate-x-1/2 rounded-full  bg-[#2c69ba]  transition-all duration-1000 group-hover:h-28 group-hover:w-28 group-hover:scale-[15] group-hover:delay-150"></span>
                                      <div className="relative top-0 z-10 mx-auto flex max-w-md flex-col justify-center text-white">
                                        <div className="text-base  text-white transition-all duration-300 group-hover:pt-0 ">
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: item.section1,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex justify-center">
                                    <div className="group relative  h-72 w-56 transform overflow-hidden rounded-lg bg-[#014AAD] p-5  shadow-md duration-500 hover:scale-105 hover:shadow-xl ">
                                      <span className="absolute left-1/2 top-24 z-0 h-0 w-0 -translate-x-1/2 rounded-full  bg-[#2c69ba]  transition-all duration-1000 group-hover:h-28 group-hover:w-28 group-hover:scale-[15] group-hover:delay-150"></span>
                                      <div className="relative top-0 z-10 mx-auto flex max-w-md flex-col justify-center text-white">
                                        <div className="text-base  text-white transition-all duration-300 group-hover:pt-0 ">
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: item.section2,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex justify-center">
                                    <div className="group relative  h-72 w-56 transform overflow-hidden rounded-lg bg-[#014AAD] p-5  shadow-md duration-500 hover:scale-105 hover:shadow-xl ">
                                      <span className="absolute left-1/2 top-24 z-0 h-0 w-0 -translate-x-1/2 rounded-full  bg-[#2c69ba]  transition-all duration-1000 group-hover:h-28 group-hover:w-28 group-hover:scale-[15] group-hover:delay-150"></span>
                                      <div className="relative top-0 z-10 mx-auto flex max-w-md flex-col justify-center text-white">
                                        <div className="text-base  text-white transition-all duration-300 group-hover:pt-0 ">
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: item.section3,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
