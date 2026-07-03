import React, { Suspense } from 'react';
import logo from '../logo.svg'
import './App.css';
import CompanyRegistration from './components/OnBoarding/CompanyRegistration/CompanyRegistration';
import Login from './components/OnBoarding/Login/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SwitchCompany from './components/OnBoarding/SwitchCompany.jsx/SwitchCompany';
import ForgotPassword from './components/OnBoarding/ForgotPassword/ForgotPassword';
import ResetPassword from './components/OnBoarding/ResetPassword/ResetPassword';
import OtpVerify from './components/OnBoarding/OtpVefify/OtpVerify';
import FingerPrintLogin from './components/OnBoarding/FingerPrintLogin/FingerPrintLogin';
import SetUpLayout from './components/OnBoarding/SetUp/SetUpLayout';
import SelectLanguage from './components/OnBoarding/SetUp/SelectLanguage';
import TimeZone from './components/OnBoarding/SetUp/TimeZone';
import Dashboard from './components/Dashboard/Dashboard';
// import MyMeeting from './components/MyMeeting/MyMeeting';
import EditProfile from './components/EditProfile/EditProfile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Notifications from './components/Notifications/Notifications';
import Chat from './components/Chats/Chat';
import MeetingScheduleList from './components/MyMeeting/MeetingScheduleList';
import DraftMinutes from './components/DraftMinutes/DraftMinutes';
import FinalMinutesList from './components/FinalMinutes/FinalMinutesList';
import Resources from './components/Resources/Resources';
import BoardEvaluationList from './components/Evaluations/BoardEvaluationList';
import BoardEvaluationDetails from './components/Evaluations/BoardEvaluationDetails';
import SearchReport from './components/SearchReport/SearchReport';
import AboutCompany from './components/AboutCompany/AboutCompany';
import HelpAndSupport from './components/HelpAndSupport/HelpAndSupport';
import Disclosure from './components/Disclosure/Disclosure';
import BoardBook from './components/MyMeeting/BoardBook';
import CompareDocuments from './components/FinalMinutes/CompareDocuments';
import ResolutionDoc from './components/CircularResolution/ResolutionDoc';
import JoinCall from './components/MyMeeting/JoinCall';
import ProfileLayout from './components/MyMeeting/ProfileDetails/ProfileLayout';
import SubmitFeedback from './components/MyMeeting/SubmitFeedback';
import PdfAgenda from './components/MyMeeting/Agenda/PdfAgenda';
import { DataProvider } from './components/Context/DataContext';
import Agenda from './components/MyMeeting/Agenda/Agenda';
import Members from './components/MyMeeting/Members';
import Minutes from './components/MyMeeting/Minutes';
import MyDocuments from './components/Resources/MyDocuments';
import Requests from './components/MyMeeting/Requests';
import ImportantDocuments from './components/MyMeeting/ImportantDocuments';
import HomeLayout from './components/Dashboard/HomeLayout';
import MyMeetingsList from './components/MyMeeting/MyMeetingsList';
import MeetingDetails from './components/MyMeeting/MeetingWorkspace';
import EditDraftDocument from './components/DraftMinutes/EditDraftDocument';
import ViewFinalMinute from './components/FinalMinutes/ViewFinalMinute';
import CircularResolutionResult from './components/CircularResolution/CircularResolutionResult';
import CircularResolutionList from './components/CircularResolution/CircularResolutionList';
import OnBoardingLayout from './components/OnBoarding/ForgotPassword/OnBoardingLayout';
import ReviewProfile from './components/OnBoarding/SetUp/ReviewProfile';

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          {/* <DataProvider> */}

          <Routes>
            <Route path="/" element={<OnBoardingLayout />} >
              <Route index element={<Navigate to="company-registration" />} />
              <Route path="company-registration" element={<CompanyRegistration /> } />
              <Route path="login" element={<Login />} />
              <Route path="switch-company" element={<SwitchCompany />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="otp-verify" element={<OtpVerify />} />
              <Route path="fingerprint-login" element={<FingerPrintLogin />} />

              <Route path="change-password" element={<ChangePassword />} />
            </Route >
            <Route path='home' element={<HomeLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="my-meetings-list" element={<MyMeetingsList />} />
              <Route path="meeting-details/:id" element={<MeetingDetails />}>
                <Route index element={<Navigate to="agenda" replace />} />
                <Route path="agenda" element={<Agenda />} />
                <Route path="members" element={<Members />} />
                <Route path="minutes" element={<Minutes />} />
                <Route path="documents" element={<ImportantDocuments />} />
                <Route path="requests" element={<Requests />} />
              </Route>
              <Route path="circular-resolutions" element={<CircularResolutionList />} />
              <Route path="circular-resolution-result/:id" element={<CircularResolutionResult />} />
              <Route path="draft-minutes" element={<DraftMinutes />} />
              <Route path="edit-draft-document/:id" element={<EditDraftDocument />} />
              <Route path="compare-documents/:id" element={<CompareDocuments />} />
              <Route path="final-minutes-list" element={<FinalMinutesList />} />
              <Route path="final-minute-details/:id" element={<ViewFinalMinute />} />
              <Route path="board-evaluation-details/:id" element={<BoardEvaluationDetails />} />
              <Route path="resources" element={<Resources />} />
              <Route path="board-evaluation-list" element={<BoardEvaluationList />} />
              <Route path="search-report" element={<SearchReport />} />
              <Route path="about" element={<AboutCompany />} />
              <Route path="disclosure" element={<Disclosure />} />
              <Route path="join-call" element={<JoinCall />} />
              <Route path="agenda-pdf" element={<PdfAgenda />} />
              <Route path="board-book" element={<BoardBook />} />
              <Route path="resolution-document" element={<ResolutionDoc />} />
              <Route path="meeting-schedules" element={<MeetingScheduleList />} />
              <Route path="support" element={<HelpAndSupport />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="chat" element={<Chat />} />
            </Route>


            <Route path="set-up" element={<SetUpLayout />}>
              <Route index element={<Navigate to="review-profile" replace />} />
              <Route path="review-profile" element={<ReviewProfile />} />
              <Route path="language" element={<SelectLanguage />} />
              <Route path="timezone" element={<TimeZone />} />
            </Route>

            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="submit-feedback" element={<SubmitFeedback />} />
            <Route path="view-member-profile" element={<ProfileLayout />} />
            {/* <Route path="/dashboard" element={<FingerPrintLogin />} /> */}
          </Routes>

          {/* </DataProvider> */}
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
