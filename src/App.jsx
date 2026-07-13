import React, { lazy, Suspense } from "react";
import logo from "../logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OnBoardingLayout from "./components/OnBoarding/OnBoardingLayout";
import Login from "./components/OnBoarding/Login/Login";
const CompanyRegistration = lazy(() =>import("./components/OnBoarding/CompanyRegistration/CompanyRegistration"));
import SwitchCompany from "./components/OnBoarding/SwitchCompany.jsx/SwitchCompany";
import ForgotPassword from "./components/OnBoarding/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/OnBoarding/ResetPassword/ResetPassword";
import OtpVerify from "./components/OnBoarding/OtpVefify/OtpVerify";
import FingerPrintLogin from "./components/OnBoarding/FingerPrintLogin/FingerPrintLogin";
// import SetUpLayout from "./components/OnBoarding/SetUp/SetUpLayout";
// import SelectLanguage from "./components/OnBoarding/SetUp/SelectLanguage";
// import TimeZone from "./components/OnBoarding/SetUp/TimeZone";
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
// import MyMeeting from './components/MyMeeting/MyMeeting';
import EditProfile from "./components/EditProfile/EditProfile";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Notifications from "./components/Notifications/Notifications";
import Chat from "./components/Chats/Chat";
const MeetingScheduleList = lazy(() => import("./components/MyMeeting/MeetingScheduleList"));
const DraftMinutes = lazy(() => import("./components/DraftMinutes/DraftMinutes"));
const FinalMinutesList = lazy(() => import("./components/FinalMinutes/FinalMinutesList"));
const Resources = lazy(() => import("./components/Resources/Resources"));
const BoardEvaluationList = lazy(() => import("./components/Evaluations/BoardEvaluationList"));
const BoardEvaluationDetails = lazy(() => import("./components/Evaluations/BoardEvaluationDetails"));
const SearchReport = lazy(() => import("./components/SearchReport/SearchReport"));
const AboutCompany = lazy(() => import("./components/AboutCompany/AboutCompany"));
const HelpAndSupport = lazy(() => import("./components/HelpAndSupport/HelpAndSupport"));
const Disclosure = lazy(() => import("./components/Disclosure/Disclosure"));
const BoardBook = lazy(() => import("./components/MyMeeting/BoardBook"));
const CompareDocuments = lazy(() => import("./components/FinalMinutes/CompareDocuments"));
const ResolutionDoc = lazy(() => import("./components/CircularResolution/ResolutionDoc"));
const JoinCall = lazy(() => import("./components/MyMeeting/JoinCall"));
import ProfileLayout from "./components/MyMeeting/ProfileDetails/ProfileLayout";
import SubmitFeedback from "./components/MyMeeting/SubmitFeedback";
const PdfAgenda = lazy(()=>import("./components/MyMeeting/Agenda/PdfAgenda"))
const Agenda = lazy(()=>import("./components/MyMeeting/Agenda/Agenda"));
const Members = lazy(()=>import("./components/MyMeeting/Members"));
const Minutes = lazy(() => import("./components/MyMeeting/Minutes"));
const MyDocuments = lazy(() => import("./components/Resources/MyDocuments"));
const Requests = lazy(() => import("./components/MyMeeting/Requests"));
const ImportantDocuments = lazy(() =>import("./components/MyMeeting/ImportantDocuments"));
import HomeLayout from "./components/Dashboard/HomeLayout";
const MyMeetingsList = lazy(()=> import("./components/MyMeeting/MyMeetingsList"));
const MeetingDetails = lazy(()=>import("./components/MyMeeting/MeetingWorkspace"));
const EditDraftDocument = lazy(()=>import("./components/DraftMinutes/EditDraftDocument"));
const ViewFinalMinute = lazy(()=>import("./components/FinalMinutes/ViewFinalMinute"))
const CircularResolutionResult = lazy(()=>import("./components/CircularResolution/CircularResolutionResult"));
const CircularResolutionList = lazy(()=>import("./components/CircularResolution/CircularResolutionList"));
import OnboardingHeader from "./components/OnBoarding/OnboardingHeader";
// const ReviewProfile = lazy(()=>import("./components/OnBoarding/SetUp/ReviewProfile"))
import AddCompanies from "./components/AddCompanies";
import { MdLineAxis } from "react-icons/md";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <DataProvider> */}

        <Routes>
          <Route path="/" element={<OnBoardingLayout />}>
            <Route index element={<Navigate to="company-registration" />} />
            <Route
              path="company-registration"
              element={<CompanyRegistration />}
            />
            <Route path="login" element={<Login />} />
            <Route path="switch-company" element={<SwitchCompany />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="otp-verify" element={<OtpVerify />} />
            <Route path="fingerprint-login" element={<FingerPrintLogin />} />

            <Route path="change-password" element={<ChangePassword />} />
          </Route>
          <Route path="home" element={<HomeLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="my-meetings-list" element={<MyMeetingsList/>} />
            <Route path="meeting-details/:id" element={<MeetingDetails/>}>
              <Route index element={<Navigate to="agenda" replace />} />
              <Route path="agenda" element={<Agenda/>} />
              <Route path="members" element={<Members/>} />
              <Route path="minutes" element={<Minutes/>} />
              <Route path="documents" element={<MyDocuments/>} />
              <Route path="requests" element={<Requests />} />
            </Route>
            <Route path="circular-resolutions" element={<CircularResolutionList />}/>
            <Route path="circular-resolution-result/:id" element={<CircularResolutionResult />}/>
            <Route path="draft-minutes" element={<DraftMinutes />} />
            <Route path="edit-draft-document/:id" element={<EditDraftDocument />}/>
            <Route
              path="compare-documents/:id"
              element={<CompareDocuments />}
            />
            <Route path="final-minutes-list" element={<FinalMinutesList />} />
            <Route
              path="final-minute-details/:id"
              element={<ViewFinalMinute />}
            />
            <Route
              path="board-evaluation-details/:id"
              element={<BoardEvaluationDetails />}
            />
            <Route path="resources" element={<Resources />} />
            <Route
              path="board-evaluation-list"
              element={<BoardEvaluationList />}
            />
            <Route path="search-report" element={<SearchReport/>} />
            <Route path="about" element={<AboutCompany/>} />
            <Route path="disclosure" element={<Disclosure/>} />
            <Route path="join-call" element={<JoinCall />} />
            <Route path="agenda-pdf" element={<PdfAgenda />} />
            <Route path="board-book" element={<BoardBook />} />
            <Route path="resolution-document" element={<ResolutionDoc />} />
            <Route path="meeting-schedules" element={<MeetingScheduleList />} />
            <Route path="support" element={<HelpAndSupport />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="chat" element={<Chat />} />
          </Route>

          {/* <Route path="set-up" element={<SetUpLayout />}>
            <Route index element={<Navigate to="review-profile" replace />} />
            <Route path="review-profile" element={<ReviewProfile />} />
            <Route path="language" element={<SelectLanguage />} />
            <Route path="timezone" element={<TimeZone />} />
          </Route> */}

          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="submit-feedback" element={<SubmitFeedback />} />
          <Route path="view-member-profile" element={<ProfileLayout />} />
          {/* <Route path="add-company" element={<AddCompanies />} /> */}

          {/* <Route path="/dashboard" element={<FingerPrintLogin />} /> */}
        </Routes>

        {/* </DataProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
