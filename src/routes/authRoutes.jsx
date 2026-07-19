import { Navigate, Route } from "react-router-dom";
import {
  CompanyRegistrationPage,
  FingerPrintLoginPage,
  ForgotPasswordPage,
  LoginPage,
  OnBoardingLayoutPage,
  OtpVerifyPage,
  ResetPasswordPage,
  SwitchCompanyPage,
} from "../pages/auth";

export const authRoutes = (
  <Route path="/" element={<OnBoardingLayoutPage />}>
    <Route index element={<Navigate to="company-registration" />} />
    <Route path="company-registration" element={<CompanyRegistrationPage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="switch-company" element={<SwitchCompanyPage />} />
    <Route path="forgot-password" element={<ForgotPasswordPage />} />
    <Route path="reset-password" element={<ResetPasswordPage />} />
    <Route path="otp-verify" element={<OtpVerifyPage />} />
    <Route path="fingerprint-login" element={<FingerPrintLoginPage />} />
  </Route>
);
