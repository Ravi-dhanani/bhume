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
          <section className="relative lg:px-10  lg:py-5">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div className="relative mx-auto   md:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                  <div className="img-box">
                    <img
                      src="assets/aboutUs.png"
                      alt="About Us tailwind page"
                      className="max-lg:mx-auto"
                    />
                  </div>
                  <div className="mx-5 flex items-center">
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
                                  {/* <span
                                    className={`absolute -bottom-1 mt-1 h-0.5 w-[190px] bg-[#014aad] transition-all md:left-[263px] lg:left-[180px]`}
                                  ></span> */}
                                </div>
                                <div className="grid  gap-y-2  sm:grid-cols-3 sm:gap-x-2">
                                  <div className="flex h-[360px]" key={index}>
                                    <div className="group relative   w-full overflow-hidden  bg-[#014AAD] p-5 text-white shadow-xl ring-1 transition-all  duration-300 hover:-translate-y-1 hover:shadow-2xl    sm:rounded-lg sm:px-10">
                                      <span className="absolute right-0 top-0 z-0 h-0 w-0 -translate-x-1/2 rounded-sm  bg-[#2c69ba] transition-all duration-1000 group-hover:h-full group-hover:w-full group-hover:scale-[15] group-hover:delay-150"></span>
                                      <div className="relative top-0 z-10 mx-auto flex max-w-md flex-col justify-center text-white">
                                        <div className="text-base leading-6 text-white transition-all duration-300 group-hover:pt-0 ">
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: item.section1,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex h-auto" key={index}>
                                    <div className="group relative   w-full overflow-hidden  bg-[#014AAD] p-5 text-white shadow-xl ring-1 transition-all  duration-300 hover:-translate-y-1 hover:shadow-2xl    sm:rounded-lg sm:px-10">
                                      <span className="absolute right-0 top-0 z-0 h-0 w-0 -translate-x-1/2 rounded-sm  bg-[#2c69ba] transition-all duration-1000 group-hover:h-full group-hover:w-full group-hover:scale-[15] group-hover:delay-150"></span>
                                      <div className="relative top-0 z-10 mx-auto flex max-w-md flex-col justify-center text-white">
                                        <div className="text-base leading-6 text-white transition-all duration-300 group-hover:pt-0 ">
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: item.section2,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex h-auto" key={index}>
                                    <div className="group relative   w-full overflow-hidden  bg-[#014AAD] p-5 text-white shadow-xl ring-1 transition-all  duration-300 hover:-translate-y-1 hover:shadow-2xl    sm:rounded-lg sm:px-10">
                                      <span className="absolute right-0 top-0 z-0 h-0 w-0 -translate-x-1/2 rounded-sm  bg-[#2c69ba] transition-all duration-1000 group-hover:h-full group-hover:w-full group-hover:scale-[15] group-hover:delay-150"></span>
                                      <div className="relative top-0 z-10 mx-auto flex max-w-md flex-col justify-center text-white">
                                        <div className="text-base leading-6 text-white transition-all duration-300 group-hover:pt-0 ">
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: item.section3,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <div>1</div>
                                <div>2</div>
                                <div>3</div> */}
                                  {/* <div className="flex w-auto gap-x-[5px]  align-middle">
                                  <img
                                    src="./assets/star.svg"
                                    className="mt-2 h-4"
                                  />
                                  <p
                                    className=" w-auto pb-5 text-xl font-normal leading-8 text-gray-500 "
                                    dangerouslySetInnerHTML={{
                                      __html: item.section1,
                                    }}
                                  />
                                </div>
                                <div className="flex w-auto gap-x-[5px]  align-middle">
                                  <img
                                    src="./assets/star.svg"
                                    className="mt-2 h-4"
                                  />
                                  <p
                                    className=" max-w-2xl pb-5 text-xl font-normal leading-8 text-gray-500 "
                                    dangerouslySetInnerHTML={{
                                      __html: item.section2,
                                    }}
                                  />
                                </div>
                                <div className="flex w-auto gap-x-[5px]  align-middle">
                                  <img
                                    src="./assets/star.svg"
                                    className="mt-2 h-4"
                                  />
                                  <p
                                    className=" max-w-2xl pb-5 text-xl font-normal leading-8 text-gray-500 "
                                    dangerouslySetInnerHTML={{
                                      __html: item.section3,
                                    }}
                                  />
                                </div> */}
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
