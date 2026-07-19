import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiMessageSquare, FiSearch } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { MdArrowBackIosNew, MdTune } from "react-icons/md";
import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";
import { MdLogout, MdOutlinePassword } from "react-icons/md";
import prof from "../../assets/profileDummy.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { removeCompany } from "../../features/company/companySlice";

const TopHeader = ({
  activeOverlay,
  toggleOverlay,
  setIsSidebarOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { name, role } = useSelector((state) => state.user.user || {});

  useEffect(() => {
    if (!isProfileOpen) return;

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProfileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(removeCompany());
    setIsProfileOpen(false);
    navigate("/");
  };

  const clickLink = (label) => {
    setIsProfileOpen(false);

    switch (label) {
      case "Profile Details":
        navigate("/home/edit-profile");
        break;

      case "Change Password":
        navigate("/home/change-password");
        break;

      case "Logout":
        handleLogout();
        break;

      default:
        break;
    }
  };

  const dropdownItems = [
    { label: "Profile Details", icon: <FaRegUserCircle /> },
    { label: "Change Password", icon: <MdOutlinePassword /> },
    { label: "Logout", icon: <MdLogout /> },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background backdrop-blur">
      <div className="flex min-h-16 items-center gap-3 px-4 py-3 md:px-6">
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-primary transition hover:bg-surface-hover md:hidden"
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
              className="h-11 w-full rounded-lg border border-border bg-background py-2 pl-11 pr-12 text-sm text-primary outline-none transition placeholder:text-placeholder focus:border-primary focus:ring-2 focus:ring-info-soft"
              placeholder="Advanced search using filters"
            />

            <button
              type="button"
              onClick={() => toggleOverlay("filters")}
              className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-subtle transition hover:bg-surface-hover hover:text-primary"
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

            <span className="hidden text-sm font-medium md:inline">
              Chat
            </span>

            <span className="hidden h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-white md:flex">
              5
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggleOverlay("notifications")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary transition hover:bg-surface-hover"
            aria-label="Open notifications"
            aria-expanded={activeOverlay === "notifications"}
          >
            <AiOutlineBell className="text-xl" />
          </button>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            {/* Mobile */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border transition hover:opacity-90 md:hidden"
              onClick={() => setIsProfileOpen((prev) => !prev)}
              aria-label="Open profile menu"
              aria-expanded={isProfileOpen}
            >
              <img
                src={prof}
                className="h-full w-full object-cover"
                alt="Profile"
              />
            </button>

            {/* Desktop */}
            <button
              type="button"
              className="hidden items-center rounded-lg border border-border px-2 py-1.5 transition hover:bg-surface-hover md:flex"
              onClick={() => setIsProfileOpen((prev) => !prev)}
              aria-expanded={isProfileOpen}
            >
              <img
                src={prof}
                className="h-10 w-10 rounded-full"
                alt="Profile"
              />

              <div className="ml-3 text-left">
                <div className="text-sm font-medium text-primary">
                  {name}
                </div>
                <div className="text-xs text-subtle">
                  {role}
                </div>
              </div>

              <FaAngleDown className="ml-3 text-subtle" />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute right-0 top-full mt-2 w-64 origin-top-right rounded-lg border border-border bg-white shadow-lg transition-all duration-200 ${
                isProfileOpen
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
            >
              <div className="p-2">
                {dropdownItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => clickLink(item.label)}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-primary transition hover:bg-surface-hover"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;