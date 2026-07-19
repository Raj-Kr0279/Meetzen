export const MEETING_STATUS_FILTERS = [
  { label: "All", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Recent", value: "recent" },
];

export const filterMeetings = (
  meetings = [],
  { status = "all", year = "all", committee = "all" } = {},
) => {
  return meetings.filter((meeting) => {
    const matchesStatus =
      status === "all" ? true : meeting.status === status;

    const meetingYear = new Date(meeting.startAt).getFullYear().toString();
    const matchesYear = year === "all" ? true : meetingYear === year;

    const matchesCommittee =
      committee === "all" ? true : meeting.committeeCode === committee;

    return matchesStatus && matchesYear && matchesCommittee;
  });
};
