"use client";
import { useEffect } from "react";
import AOS from "aos";
import { UIStore } from "@/services/pullstate/store";

const SectionTitle = ({
  title,
  ctitle,
  width = "100%",
  center,
  mb = "15px",
}: {
  title: string;
  ctitle: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const id = UIStore.useState((s) => s.selectLanguage);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h2 className="mb-2 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {id == "Chinese" ? ctitle : title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
