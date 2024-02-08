import Sidebar from "./sidebar";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex relative  h-screen ">
      <div
        className={` sm:z-30 lg:z-10 flex flex-row lg:relative   ${
          !toggle
            ? "sm:absolute  sm:w-[100vw] lg:w-auto transition-all "
            : "lg:relative transition-all"
        }`}
      >
        <Sidebar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="flex-1 sm:absolute lg:relative md:z-20 lg:z-0 w-full ">
        <Header toggle={toggle} />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
