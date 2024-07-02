"use client";
import ApiServices from "@/services/Apiservices";
import { UIStore } from "@/services/pullstate/store";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface ISelectLanguage {
  _id: string;
  title: string;
}
export default function SelectLanguage() {
  const { data } = useQuery({
    queryKey: ["language"],
    queryFn: ApiServices.getLstLanguage,
  });

  return (
    <div className="w-full">
      <select
        id="large"
        className="focus-within-none block   rounded-lg border  px-4 py-3 text-base outline-none  "
        defaultValue={"English"}
        onChange={(e: any) => {
          UIStore.update((s) => {
            s.selectLanguage = e.target.value;
          });
        }}
      >
        {data &&
          data.map((item: any, index: number) => (
            <option key={index}>{item.title}</option>
          ))}
      </select>
    </div>
  );
}
