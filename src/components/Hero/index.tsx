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
  if (isLoading) return <Loadding />;

  return (
    <section
      id="home"
      className="relative z-10  overflow-hidden bg-white pb-16  pt-[130px] dark:bg-gray-dark "
    >
      <section
        // className="flex flex-col justify-around gap-6 px-5 pt-3 sm:gap-10 md:gap-16  md:px-10 lg:flex-row"
        data-aos="fade-up"
      >
        {/* content - start */}
        <div className="grid  px-5 sm:grid md:grid lg:grid lg:grid-cols-2 lg:gap-x-2">
          <div className="flex flex-col justify-center  lg:py-12 lg:text-left  xl:py-16">
            {data &&
              data
                .filter((v: IHero) => v.language_id.title == id)
                .map((item: IHero, index: number) => (
                  <div key={index}>
                    <h1
                      className="mb-4 text-5xl font-bold  sm:mb-4 sm:text-4xl sm:font-bold md:mb-5 md:text-7xl md:font-bold lg:mb-4 lg:text-4xl lg:font-bold xl:mb-4 xl:text-6xl xl:font-bold 2xl:mb-4 2xl:text-6xl 2xl:font-bold"
                      data-aos="fade-up"
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    ></h1>

                    <p
                      data-aos="fade-up"
                      className="mb-8 leading-relaxed text-gray-500 md:mb-10   lg:pr-3 xl:pr-5 xl:text-lg 2xl:pr-3"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></p>
                  </div>
                ))}
          </div>
          <div className="h-auto">
            <img
              src="./assets/hero.jpeg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-auto w-full"
            />
          </div>
          {/* image - end */}
        </div>
      </section>
    </section>
  );
}
