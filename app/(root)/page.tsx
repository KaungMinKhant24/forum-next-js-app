import { auth } from "@/auth";

async function page() {
  let session = await auth();
  console.log("page seesion", session);
  return <>{session?.user?.name}</>;
}

export default page;
