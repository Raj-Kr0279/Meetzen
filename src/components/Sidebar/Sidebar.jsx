import React, { useContext, useEffect, useState } from "react";
import { FaCity, FaRegFolderOpen, FaUser } from "react-icons/fa";
import {
  MdOutlineDashboardCustomize,
  MdOutlineMarkChatRead,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { FiFileText, FiUsers } from "react-icons/fi";
import "./Sidebar.css";
import proCS from "../../Assets/proCSLogo.svg";
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
      label: "dashboard",
      link: "dashboard",
      icon: <MdOutlineDashboardCustomize />,
    },
    { label: "my-meetings-list", link: "my-meetings-list", icon: <FiUsers /> },
    {
      label: "circular-resolution",
      link: "circular-resolution",
      icon: <MdOutlineModeEditOutline />,
    },
    { label: "draft-minutes", link: "draft-minutes", icon: <AiOutlineFile /> },
    { label: "final-minutes", link: "final-minutes-list", icon: <AiOutlineFile /> },
    { label: "resources", link: "resources", icon: <FaRegFolderOpen /> },
    {
      label: "board-evaluation",
      link: "board-evaluation-list",
      icon: <MdOutlineMarkChatRead />,
    },
    {
      label: "search-report",
      link: "search-report",
      icon: <AiOutlineSearch />,
    },
    { label: "about", link: "about", icon: <FaCity /> },
    { label: "disclosure", link: "disclosure", icon: <FiFileText /> },
    { label: "support", link: "support", icon: <BiSupport /> },
  ];

  return (
    <div
      className={`w-[223px] absolute ${
        isSidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
      } min-h-screen transition-all  md:static z-50 twok:w-[350px] bg-dark text-white grow-0 shrink-0 sidebar`}
    >
      <div className="flex flex-col h-full">
        <div className="main__sidenav">
          <div className="logo py-10 font-semibold text-headingxl text-center">
            LOGO
          </div>
          <div className="links flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                to={`/home/${link.link}`}
                key={link.label}
                className={({ isActive }) =>
                  `link ${
                    isActive ? "bg-blue-700 text-white" : "hover:bg-blue-700/50"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="mt-auto procs__logo__img">
          <img src={proCS} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
