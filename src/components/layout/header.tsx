import { MdNotificationsNone } from "react-icons/md";

interface headerProps {
  toggle: boolean;
}
const Header = ({ toggle }: headerProps) => {
  return (
    <div className="flex bg-blueshade9">
      <div className={`sm:w-[120px] lg:hidden duration-1000`}></div>
      <div className="h-[100px] relative border-b-[2px]   border-b-blueshade7 w-full py-2.5 px-6 flex flex-row items-center justify-between ">
        <h1 className="text-lg sm:text-[32px] z-0 hidden sm:block font-bold ">
          Dashboard
        </h1>
        <button className=" hover:cursor-pointer sm:hidden ">
          <svg
            width="42"
            height=""
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="4" fill="#4C5D8B" />
            <rect x="4" y="6" width="16" height="2" rx="1" fill="white" />
            <rect x="4" y="11" width="14" height="2" rx="1" fill="white" />
            <rect x="4" y="16" width="9" height="2" rx="1" fill="white" />
          </svg>
        </button>
        <div className="flex flex-row gap-4">
          <button className="w-[42px] h-[42px] rounded-lg flex items-center justify-center bg-primaryblue ">
            <MdNotificationsNone size={24} color="white" />
          </button>
          <img
            src="./deleteable/profile.jpg"
            alt=""
            width={42}
            height={42}
            className="border  border-pirmaryorange rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
