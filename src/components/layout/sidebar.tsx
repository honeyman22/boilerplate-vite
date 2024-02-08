interface sidebarProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ toggle, setToggle }: sidebarProps) => {
  return (
    <div className="w-full flex ">
      <div
        className={` ${
          toggle ? "w-[108px]" : "w-[273px]"
        } h-screen relative px-6 py-8 hidden sm:block duration-1000 ease-in-out border-r-[2px] bg-blueshade9  border-blueshade7`}
      >
        <div
          className={`logo-wrapper flex gap-4 ${
            toggle && "w-[40px] duration-1000 ease-in-out justify-center"
          } items-center `}
        >
          {toggle ? (
            <img
              src="/deleteable/temp-logo.png"
              alt=""
              width={toggle ? 34 : 39}
              height={toggle ? 34 : 39}
              className="img duration-1000 "
            />
          ) : (
            <img
              src="/deleteable/sidebar.png"
              alt=""
              width={"100%"}
              className="img duration-1000 "
            />
          )}
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className={`${
            toggle ? "toggled" : "toggleds"
          } hover:cursor-pointer z-50 hidden sm:block absolute top-[40px] -right-[14px]`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              rx="4"
              fill={toggle ? "#4C5D8B" : "white"}
            />
            <rect
              x="4"
              y="6"
              width="16"
              height="2"
              rx="1"
              fill={toggle ? "white" : "#4C5D8B"}
            />
            <rect
              x={toggle ? "4" : "6"}
              y="11"
              width="14"
              height="2"
              rx="1"
              fill={toggle ? "white" : "#4C5D8B"}
            />
            <rect
              x={toggle ? "4" : "11"}
              y="16"
              width="9"
              height="2"
              rx="1"
              fill={toggle ? "white" : "#4C5D8B"}
            />
          </svg>
        </button>
      </div>
      {!toggle && (
        <div className=" sm:block flex-1 lg:hidden  h-screen bg-primaryblue bg-opacity-[24.5%]"></div>
      )}
    </div>
  );
};

export default Sidebar;
