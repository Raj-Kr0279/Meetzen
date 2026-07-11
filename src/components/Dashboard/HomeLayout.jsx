import React, { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopHeader from "./TopHeader";
import FilterModal from "./FilterModal";
import NotificationModal from "./NotificationModal";
import ProfileModal from "./ProfileModal";
import MeetingModal from "./MeetingModal";

const HomeLayout = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleOverlay = (overlayName) => {
    setActiveOverlay((currentOverlay) =>
      currentOverlay === overlayName ? null : overlayName
    );
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  useEffect(() => {
    setIsSidebarOpen(false);
    setActiveOverlay(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
        setActiveOverlay(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isSidebarOpen && !activeOverlay) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeOverlay, isSidebarOpen]);

  return (
    <>
      {activeOverlay ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/55"
          onClick={closeOverlay}
          aria-label="Close dialog"
        />
      ) : null}

      {isSidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/45 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation menu"
        />
      ) : null}

      <div className="h-dvh overflow-hidden bg-background text-foreground">
        <TopHeader
          setIsSidebarOpen={setIsSidebarOpen}
          activeOverlay={activeOverlay}
          toggleOverlay={toggleOverlay}
        />

        {activeOverlay === "notifications" ? (
          <NotificationModal onClose={closeOverlay} />
        ) : null}
        {activeOverlay === "filters" ? (
          <FilterModal onClose={closeOverlay} />
        ) : null}
        {activeOverlay === "profile" ? (
          <ProfileModal onClose={closeOverlay} />
        ) : null}
        {activeOverlay === "meeting" ? <MeetingModal onClose={closeOverlay} /> : null}

        <div className="flex h-[calc(100dvh-78px)] min-h-0 overflow-hidden">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <main className="min-w-0 min-h-0 flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6">
            <Suspense fallback={<p>loading....</p>}>
            <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
