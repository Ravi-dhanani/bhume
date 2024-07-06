import { UIStore } from "@/services/pullstate/store";
import React from "react";

export default function MobileTopBar() {
  const selectLangauge = UIStore.useState((s) => s.selectLanguage);

  return (
    <div>
      <div className="mx-5  flex justify-between  md:hidden lg:hidden xl:hidden 2xl:hidden ">
        <div>
          <div className="flex ">
            <p className="hidden text-xs text-body-color">
              {selectLangauge == "Chinese" ? "接触:" : "Contact:"}
            </p>
            <p className=" text-xs text-body-color  hover:text-[#014AAD]">
              +91 90042 34631
              {selectLangauge == "Chinese" ? "(孟买):" : "(Mumbai)"}
            </p>
          </div>
        </div>
        <div>
          <p className="hidden text-xs text-gray-600">
            {selectLangauge == "Chinese" ? "邮件:" : "Mail:"}
          </p>
          <p className="text-xs text-body-color hover:text-[#014AAD]">
            <a href="mailto:info@nebulem.com">enquiry@bhumeeng.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
