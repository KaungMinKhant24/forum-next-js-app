import Image, { StaticImageData } from "next/image";
import React from "react";

function Button({
  children,
  varient = "normal",
  icon,
  ...props
}: {
  children: React.ReactNode;
  varient?: "normal" | "outline";
  icon?: string | StaticImageData;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 w-full rounded-md cursor-pointer
    ${varient === "normal" ? " bg-[#0092EF]" : "border-2 border-[#0092EF]"}
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
