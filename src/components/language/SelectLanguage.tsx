"use client";
import ApiServices from "@/services/Apiservices";
import { UIStore } from "@/services/pullstate/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";

interface ISelectLanguage {
  _id: string;
  title: string;
}
export default function SelectLanguage() {
  const id = UIStore.useState((s) => s.selectLanguage);
  const { data } = useQuery({
    queryKey: ["language"],
    queryFn: ApiServices.getLstLanguage,
  });

  useEffect(() => {
    const trs: any = localStorage.getItem("language");
    UIStore.update((s) => {
      s.selectLanguage = trs;
    });
  });

  return (
    <div className="w-full">
      <select
        id="large"
        className="focus-within-none block   rounded-lg border  px-4 py-3 text-base outline-none  "
        value={id}
        onChange={(e: any) => {
          UIStore.update((s) => {
            s.selectLanguage = e.target.value;
          });
          localStorage.setItem("language", e.target.value);
        }}
      >
        {data &&
          data.map((item: any, index: number) => (
            <option key={index} value={item.title}>
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
}
