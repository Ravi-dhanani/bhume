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
  const { data } = useQuery({
    queryKey: ["language"],
    queryFn: ApiServices.getLstLanguage,
  });
  const [defultLanguage, setDefultLanguage] = useState<any>();
  useMemo(() => {
    if (typeof window !== "undefined") {
      const trs = localStorage.getItem("language");
      setDefultLanguage(trs);
    }
  }, []);

  useEffect(() => {
    UIStore.update((s) => {
      s.selectLanguage = defultLanguage;
    });
  });

  if (!data) return;
  return (
    <div className="w-full">
      <select
        id="large"
        className="focus-within-none block rounded-lg border  px-4 py-3 text-base outline-none  "
        value={defultLanguage}
        onChange={(e: any) => {
          localStorage.setItem("language", e.target.value);
          setDefultLanguage(e.target.value);
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
