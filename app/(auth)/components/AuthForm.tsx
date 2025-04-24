"use client";
import Button from "@/components/Button";
import github from "@/public/github.png";
import google from "@/public/google.webp";
import ROUTES from "@/route";
import { signIn } from "next-auth/react";
import { toast, Bounce } from "react-toastify";

function AuthForm() {
  const authSignIn = async (type: "github" | "google") => {
    try {
      await signIn(type, {
        redirectTo: ROUTES.HOME,
      });
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <div className=" flex items-center space-x-3">
      <Button
        varient="outline"
        icon={google}
        onClick={() => authSignIn("google")}
      >
        Sign In With Google
      </Button>

      <Button
        varient="outline"
        icon={github}
        onClick={() => authSignIn("github")}
      >
        Sign In With GitHub
      </Button>
    </div>
  );
}

export default AuthForm;
