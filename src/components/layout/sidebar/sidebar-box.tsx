import classNames from "classnames";
import React from "react";

type SidebarItem = {
  name: string;
  icon: JSX.Element;
  route: string;
  opened: boolean;
};

const SidebarBox = ({ name, icon, route, opened }: SidebarItem) => {
  return (
    <div
      key={name}
      className="side-list rounded cursor-pointer overflow-hidden hover:bg-blueshade7 text-blueshade2  px-4 py-2 flex items-center gap-4 "
    >
      {/* //this is noting */}
      <div className="w-6 h-6">{icon}</div>
      <p
        className={classNames(
          "displaytransation text-sm  line-clamp-1 overflow-hidden",
          opened ? " opacity-0" : " opacity-100"
        )}
      >
        {name}
      </p>
    </div>
  );
};

export default SidebarBox;
