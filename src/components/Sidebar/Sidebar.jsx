import React, { useContext, useEffect, useState } from "react";
import { FaCity, FaRegFolderOpen, FaUser } from "react-icons/fa";
import {
  MdOutlineDashboardCustomize,
  MdOutlineMarkChatRead,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { FiFileText, FiUsers } from "react-icons/fi";
import meetzen from "../../Assets/meetzen.png";
import { AiOutlineFile, AiOutlineSearch } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { DataContext } from "../Context/DataContext";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const { sidemenu } = useContext(DataContext);
  const [isSidebar, setSidebar] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navLinks = [
    {
      label: "Dashboard",
      link: "dashboard",
      icon: <MdOutlineDashboardCustomize />,
    },
    { label: "My-meetings-list", link: "my-meetings-list", icon: <FiUsers /> },
    {
      label: "Circular-resolutions",
      link: "circular-resolutions",
      icon: <MdOutlineModeEditOutline />,
    },
    { label: "Draft-minutes", link: "draft-minutes", icon: <AiOutlineFile /> },
    { label: "Final-minutes", link: "final-minutes-list", icon: <AiOutlineFile /> },
    { label: "Resources", link: "resources", icon: <FaRegFolderOpen /> },
    {
      label: "Board-evaluation",
      link: "board-evaluation-list",
      icon: <MdOutlineMarkChatRead />,
    },
    {
      label: "Search-report",
      link: "search-report",
      icon: <AiOutlineSearch />,
    },
    { label: "About", link: "about", icon: <FaCity /> },
    { label: "Disclosure", link: "disclosure", icon: <FiFileText /> },
    { label: "Support", link: "support", icon: <BiSupport /> },
  ];

  return (
    <div
      className={`w-[223px] absolute ${
        isSidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
      } transition-all  md:static z-50 twok:w-[350p] grow-0 shrink-0 sidebar`}
    >
      <div className="flex flex-col h-full">
        <div className="main__sidenav">
          <div className="logo py-10 font-moirai font-semibold text-center flex items-center justify-center flex-col">
           <img src={meetzen} alt="" className="w-20" />
           <h1 className="text-meetzen-textSecondary text-4xl ps-2">MEET<span className="text-meetzen-secondary">ZEN</span></h1> 
          </div>
          <div className="links flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                to={`/home/${link.link}`}
                key={link.label}
                className={({ isActive }) =>
                  `link rounded-tr-lg rounded-br-lg font-normal flex items-center gap-2 py-2 px-2 text-sm ${ 
                    isActive ? "bg-meetzen-primary text-white " : "hover:bg-meetzen-primary/50 hover:text-white text-meetzen-textPrimary"
                  }`
                }
              >
                {link.icon}
                <p className="">{link.label}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="mt-auto flex items-end gap-2 m-4">
          <img src={meetzen} alt="" className="w-12" />
          <span className="text-meetzen-textSecondary">Meetzen LLC</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
