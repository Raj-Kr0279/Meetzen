import { lazy } from "react";

export const HomeLayoutPage = lazy(() =>
  import("../../components/Dashboard/HomeLayout")
);

export const DashboardPage = lazy(() =>
  import("../../components/Dashboard/Dashboard")
);

export const ChangePasswordPage = lazy(() =>
  import("../../components/ChangePassword/ChangePassword")
);

export const MyMeetingsListPage = lazy(() =>
  import("../../components/MyMeeting/MyMeetingsList")
);

export const MeetingDetailsPage = lazy(() =>
  import("../../components/MyMeeting/MeetingWorkspace")
);

export const AgendaPage = lazy(() =>
  import("../../components/MyMeeting/Agenda/Agenda")
);

export const MembersPage = lazy(() =>
  import("../../components/MyMeeting/Members")
);

export const MinutesPage = lazy(() =>
  import("../../components/MyMeeting/Minutes")
);

export const MyDocumentsPage = lazy(() =>
  import("../../components/Resources/MyDocuments")
);

export const RequestsPage = lazy(() =>
  import("../../components/MyMeeting/Requests")
);

export const CircularResolutionListPage = lazy(() =>
  import("../../components/CircularResolution/CircularResolutionList")
);

export const CircularResolutionResultPage = lazy(() =>
  import("../../components/CircularResolution/CircularResolutionResult")
);

export const DraftMinutesPage = lazy(() =>
  import("../../components/DraftMinutes/DraftMinutes")
);

export const EditDraftDocumentPage = lazy(() =>
  import("../../components/DraftMinutes/EditDraftDocument")
);

export const CompareDocumentsPage = lazy(() =>
  import("../../components/FinalMinutes/CompareDocuments")
);

export const FinalMinutesListPage = lazy(() =>
  import("../../components/FinalMinutes/FinalMinutesList")
);

export const ViewFinalMinutePage = lazy(() =>
  import("../../components/FinalMinutes/ViewFinalMinute")
);

export const BoardEvaluationDetailsPage = lazy(() =>
  import("../../components/Evaluations/BoardEvaluationDetails")
);

export const ResourcesPage = lazy(() =>
  import("../../components/Resources/Resources")
);

export const BoardEvaluationListPage = lazy(() =>
  import("../../components/Evaluations/BoardEvaluationList")
);

export const SearchReportPage = lazy(() =>
  import("../../components/SearchReport/SearchReport")
);

export const AboutCompanyPage = lazy(() =>
  import("../../components/AboutCompany/AboutCompany")
);

export const DisclosurePage = lazy(() =>
  import("../../components/Disclosure/Disclosure")
);

export const JoinCallPage = lazy(() =>
  import("../../components/MyMeeting/JoinCall")
);

export const PdfAgendaPage = lazy(() =>
  import("../../components/MyMeeting/Agenda/PdfAgenda")
);

export const BoardBookPage = lazy(() =>
  import("../../components/MyMeeting/BoardBook")
);

export const ResolutionDocPage = lazy(() =>
  import("../../components/CircularResolution/ResolutionDoc")
);

export const MeetingScheduleListPage = lazy(() =>
  import("../../components/MyMeeting/MeetingScheduleList")
);

export const HelpAndSupportPage = lazy(() =>
  import("../../components/HelpAndSupport/HelpAndSupport")
);

export const NotificationsPage = lazy(() =>
  import("../../components/Notifications/Notifications")
);

export const SubmitFeedbackPage = lazy(() =>
  import("../../components/MyMeeting/SubmitFeedback")
);

export const ChatPage = lazy(() =>
  import("../../components/Chats/Chat")
);

export const EditProfilePage = lazy(() =>
  import("../../components/EditProfile/EditProfile")
);

export const ViewMemberProfilePage = lazy(() =>
  import("../../components/MyMeeting/ProfileDetails/ProfileLayout")
);