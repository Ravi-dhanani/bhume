"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import SelectLanguage from "../language/SelectLanguage";
import menuData from "./menuData";
import Navbar from "./Navbar";
import { UIStore } from "@/services/pullstate/store";
import TopNavbar from "./TopNavbar";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState<string>();
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const selectLangauge = UIStore.useState((s) => s.selectLanguage);

  // Sticky Navbar
  const [sticky, setSticky] = React.useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useMemo(() => {
    fetch("https://api.bhumeeng.com/api/get_language")
      .then((res: any) => res.json())
      .then((result: any) =>
        UIStore.update((s) => {
          s.selectLanguage = result?.data[0]._id;
        }),
      );
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header tra -transition-all left-0 top-0  z-40 w-full items-center  border-b-[0.10px] border-gray-300 shadow-md duration-300 ease-in-out md:fixed md:${
          sticky
            ? " z-[50] bg-white bg-opacity-100 shadow-sticky backdrop-blur-sm dark:bg-gray-dark dark:shadow-sticky-dark  md:py-[5px]"
            : " w-full bg-white sm:py-2 md:py-[5px]"
        } ${
          sticky
            ? "fixed z-[50] bg-white bg-opacity-100 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-white  "
        } `}
      >
        <div className="hidden md:block">
          <TopNavbar />
        </div>

        {/* <div className="container xs:container  sm:mx-auto md:mx-auto xl:mx-auto"> */}
        <div className="w-full px-5 md:px-10">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-3  lg:py-2" : "py-5"
                } `}
              >
                <Image
                  src="/assets/Logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className={`w-auto  transition-all duration-300 ease-in-out ${sticky ? "h-12" : "h-14"} `}
                />
                {/* <Image
                  src="/assets/Logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                /> */}
              </Link>
            </div>
            <div className="flex w-auto items-center justify-center px-4 sm:w-full">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px]  lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:hidden lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <div>
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-base font-semibold lg:mr-0 lg:inline-flex lg:px-0  ${
                                usePathName === menuItem.path ||
                                isActive == menuItem.path
                                  ? "  text-[#014AAD] dark:text-white"
                                  : "text-dark hover:text-[#014AAD]  dark:text-white/70 dark:hover:text-white"
                              }`}
                              onClick={() => {
                                setIsActive(menuItem.path);
                                setNavbarOpen(false);
                              }}
                            >
                              {selectLangauge == "Chinese"
                                ? menuItem.CTitle
                                : menuItem.title}
                            </Link>
                            <span
                              className={`absolute -bottom-0 left-0 h-0.5 w-0 bg-[#014aad] transition-all group-hover:w-full ${
                                usePathName === menuItem.path ||
                                isActive == menuItem.path
                                  ? "w-full"
                                  : "w-0"
                              }`}
                            ></span>
                          </div>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map(
                                (submenuItem: any, index: number) => (
                                  <Link
                                    href={submenuItem.path}
                                    key={index}
                                    className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ),
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <Navbar />
                </nav>
              </div>
            </div>
            <div className="flex  items-center  justify-end pr-16 lg:pr-0">
              <SelectLanguage />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
