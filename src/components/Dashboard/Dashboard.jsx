import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionablesSummary from "./ActionablesSummary";
import MeetingHighlights from "./MeetingHighlights";
import ActivityPanel from "./ActivityPanel";
import { useGetMeetingsListQuery } from "../../features/meeting/meetingApi";
import {
  filterMeetings,
  MEETING_STATUS_FILTERS,
} from "../../features/meeting/selectors";

const ACTIVITY_FILTERS = [
  { label: "Notifications", value: "notif" },
  { label: "Chats", value: "chats" },
];

const Dashboard = () => {
  const [notifFilterValue, setNotifFilterValue] = useState("notif");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const {
    data: meetings,
    error,
    isLoading,
    refetch,
  } = useGetMeetingsListQuery();
  const navigate = useNavigate();

  const visibleMeetings = meetings
    ? filterMeetings(meetings, { status: selectedFilter })
    : undefined;

  const emptyActivityMessage =
    notifFilterValue === "notif"
      ? "Notifications will appear here once the notifications API is connected."
      : "Chats will appear here once the chats API is connected.";

  const handleMeetingsViewAll = () => {
    setSelectedFilter("all");
    navigate("/home/my-meetings-list");
  };

  const handleActivityViewAll = () => {
    if (notifFilterValue === "chats") {
      navigate("/home/chat");
      return;
    }

    navigate("/home/notifications");
  };

  return (
    <div className="grid dash__wrapper grid-cols-1 lg:grid-cols-[1.5fr_1fr] lg:gap-4">
      <div className="flex flex-col w-full">
        <MeetingHighlights
          meetings={visibleMeetings}
          isLoading={isLoading}
          error={error}
          onRetry={refetch}
          selectedFilter={selectedFilter}
          onFilterSelection={setSelectedFilter}
          onViewAll={handleMeetingsViewAll}
          filters={MEETING_STATUS_FILTERS}
        />
        <ActionablesSummary />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <ActivityPanel
          selectedFilter={notifFilterValue}
          onFilterSelection={setNotifFilterValue}
          onViewAll={handleActivityViewAll}
          filters={ACTIVITY_FILTERS}
          emptyMessage={emptyActivityMessage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
