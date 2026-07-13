import React from "react";
import { FaCity, FaRegFolderOpen } from "react-icons/fa";
import {
  MdClose,
  MdOutlineDashboardCustomize,
  MdOutlineMarkChatRead,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { FiFileText, FiUsers } from "react-icons/fi";
import meetzen from "../../Assets/Meetzen.png";
import { AiOutlineFile, AiOutlineSearch } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdOutlineDashboardCustomize className="text-lg" />,
  },
  {
    label: "My Meetings List",
    link: "my-meetings-list",
    icon: <FiUsers className="text-lg" />,
  },
  {
    label: "Circular Resolutions",
    link: "circular-resolutions",
    icon: <MdOutlineModeEditOutline className="text-lg" />,
  },
  {
    label: "Draft Minutes",
    link: "draft-minutes",
    icon: <AiOutlineFile className="text-lg" />,
  },
  {
    label: "Final Minutes",
    link: "final-minutes-list",
    icon: <AiOutlineFile className="text-lg" />,
  },
  {
    label: "Resources",
    link: "resources",
    icon: <FaRegFolderOpen className="text-lg" />,
  },
  {
    label: "Board Evaluation",
    link: "board-evaluation-list",
    icon: <MdOutlineMarkChatRead className="text-lg" />,
  },
  {
    label: "Search Report",
    link: "search-report",
    icon: <AiOutlineSearch className="text-lg" />,
  },
  { label: "About", link: "about", icon: <FaCity className="text-lg" /> },
  {
    label: "Disclosure",
    link: "disclosure",
    icon: <FiFileText className="text-lg" />,
  },
  {
    label: "Support",
    link: "support",
    icon: <BiSupport className="text-lg" />,
  },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-surface shadow-lg transition-transform duration-300 ease-out md:static md:z-auto md:w-64 md:translate-x-0 md:shadow-none ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Primary navigation"
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <img src={meetzen} alt="Meetzen" className="w-10" />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-subtle">
              Meeting Manager
            </p>
            <h1 className="text-xl font-semibold text-foreground">
              MEET<span className="text-secondary">ZEN</span>
            </h1>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition hover:bg-surface-hover md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation menu"
        >
          <MdClose className="text-xl" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              to={`/home/${link.link}`}
              key={link.link}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-inverse shadow-sm"
                    : "text-muted hover:bg-surface-hover hover:text-foreground"
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="border-t border-border px-5 py-4 text-sm text-muted">
        <div className="flex items-center gap-3">
          <img src={meetzen} alt="" className="w-8" />
          <span>Meetzen LLC</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
