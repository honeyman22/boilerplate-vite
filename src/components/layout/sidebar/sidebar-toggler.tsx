const SideBarToggler = ({ opened, toggle }: sidebarProps) => {
  return (
    <button
      onClick={toggle}
      className={`${
        opened ? "toggler hidden sm:block" : "notoggler"
      } hover:cursor-pointer z-50 block absolute top-[40px] -right-[14px]`}
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
          fill={opened ? "#4C5D8B" : "white"}
        />
        <rect
          x="4"
          y="6"
          width="16"
          height="2"
          rx="1"
          fill={opened ? "white" : "#4C5D8B"}
        />
        <rect
          x={opened ? "4" : "6"}
          y="11"
          width="14"
          height="2"
          rx="1"
          fill={opened ? "white" : "#4C5D8B"}
        />
        <rect
          x={opened ? "4" : "11"}
          y="16"
          width="9"
          height="2"
          rx="1"
          fill={opened ? "white" : "#4C5D8B"}
        />
      </svg>
    </button>
  );
};

export default SideBarToggler;
