"use client";

import ApiServices from "@/services/Apiservices";
import { UIStore } from "@/services/pullstate/store";
import { IHero } from "@/types/hero";
import { useQuery } from "@tanstack/react-query";
import Loadding from "../Common/Loadding";

export default function Hero() {
  const { data, isLoading } = useQuery({
    queryKey: ["hero"],
    queryFn: ApiServices.getLstHero,
  });

  const id = UIStore.useState((s) => s.selectLanguage);
  console.log(id);
  if (isLoading) return <Loadding />;

  return (
    <section
      id="home"
      className="relative z-10  overflow-hidden bg-white pb-16  pt-[130px] dark:bg-gray-dark "
    >
      <section
        className="flex flex-col justify-around gap-6 px-5 pt-3 sm:gap-10 md:gap-16  md:px-10 lg:flex-row"
        data-aos="fade-up"
      >
        {/* content - start */}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-16">
          {data &&
            data
              .filter((v: IHero) => v.language_id.title == id)
              .map((item: IHero, index: number) => (
                <div key={index}>
                  <h1
                    className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-7xl"
                    data-aos="fade-up"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  ></h1>

                  <p
                    data-aos="fade-up"
                    className="lg:w-5/5 mb-8 leading-relaxed text-gray-500 md:mb-10 xl:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  ></p>
                </div>
              ))}
        </div>
        <div className=" h-auto overflow-hidden lg:h-full xl:w-6/12">
          <img
            src="./assets/hero.jpeg"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-auto w-full  object-fill md:h-[700px]"
          />
        </div>
        {/* image - end */}
      </section>
    </section>
  );
}
