import Image, { StaticImageData } from "next/image";
import React from "react";

function Button({
  children,
  type = "normal",
  icon,
}: {
  children: React.ReactNode;
  type?: "normal" | "outline";
  icon?: string | StaticImageData;
}) {
  return (
    <button
      className={`px-2 py-1 w-full rounded-md cursor-pointer
    ${type === "normal" ? " bg-[#0092EF]" : "border-2 border-[#0092EF]"}
    ${icon && " flex  items-center justify-center   space-x-2"}
    `}
    >
      {icon && (
        <Image
          src={icon}
          width={25}
          height={25}
          className="aspect-square rounded-full object-cover"
          alt="icon"
        />
      )}
      <span> {children}</span>
    </button>
  );
}

export default Button;
