import { UIStore } from "@/services/pullstate/store";
import React from "react";

export default function TopNavbar() {
  const selectLangauge = UIStore.useState((s) => s.selectLanguage);

  return (
    <div className="hidden sm:hidden md:block lg:block xl:block 2xl:block">
      <div className="h-8 border border-b border-gray-100 bg-white">
        <div className="flex justify-between md:mx-10 ">
          <div className="flex justify-between gap-x-5">
            <div className="flex gap-x-1">
              <p className="text-base text-body-color">
                {selectLangauge == "Chinese" ? "接触:" : "Contact:"}
              </p>
              <p className="text-base text-body-color  hover:text-[#014AAD]">
                +91 90042 34631
                {selectLangauge == "Chinese" ? "(孟买):" : "(Mumbai)"}
              </p>
            </div>
            <div>
              <div className="flex gap-x-1">
                <p className="text-base text-gray-600">
                  {selectLangauge == "Chinese" ? "邮件:" : "Mail:"}
                </p>
                <p className="text-base text-body-color hover:text-[#014AAD]">
                  <a href="mailto:info@nebulem.com">enquiry@bhumeeng.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden gap-x-2 sm:hidden md:hidden lg:flex">
            <p className="text-base text-body-color">
              {selectLangauge == "Chinese" ? "跟着我们:" : "Follow us on:"}
            </p>
            <a
              href=" https://www.instagram.com/bhume_engg?igsh=MXh1MmV0ZjRzbGsxaA%3D%3D&utm_source=qr"
              target="_blank"
              className=" text-gray-400 transition duration-100 hover:text-[#014AAd] active:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561513923687"
              target="_blank"
              className=" text-gray-400 transition duration-100 hover:text-[#014AAd] active:text-gray-600"
            >
              <svg
                className="h-7 w-7"
                width={24}
                height={24}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256.3 293c26.9 31.2 58.3 58.5 99.9 58.5 56.1 0 89.5-42.6 89.5-96.8 0-54-34.1-94.2-89-94.2 -43.9 0-72.7 28.5-100.4 62.1 -28.5-34.1-56.7-62.1-101.4-62.1 -53.5 0-88.5 40.2-88.5 95.2 0 54.6 35.8 95.7 90.8 95.7C204.1 351.5 228.7 321.9 256.3 293zM115.5 256.8c0-21.3 13.9-44.5 39.3-44.5 26 0 52.7 25.9 70.4 45 -17.2 20.1-42.5 41.9-68.8 41.9C130.3 299.2 115.5 281.1 115.5 256.8zM287.3 257.3c18.4-19.9 41.2-45 68.3-45 26.4 0 41.4 20.8 41.4 44 0 23.4-13.7 43-39.8 43C329.2 299.2 305.7 278.5 287.3 257.3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/bhume-engineering-design-llp"
              target="_blank"
              className=" text-gray-400 transition duration-100 hover:text-[#014AAd] active:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
