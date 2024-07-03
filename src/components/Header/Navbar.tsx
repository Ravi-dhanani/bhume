import { UIStore } from "@/services/pullstate/store";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

// hooks
const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("/");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: 0, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const ids = ["home", "ourServices", "ourProcess", "aboutUs", "enquiry"];
  const activeId = useScrollspy(ids, 54);
  const selectLangauge = UIStore.useState((s) => s.selectLanguage);

  return (
    <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
      <nav className=" lg:flex lg:gap-x-7 xl:flex xl:justify-between 2xl:flex 2xl:justify-between ">
        <a
          onClick={() => {
            pathname == "/career" || "/singleCareer"
              ? router.push("/#home")
              : "#home";
          }}
          className={` main group relative text-lg  font-semibold  ${
            activeId == ids[0] ? "text-[#014aad]" : "text-gray-600"
          }
          `}
        >
          {selectLangauge == "Chinese" ? "家" : "Home"}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-[#014aad] transition-all group-hover:w-full ${
              activeId == ids[0] ? "w-full" : "w-0"
            }`}
          ></span>
        </a>

        <a
          onClick={() => {
            pathname == "/career" || "/singleCareer"
              ? router.push("/#ourServices")
              : "#ourServices";
          }}
          className={` group relative  text-lg font-semibold transition duration-100 hover:text-[#014aad] 
          ${activeId == ids[1] ? "text-[#014aad]" : "text-gray-600"}
          `}
        >
          {selectLangauge == "Chinese" ? "我们的服务" : "Our Services"}

          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-[#014aad] transition-all group-hover:w-full ${
              activeId == ids[1] ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
        <a
          onClick={() => {
            pathname == "/career" || "/singleCareer"
              ? router.push("/#ourProcess")
              : "#ourProcess";
          }}
          className={` group relative  text-lg font-semibold transition duration-100 hover:text-[#014aad] 
          ${activeId == ids[2] ? "text-[#014aad]" : "text-gray-600"}
          `}
        >
          {selectLangauge == "Chinese" ? "我们的流程" : " Our Process"}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-[#014aad] transition-all group-hover:w-full ${
              activeId == ids[2] ? "w-full" : "w-0"
            }`}
          ></span>
        </a>

        <a
          onClick={() => {
            pathname == "/career" || "/singleCareer"
              ? router.push("/#aboutUs")
              : "#aboutUs";
          }}
          className={` group relative  text-lg  font-semibold hover:text-[#014aad] active:text-[#014aad] ${
            activeId == ids[3] ? "text-[#014aad]" : "text-gray-600"
          } `}
        >
          {selectLangauge == "Chinese" ? "关于我们" : "About Us"}

          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-[#014aad] transition-all group-hover:w-full ${
              activeId == ids[3] ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
        <a
          onClick={() => {
            pathname == "/career" || "/singleCareer"
              ? router.push("/#enquiry")
              : "#enquiry";
          }}
          className={` group relative  text-lg font-semibold hover:text-[#014aad]  active:text-[#014aad]   ${
            activeId == ids[4] ? "text-[#014aad]" : "text-gray-600 "
          } `}
        >
          {selectLangauge == "Chinese" ? "询问" : "Enquiry"}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-[#014aad] transition-all group-hover:w-full ${
              activeId == ids[4] ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
        <a
          onClick={() => {
            router.push("/career");
          }}
          className={` group relative  cursor-pointer text-lg    font-semibold hover:text-[#014aad] active:text-[#014aad] ${
            pathname == "/career" || pathname == "/singleCareer"
              ? "text-[#014aad]"
              : "text-gray-600"
          } `}
        >
          {selectLangauge == "Chinese" ? "职业" : "Career"}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-[#014aad] transition-all group-hover:w-full ${
              pathname == "/career" || pathname == "/singleCareer"
                ? "w-full"
                : "w-0"
            }`}
          ></span>
        </a>
      </nav>
    </div>
  );
}
