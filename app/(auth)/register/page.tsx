import Image from "next/image";

import logo from "@/public/logo.jpg";
import Input from "@/components/Input";
import google from "@/public/google.webp";
import github from "@/public/github.png";
function page() {
  return (
    <div className="flex">
      <div className="w-2/4  h-screen flex items-center px-10 bg-[#081338] ">
        <div className="space-y-10 ">
          <div className=" flex items-center space-x-5 ">
            <Image
              src={logo}
              width={100}
              height={100}
              className=""
              alt="logo"
            />
            <h1 className="text-4xl font-semibold">
              Create <span className=" text-[#0092EF]">Coder</span> Myanmar
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            iusto aperiam corporis recusandae quidem molestiae ducimus in sequi
            tempore nesciunt sit quo nobis sunt, cum nam facilis doloremque
            laboriosam expedita?
          </p>
          <button className=" px-2 py-1 border-2 w-full rounded-md cursor-pointer ">
            Create a new Account ?
          </button>
        </div>
      </div>
      <div className="w-2/4 flex h-screen items-center justify-center">
        <div className="w-3/4  space-y-5">
          <h1 className=" text-xl font-semibold">
            Sign Up to Creative <span className=" text-[#0092EF]">Coder</span>{" "}
            Forum
          </h1>
          <div className="">
            <Input placeholder="Email Address" label="Email Address" />
            <Input placeholder="Password" label="Password" />
          </div>
          <div>
            <button className=" px-2 py-1 w-full  font-se bg-[#0092EF] rounded-md cursor-pointer ">
              Login
            </button>
          </div>
          <div className=" flex items-center space-x-3">
            <div className=" flex w-full items-center justify-center rounded-md border-2 border-[#0092EF] px-2 py-1 space-x-2">
              <Image
                src={google}
                width={25}
                height={25}
                className="aspect-square rounded-full object-cover"
                alt="google"
              />
              <p>Sign in with google</p>
            </div>
            <div className=" flex w-full items-center justify-center rounded-md border-2 border-[#0092EF] px-2 py-1 space-x-2">
              <Image
                src={github}
                width={25}
                height={25}
                className="aspect-square rounded-full object-cover"
                alt="github"
              />
              <p>Sign in with Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
