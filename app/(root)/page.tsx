import { auth } from "@/auth";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined }>;
}) {
  let session = await auth();
  let { search } = await searchParams;
  return <>{search}</>;
}

export default page;
