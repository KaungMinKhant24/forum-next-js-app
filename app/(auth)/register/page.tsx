import Image from "next/image";

import logo from "@/public/logo.jpg";
import Input from "@/components/Input";
import google from "@/public/google.webp";
import github from "@/public/github.png";
import Button from "@/components/Button";
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
          <Button type="outline">Sign in Account ?</Button>
        </div>
      </div>
      <div className="w-2/4 flex h-screen items-center justify-center">
        <div className="w-3/4  space-y-5">
          <h1 className=" text-xl font-semibold">
            Sign Up to Creative <span className=" text-[#0092EF]">Coder</span>{" "}
            Forum
          </h1>
          <div className="">
            <Input placeholder="Name" label="Name" />
            <Input placeholder="UserName" label="UserName" />
            <Input placeholder="Email Address" label="Email Address" />
            <Input placeholder="Password" label="Password" />
          </div>
          <div>
            <Button>Register</Button>
          </div>
          <div className=" flex items-center space-x-3">
            <Button type="outline" icon={google}>
              Sign In With Google
            </Button>
            <Button type="outline" icon={github}>
              Sign In With GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
