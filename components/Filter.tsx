"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  let [filter, setFilter] = React.useState<string>(
    searchParams.get("filter") || ""
  );

  const handleFilter = (filterType: string) => {
    if (filterType === filter) {
      setFilter("");
    } else {
      setFilter(filterType);
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", filterType);
    const newUrl = `${window.location.pathname}?${
      filterType === filter ? "" : params.toString()
    }`;
    router.push(newUrl);
  };
  return (
    <div className=" flex items-center space-x-5 px-5">
      <button
        onClick={() => handleFilter("react")}
        className={`
             py-2 px-3 w-[100px] rounded-md cursor-pointer font-semibold
            ${filter === "react" ? "bg-[#4f6fd7] " : "bg-[#081338]"}
            `}
      >
        React
      </button>
      <button
        onClick={() => handleFilter("vue")}
        className={`
            py-2 px-3 w-[100px] rounded-md cursor-pointer font-semibold
           ${filter === "vue" ? "bg-[#4f6fd7] " : "bg-[#081338]"}
           `}
      >
        Vue
      </button>
    </div>
  );
}
