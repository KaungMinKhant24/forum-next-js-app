import { auth } from "@/auth";
import Button from "@/components/Button";
import Filter from "@/components/Filter";
import ThreadCard from "@/components/ThreadCard";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined }>;
}) {
  let session = await auth();
  let { search } = await searchParams;
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div>
          <h1 className=" text-3xl font-bold">All Threads</h1>
        </div>
        <div>
          <Button>
            <a href={"/thread/create"}>Create a new Thread</a>
          </Button>
        </div>
      </div>
      <Filter />
      <ThreadCard />
    </>
  );
}

export default page;
