"use client";
import { UIStore } from "@/services/pullstate/store";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const selectLangauge = UIStore.useState((s) => s.selectLanguage);

  return (
    <>
      <footer className="relative z-10 border-t-[0.5px] bg-white pt-5 dark:bg-gray-dark md:pt-20 lg:pt-10">
        <div className="px-5 md:px-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-12">
                <p className="mb-2 text-base font-bold leading-relaxed text-[#014AAd]  dark:text-body-color-dark">
                  BHUME Engineering Design LLP, India
                </p>
                <span className=" text-sm text-body-color">
                  Unit No.516. 5th Floor, B2B Centre Co. Op. Premises Society
                  Ltd., Kanchpada, Malad (West), Mumbai 400064
                </span>
                <p className="mt-3 text-base font-bold leading-relaxed text-[#014AAd] dark:text-body-color-dark">
                  BHUME Pte Ltd, Singapore
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-3">
                <h2 className="mb-5 text-xl font-bold text-black dark:text-white">
                  {selectLangauge == "Chinese" ? "页数" : "Pages"}
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#014aad] dark:text-body-color-dark dark:hover:text-[#014aad]"
                    >
                      {selectLangauge == "Chinese" ? "家" : "Home"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#aboutUs"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#014aad] dark:text-body-color-dark dark:hover:text-[#014aad]"
                    >
                      {selectLangauge == "Chinese" ? "关于我们" : "About Us"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-3">
                <ul className="mt-3 md:mt-10">
                  <li>
                    <Link
                      href="/#ourServices"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#014aad] dark:text-body-color-dark dark:hover:text-[#014aad]"
                    >
                      {selectLangauge == "Chinese"
                        ? "我们的服务"
                        : "Our Services"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#ourProcess"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#014aad] dark:text-body-color-dark dark:hover:text-[#014aad]"
                    >
                      {selectLangauge == "Chinese"
                        ? "我们的流程"
                        : " Our Process"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-3">
                <h2 className="mb-5 text-xl font-bold text-black dark:text-white">
                  {selectLangauge == "Chinese" ? "其他" : "Other"}
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/#enquiry"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#014aad] dark:text-body-color-dark dark:hover:text-[#014aad]"
                    >
                      {selectLangauge == "Chinese" ? "询问" : "Enquiry"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-[#014aad] dark:text-body-color-dark dark:hover:text-[#014aad]"
                    >
                      {selectLangauge == "Chinese" ? "职业" : "Career"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-4">
            <p className="text-center text-base text-body-color dark:text-white">
              © 2024 -{" "}
              {selectLangauge == "Chinese"
                ? "BHUME 工程设计有限公司。版权所有"
                : "BHUME Engineering Design LLP. All right reserved"}
              <a
                href="http://uideck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              ></a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
