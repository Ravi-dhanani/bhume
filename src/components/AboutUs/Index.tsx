"use client";
import ApiServices from "@/services/Apiservices";
import { UIStore } from "@/services/pullstate/store";
import { useQuery } from "@tanstack/react-query";
import AOS from "aos";
import { useEffect } from "react";
import Loadding from "../Common/Loadding";
import SectionTitle from "../Common/SectionTitle";

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
          <section className="relative px-10  lg:py-5">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <div className="relative mx-auto  px-4 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                  <div className="img-box">
                    <img
                      src="assets/aboutUs.png"
                      alt="About Us tailwind page"
                      className="max-lg:mx-auto"
                    />
                  </div>
                  <div className="flex items-center lg:pl-[50px]">
                    <div>
                      {data &&
                        data
                          .filter((v: any) => v.language.title == id)
                          .map((item: any, index: number) => (
                            <div key={index}>
                              <p
                                className=" max-w-2xl pb-3 text-xl font-normal leading-8 text-gray-500 max-lg:text-center"
                                dangerouslySetInnerHTML={{
                                  __html: item.shortDescription,
                                }}
                              />
                              <h2 className="my-4 text-center text-2xl font-semibold">
                                {id == "Chinese"
                                  ? "为什么选择我们?"
                                  : "Why Choose Us?"}
                              </h2>
                              <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-x-2">
                                {/* <div>1</div>
                                <div>2</div>
                                <div>3</div> */}
                                <div className="flex w-auto gap-x-[5px]  align-middle">
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
                                </div>
                              </div>
                            </div>
                          ))}
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
