import React from "react";
import { FiMenu, FiMessageSquare, FiSearch } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { MdArrowBackIosNew, MdTune } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import prof from "../../Assets/profileDummy.png";
import { useNavigate } from "react-router-dom";

const TopHeader = ({
  activeOverlay,
  toggleOverlay,
  setIsSidebarOpen,
}) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur">
      <div className="flex min-h-16 items-center gap-3 px-4 py-3 md:px-6">
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground transition hover:bg-surface-hover md:hidden"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open navigation menu"
        >
          <FiMenu className="text-xl" />
        </button>

        <button
          type="button"
          className="hidden items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-primary transition hover:bg-info-bg md:inline-flex"
          onClick={() => navigate(-1)}
        >
          <MdArrowBackIosNew className="text-base" />
          <span>Back</span>
        </button>

        <div className="flex min-w-0 flex-1 items-center">
          <label className="relative w-full max-w-2xl">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtle" />
            <input
              type="text"
              className="h-11 w-full rounded-lg border border-border bg-background py-2 pl-11 pr-12 text-sm text-foreground outline-none transition placeholder:text-placeholder focus:border-primary focus:ring-2 focus:ring-info-soft"
              placeholder="Advanced search using filters"
            />
            <button
              type="button"
              onClick={() => toggleOverlay("filters")}
              className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-subtle transition hover:bg-surface-hover hover:text-foreground"
              aria-label="Open filters"
              aria-expanded={activeOverlay === "filters"}
            >
              <MdTune className="text-lg" />
            </button>
          </label>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border px-3 text-primary transition hover:bg-info-bg"
            onClick={() => navigate("/home/chat")}
            aria-label="Open chat"
          >
            <FiMessageSquare className="text-lg" />
            <span className="hidden text-sm font-medium md:inline">Chat</span>
            <span className="hidden h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-white md:flex">
              5
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggleOverlay("notifications")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition hover:bg-surface-hover"
            aria-label="Open notifications"
            aria-expanded={activeOverlay === "notifications"}
          >
            <AiOutlineBell className="text-xl" />
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border transition hover:opacity-90 md:hidden"
            onClick={() => toggleOverlay("profile")}
            aria-label="Open profile menu"
            aria-expanded={activeOverlay === "profile"}
          >
            <img src={prof} className="h-full w-full object-cover" alt="Profile" />
          </button>

          <button
            type="button"
            className="hidden items-center rounded-lg border border-border px-2 py-1.5 transition hover:bg-surface-hover md:flex"
            onClick={() => toggleOverlay("profile")}
            aria-expanded={activeOverlay === "profile"}
          >
            <img src={prof} className="h-10 w-10 rounded-full" alt="Profile" />
            <div className="ml-3 text-left">
              <div className="text-sm font-medium text-foreground">John Doe</div>
              <div className="text-xs text-subtle">President</div>
            </div>
            <FaAngleDown className="ml-3 text-subtle" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
