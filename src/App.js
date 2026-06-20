import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import CompanyRegistration from './components/OnBoarding/CompanyRegistration/CompanyRegistration';
import Login from './components/OnBoarding/Login/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SwitchCompany from './components/OnBoarding/SwitchCompany.jsx/SwitchCompany';
import ForgotPassword from './components/OnBoarding/ForgotPassword/ForgotPassword';
import ResetPassword from './components/OnBoarding/ResetPassword/ResetPassword';
import OtpVerify from './components/OnBoarding/OtpVefify/OtpVerify';
import FingerPrintLogin from './components/OnBoarding/FingerPrintLogin/FingerPrintLogin';
import SetUp from './components/OnBoarding/SetUp/SetUp';
import Dashboard from './components/Dashboard/Dashboard';
import MyMeeting from './components/MyMeeting/MyMeeting';
import EditProfile from './components/EditProfile/EditProfile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Notifications from './components/Notifications/Notifications';
import Chats from './components/Chats/Chats';
import MeetingScheduleList from './components/MyMeeting/MeetingScheduleList';
import MeetingWorkspace from './components/MyMeeting/MeetingWorkspace';
import CircularResolution from './components/CircularResolution/CircularResolution';
import DraftMinutes from './components/DraftMinutes/DraftMinutes';
import FinalMinutes from './components/FinalMinutes/FinalMinutes';
import Resources from './components/Resources/Resources';
import BoardEvaluation from './components/Evaluations/BoardEvaluation';
import FinalMeetingMinutes from './components/Evaluations/FinalMeetingMinutes';
import SearchReport from './components/SearchReport/SearchReport';
import AboutCompany from './components/AboutCompany/AboutCompany';
import HelpAndSupport from './components/HelpAndSupport/HelpAndSupport';
import Disclosure from './components/Disclosure/Disclosure';
import ViewResults from './components/CircularResolution/ViewResults';
import BoardBook from './components/MyMeeting/BoardBook';
import CompareDocuments from './components/FinalMinutes/CompareDocuments';
import ResolutionDoc from './components/CircularResolution/ResolutionDoc';
import JoinCall from './components/MyMeeting/JoinCall';
import ProfileLayout from './components/MyMeeting/ProfileDetails/ProfileLayout';
import SubmitFeedback from './components/MyMeeting/SubmitFeedback';
import ViewDraftDocument from './components/DraftMinutes/ViewDraftDocument';
import PdfAgenda from './components/MyMeeting/Agenda/PdfAgenda';
import { DataProvider } from './components/Context/DataContext';
import Agenda from './components/MyMeeting/Agenda/Agenda';
import Members from './components/MyMeeting/Members';
import Minutes from './components/MyMeeting/Minutes';
import MyDocuments from './components/Resources/MyDocuments';
import Requests from './components/MyMeeting/Requests';
import ImportantDocuments from './components/MyMeeting/ImportantDocuments';

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          {/* <DataProvider> */}

          <Routes>
            <Route path="/" element={<CompanyRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/switch-company" element={<SwitchCompany />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp-verify" element={<OtpVerify />} />
            <Route path="/fingerprint-login" element={<FingerPrintLogin />} />
            <Route path="/set-up" element={<SetUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-meeting" element={<MyMeeting />} />
            <Route path="/meeting-schedules" element={<MeetingScheduleList />} />
            <Route path="/meeting-workspace" element={<MeetingWorkspace />}>
              <Route index element={<Navigate to="agenda" />} />
              <Route path="agenda" element={<Agenda />} />
              <Route path="members" element={<Members />} />
              <Route path="minutes" element={<Minutes />} />
              <Route path="documents" element={<ImportantDocuments />} />
              <Route path="requests" element={<Requests />} />
            </Route>
            <Route path="/agenda-pdf" element={<PdfAgenda />} />
            <Route path="/join-call" element={<JoinCall />} />
            <Route path="/board-book" element={<BoardBook />} />
            <Route path="/resolution-document" element={<ResolutionDoc />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/circular-resolution" element={<CircularResolution />} />
            <Route path="/view-results" element={<ViewResults />} />
            <Route path="/draft-minutes" element={<DraftMinutes />} />
            <Route path="/final-minutes" element={<FinalMinutes />} />
            <Route path="/compare-documents" element={<CompareDocuments />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/board-evaluation" element={<BoardEvaluation />} />
            <Route path="/final-meeting-minutes" element={<FinalMeetingMinutes />} />
            <Route path="/submit-feedback" element={<SubmitFeedback />} />
            <Route path="/view-draft-document" element={<ViewDraftDocument />} />
            <Route path="/search-report" element={<SearchReport />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/support" element={<HelpAndSupport />} />
            <Route path="/view-member-profile" element={<ProfileLayout />} />
            {/* <Route path="/dashboard" element={<FingerPrintLogin />} /> */}
          </Routes>

          {/* </DataProvider> */}
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
