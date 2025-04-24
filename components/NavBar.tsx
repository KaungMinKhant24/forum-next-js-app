import Image from "next/image";
import React from "react";

import logo from "../public/logo.jpg";
import profile from "../public/profile.jpg";
import Input from "./Input";

function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-6">
      <div className="flex items-center justify-center space-x-4">
        <Image
          src={logo}
          width={60}
          height={60}
          className="rounded-full"
          alt="logo"
        />
        <h1 className="font-bold">
          Creative <span className="text-[#0092EF]">Coder</span>
        </h1>
      </div>
      <div className=" w-[600px]">
        <Input placeholder="search anything globally" />
      </div>

      <div>
        <Image
          src={profile}
          width={45}
          height={45}
          className="aspect-square rounded-full object-cover"
          alt="logo"
        />
      </div>
    </nav>
  );
}

export default Navbar;
