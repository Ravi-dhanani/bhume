"use client";
import ApiServices from "@/services/Apiservices";
import { useQuery } from "@tanstack/react-query";
import Loadding from "../Common/Loadding";
import SectionTitle from "../Common/SectionTitle";
import { UIStore } from "@/services/pullstate/store";
import { useRouter } from "next/navigation";

const Career = () => {
  const router = useRouter();
  const selectLanguage = UIStore.useState((s) => s.selectLanguage);

  const { data, isLoading } = useQuery({
    queryKey: ["career"],
    queryFn: ApiServices.getLstCareer,
  });
  if (isLoading) return <Loadding />;

  return (
    <>
      <section className="py-16 md:py-52 lg:py-32">
        {data && (
          <div className="container">
            <SectionTitle
              title="Join Our Team"
              ctitle="加入我们的团队"
              paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center
            />
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
              {data &&
                data.length > 0 &&
                data
                  ?.filter((v: any) => v.language.title == selectLanguage)
                  .map((item: any, index: number) => (
                    <div
                      className="relative flex flex-col items-center overflow-hidden rounded-lg border sm:rounded-sm md:flex-row"
                      key={index}
                      data-aos="fade-up"
                    >
                      <a className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                        <img
                          src="assets/career.png"
                          loading="lazy"
                          alt="Photo by Minh Pham"
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                      </a>
                      <div className="flex flex-col gap-2 p-4 lg:p-6">
                        <span className="text-sm text-gray-400">
                          {new Date(item.date).toDateString()}
                        </span>
                        <h2 className="text-xl font-bold text-gray-800">
                          <a className="transition duration-100 ">
                            {item.title}
                          </a>
                        </h2>
                        <p
                          className="text-gray-500"
                          dangerouslySetInnerHTML={{
                            __html: item.shortDescription,
                          }}
                        />
                        <div>
                          <button
                            onClick={() =>
                              router.push(`/singleCareer/${item?.title}`)
                            }
                            className="cursor-pointer font-semibold text-[#014aad] transition duration-100 hover:text-[#014aad] active:text-indigo-700"
                          >
                            {selectLanguage == "Chinese"
                              ? "阅读更多"
                              : "Read more"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Career;
