import Sidebar from "./sidebar/sidebar";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import classNames from "classnames";

function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className="app-layout w-full  flex relative  h-screen ">
      <div
        className={classNames(
          " sidebar-container z-30 lg:z-10 flex flex-row lg:relative ",
          opened
            ? "lg:relative transition-all"
            : "absolute  w-[100vw] lg:w-auto transition-all "
        )}
      >
        <Sidebar opened={opened} toggle={toggle} />
      </div>
      <div className="header-outlet-container flex-1 sm:absolute lg:relative md:z-20 lg:z-0 w-full ">
        <Header opened={opened} toggle={toggle} />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
