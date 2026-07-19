import { Navigate, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import {
  AboutCompanyPage,
  AgendaPage,
  BoardBookPage,
  BoardEvaluationDetailsPage,
  BoardEvaluationListPage,
  ChangePasswordPage,
  ChatPage,
  CircularResolutionListPage,
  CircularResolutionResultPage,
  CompareDocumentsPage,
  DashboardPage,
  DisclosurePage,
  DraftMinutesPage,
  EditDraftDocumentPage,
  EditProfilePage,
  FinalMinutesListPage,
  HelpAndSupportPage,
  HomeLayoutPage,
  JoinCallPage,
  MeetingDetailsPage,
  MeetingScheduleListPage,
  MembersPage,
  MinutesPage,
  MyDocumentsPage,
  MyMeetingsListPage,
  NotificationsPage,
  PdfAgendaPage,
  RequestsPage,
  ResolutionDocPage,
  ResourcesPage,
  SearchReportPage,
  SubmitFeedbackPage,
  ViewFinalMinutePage,
  ViewMemberProfilePage,
} from "../pages/app";

export const appRoutes = (
  <>
    <Route element={<ProtectedRoute />}>
      <Route path="home" element={<HomeLayoutPage />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="change-password" element={<ChangePasswordPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="my-meetings-list" element={<MyMeetingsListPage />} />
        <Route path="meeting-details/:id" element={<MeetingDetailsPage />}>
          <Route index element={<Navigate to="agenda" replace />} />
          <Route path="agenda" element={<AgendaPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="minutes" element={<MinutesPage />} />
          <Route path="documents" element={<MyDocumentsPage />} />
          <Route path="requests" element={<RequestsPage />} />
        </Route>
        <Route
          path="circular-resolutions"
          element={<CircularResolutionListPage />}
        />
        <Route
          path="circular-resolution-result/:id"
          element={<CircularResolutionResultPage />}
        />
        <Route path="draft-minutes" element={<DraftMinutesPage />} />
        <Route
          path="edit-draft-document/:id"
          element={<EditDraftDocumentPage />}
        />
        <Route path="compare-documents/:id" element={<CompareDocumentsPage />} />
        <Route path="final-minutes-list" element={<FinalMinutesListPage />} />
        <Route path="final-minute-details/:id" element={<ViewFinalMinutePage />} />
        <Route
          path="board-evaluation-details/:id"
          element={<BoardEvaluationDetailsPage />}
        />
        <Route path="resources" element={<ResourcesPage />} />
        <Route
          path="board-evaluation-list"
          element={<BoardEvaluationListPage />}
        />
        <Route path="search-report" element={<SearchReportPage />} />
        <Route path="about" element={<AboutCompanyPage />} />
        <Route path="disclosure" element={<DisclosurePage />} />
        <Route path="join-call" element={<JoinCallPage />} />
        <Route path="agenda-pdf" element={<PdfAgendaPage />} />
        <Route path="board-book" element={<BoardBookPage />} />
        <Route path="resolution-document" element={<ResolutionDocPage />} />
        <Route path="meeting-schedules" element={<MeetingScheduleListPage />} />
        <Route path="support" element={<HelpAndSupportPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="submit-feedback" element={<SubmitFeedbackPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="edit-profile" element={<EditProfilePage />} />
      </Route>
    </Route>
    <Route path="view-member-profile" element={<ViewMemberProfilePage />} />
  </>
);
