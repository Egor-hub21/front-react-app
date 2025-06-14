import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiFile } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

interface MenuItem {
  name: string;
  link: string;
  icon: React.ElementType; // Тип для иконок
  margin?: boolean;
}

interface SidebarMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarMenuProps> = ({ open, setOpen }) => {
  const menus: MenuItem[] = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "Files", link: "/files", icon: FiFile, margin: true },
  ];

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <Link
            to={menu.link}
            key={i}
            className={` ${
              menu.margin && "mt-5"
            } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}0ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre
               text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden 
               group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-30
               group-hover:w-fit`}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
