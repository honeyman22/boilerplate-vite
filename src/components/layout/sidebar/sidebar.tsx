import { sidebardata } from "../../../utils/sidebar-data";
import classnames from "classnames";
import SideBarToggler from "./sidebar-toggler";
import SidebarBox from "./sidebar-box";

const Sidebar = ({ opened, toggle }: sidebarProps) => {
  return (
    <div className="w-full  sidebar-wrapper flex ">
      <div
        className={classnames(
          "h-screen relative sm:px-6  py-8 block duration-1000 ease-in-out border-r-[2px] bg-blueshade9  border-blueshade7",
          opened ? "w-0 sm:block  sm:w-[108px]" : "w-[273px] px-6"
        )}
      >
        <div
          className={classnames(
            "logo-wrapper  h-10 flex gap-4 items-center",
            opened && " duration-1000 ease-in-out justify-center"
          )}
        >
          <img
            src="/deleteable/temp-logo.png"
            alt=""
            width={39}
            height={39}
            className="img duration-1000 "
          />

          <h1
            className={`displaytransation line-clamp-1 flex-1 overflow-hidden ${
              opened ? " opacity-0" : "opacity-100"
            } text-[30px] `}
          >
            TECHLOGO
          </h1>
        </div>
        <SideBarToggler opened={opened} toggle={toggle} />
        <div
          className={classnames(
            "mt-10",
            opened && "hidden route-list   flex-col   sm:flex "
          )}
        >
          {sidebardata.map((item) => (
            <SidebarBox key={item?.name} {...item} opened={opened} />
          ))}
        </div>
      </div>
      {!opened && (
        <div className=" sm:block flex-1 lg:hidden  h-screen bg-primaryblue bg-opacity-[24.5%]"></div>
      )}
    </div>
  );
};

export default Sidebar;
