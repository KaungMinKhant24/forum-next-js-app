import LeftSidebar from "@/components/LeftSideBar";
import Navbar from "@/components/NavBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="w-3/5">{children}</div>
        <div className="w-1/5">3</div>
      </div>
    </>
  );
}

export default layout;
