import React, { useState, createContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [globalLoader, setGlobalLoader] = useState(false)
  const [homeCompanyDetails, setHomeCompanyDetails] = useState({});
  const [locales, setLocales] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const [sidemenu, setSidemenu] = useState(true);
  const [attatchModal, setAttachModal] = useState(false);
  const [allCompaniesList, setAllCompaniesList] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  // const [userProfile, setUserProfile] = useState({});
  const [activeCompany, setActiveCompany] = useState({});
  const [numberError, setNumberError] = useState("");
  const [nameError, setNameError] = useState("");
  const [bioError, setBioError] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isFiltersModal, setIsFilterModal] = useState(false);
  const [isReset, setReset] = useState(false); //state to show reset password component
  const [isOtp, setIsOtp] = useState(false); //state to show otp component
  const [passwordPolicy, setPasswordPolicy] = useState([]);
  const [enteredCompany, setEnteredCompany] = useState({});
  const [companyError, setComapnyError] = useState(""); //state to show error in wrong company input
  const [language, setLanguage] = useState("");
  const [timezone, setTimezone] = useState("");
  const [dashboardData, setDashboardData] = useState({});
  const [calendarData, setCalendarData] = useState({});
  const [buttonDisabledonApi, setButtonDisabledonApi] = useState(false);
  const [isErrorModal, setErrorModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [companyStructure, setCompanyStructure] = useState({})
  const [comapanyNews, setCompanyNews] = useState({})
  const [companyComposition, setCompanyComposition] = useState({});
  const [myDocs, setMyDocs] = useState({});
  const [compDocs, setCompDocs] = useState({});
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [userProfile, setUserProfile] = useState({
    UserName: "",
    LoginId: "",
    userMobile: "",
    Bio: "",
    UserImage: "",
  });
  const navigate = useNavigate();
  const BASE_URL = "https://board-home.pro-cs.in/api/";
  const BASE_URL2 = "https://bms.pro-cs.in/api/";
  const BASE_URL_LANGUAGE = "https://bms.pro-cs.in/";
  let token = localStorage.getItem("token") || null;
  const company =
    JSON.parse(localStorage.getItem("activeCompany"))?.COMPANY_KEY || null;
  let proff =
    localStorage.getItem("userProfile") !== null &&
    JSON.parse(localStorage.getItem("userProfile"));
  const id = proff?.LoginId;
  // home company api
  const homeCompanyApi = () => {
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    fetch(BASE_URL + "Company/HomeCompany", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.StatusFl) {
          setHomeCompanyDetails(result);
        } else {
          toast.error(t("toasts.genError"))
        }
      })
      .catch((err) => console.log(err));
  };
  // company identifier api
  const companyIdentifierApi = async (companyId) => {
    setButtonDisabledonApi(true);
    try {
      const response = await fetch(
        BASE_URL + "Company/CompanyIdentifier?COMPANY_KEY=" + companyId,
        {
          method: "POST",
          redirect: "follow",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (
        allCompaniesList.some((item) => item.COMPANY_KEY === result.COMPANY_KEY)
      ) {
        // toast.error("Company already exists", {
        //   position: toast.POSITION.TOP_CENTER_CENTER,
        // });
        setErrorModal(true);
      } else if (result.Msg === "No Data Found !") {
        setComapnyError(true);
        // toast.error(t("compReg.invalidCompanyCode"));
      } else {
        setErrorModal(false);
        toast.success(t("compReg.success"));
        setEnteredCompany(result);
        const updatedList = [...allCompaniesList, result];
        setAllCompaniesList(updatedList);
        localStorage.setItem("allCompaniesList", JSON.stringify(updatedList));
        setButtonDisabledonApi(false);
        navigate("/switch-company");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setButtonDisabledonApi(false);
  };
  const getProfileApi = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token", token);
    var raw = JSON.stringify({
      LoginId: id || userDetails?.LoginId,
      CompanyCode: company,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(BASE_URL2 + `Login/GetProfile`, requestOptions)
      .then((response) => response.json())
      // .then((result) => {
      //   if (result.StatusFl) {
      //     if (window.location.pathname === "/user/edit-profile") {
      //       console.log("details Updated");
      //     } else if (window.location.pathname !== "/user/edit-profile") {
      //       if (result.UserName !== "" && localStorage.getItem("token") !== null) {
      //         toast.success("Logged in successfully")
      //         navigate("/user/dashboard");
      //       } else if (result.UserName === "" && localStorage.getItem("token") !== null) {
      //         toast.success("Logged in successfully")
      //         navigate("/user/set-up");
      //       }
      //     }
      //     setUserProfile(result);
      //     localStorage.setItem("userProfile", JSON.stringify(result));
      //   } else {
      //     toast.error(result.Msg);
      //   }
      // })

      .then((result) => {
        if (result.StatusFl) {
          if (window.location.pathname === "/user/edit-profile") {
            console.log("details Updated");
          } else if (window.location.pathname !== "/user/edit-profile") {
            if (result.UserName !== "" && localStorage.getItem("token") !== null) {
              // toast.success("Logged in successfully")
              navigate("/user/dashboard");
            } else if (result.UserName === "" && localStorage.getItem("token") !== null) {
              navigate("/user/set-up");
              // toast.success("Logged in successfully")
            }
          }
          setUserProfile(result);
          localStorage.setItem("userProfile", JSON.stringify(result));
        } else {
          toast.error(result.Msg);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // login api
  // login api
  const login = async (id, pwd, company) => {
    setLoading(true)
    try {
      const headers = new Headers();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        LoginId: id,
        Password: pwd,
        CompanyCode: company,
      });

      const requestOptions = {
        method: "POST",
        headers: headers,
        body: raw,
      };

      const response = await fetch(BASE_URL2 + "Login/Login", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.StatusFl) {
        localStorage.setItem("token", result.Token);
        toast.success(t("toasts.loginSucc"))
        setUserDetails(result);
      } else {
        setErrorModal(true);
      }
      // setTimeout(() => { getProfileApi(); }, 1000)
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false)
  };

  // forgot password api
  const forgotPasswordApi = (email) => {
    var header = new Headers();
    header.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      Email: email,
      CompanyCode: company,
    });
    var requestOptions = {
      method: "POST",
      headers: header,
      body: raw,
      redirect: "follow",
    };
    fetch(BASE_URL2 + "Login/SubimtEmail", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.StatusFl) {
          console.warn(result.Msg);
        } else {
          toast.error(result.Msg);
        }
      })
      .catch((err) => console.log(err));
  };

  // resend otp api
  const resendOtpApi = (email) => {
    var header = new Headers();
    header.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      Email: email,
      CompanyCode: company,
    });
    var requestOptions = {
      method: "POST",
      headers: header,
      body: raw,
      redirect: "follow",
    };
    fetch(BASE_URL2 + "Login/RegenrateOTP", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.StatusFl) {
          toast.success(t("toasts.otpSucc"))
        } else {
          toast.error(result.Msg);
        }
      })
      .catch((err) => console.log(err));
  };
  // submit otp api
  const submitOtpApi = (otp, email) => {
    var header = new Headers();
    header.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      otp: otp,
      CompanyCode: company,
      UserEmail: email,
    });
    var requestOptions = {
      method: "POST",
      headers: header,
      body: raw,
      redirect: "follow",
    };
    fetch(BASE_URL2 + "Login/ValidateOtp", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.StatusFl) {
          toast.success(t("toasts.otpVerified"))
          setIsOtp(false);
          setReset(true);
          setPasswordPolicy(result.lstpolicy);
        } else {
          toast.error(result.Msg);
        }
      })
      .catch((err) => console.log(err));
  };

  const resetPasswordApi = (password, email) => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      Password: password,
      CompanyCode: company,
      UserEmail: email,
    });
    var requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
      body: raw,
    };
    fetch(BASE_URL2 + "Login/UpdatePassword", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.StatusFl) {
          toast.success(t("toasts.passResetSucc"))
          navigate(`/login/${activeCompany.COMPANY_NAME}`);
        } else {
          toast.error(result.Msg);
        }
      })
      .catch((err) => console.log(err));
  };

  // update profile api
  const updateProfileDataApi = async (setStep = null) => {
    const formData = new FormData();
    formData.append("UserName", userProfile.UserName);
    formData.append("LoginId", userProfile.LoginId);
    formData.append("UserMobile", userProfile.userMobile);
    formData.append("UserProfile", userProfile.Bio);
    formData.append("CompanyCode", company);
    formData.append("UploadAvatar", userProfile.UserImage);

    try {
      const response = await axios.post(
        BASE_URL2 + "Login/UpadateProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
        }
      );

      const result = response.data;

      if (result?.StatusFl) {
        toast.success(t("toasts.updateProfSucc"))
        if (window.location.pathname === "/user/edit-profile") {
          navigate("/user/dashboard");
        } else {
          setStep((prev) => prev + 1);
        }
      } else {
        toast.error(result.Msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // language and timezone api
  const languageTimezoneApi = (language, timezone) => {
    var header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("token", token);
    var raw = JSON.stringify({
      Language: language,
      TIMEZONE: timezone,
      LoginId: userProfile.LoginId,
      CompanyCode: company,
    });
    var requestOptions = {
      method: "POST",
      headers: header,
      body: raw,
      redirect: "follow",
    };
    fetch(BASE_URL_LANGUAGE + "LanguageTimezonePrefrence", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result?.StatusFl) {
          toast.success(t("toasts.updatePrefSucc"))
          if (document.referrer.endsWith("/user/edit-profile")) {
          } else {
            if (window.location.pathname !== "/user/edit-profile") {
              navigate("/user/dashboard");
            }
          }
        } else toast.error(result.Msg);
      })
      .catch((err) => console.log(err));
  };

  // get all dashboard details api
  const getDashboardDataApi = () => {
    var header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("token", token);
    var requestOptions = {
      method: "POST",
      headers: header,
      redirect: "follow",
    };
    fetch(
      `${BASE_URL2}Login/Dashboard?LoginId=${id}&CompanyCode=${company}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.StatusFl) {
          setDashboardData(result);
        } else {
          toast.error(t("toasts.genError"))
        }
      })
      .catch((err) => console.log(err));
  };

  const getEventsCalendarApi = () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("token", token);
    var requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
    };
    fetch(
      `${BASE_URL_LANGUAGE}api/Login/DashboardEventListDateWise/?CompanyCode=${company}&LoginId=${id}&CalenderDate=${2023 / 12 / 18
      }`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.StatusFl) {
          setCalendarData(result);
        } else {
          toast.error("Could not fetch Data");
        }
      })
      .catch((err) => console.log(err));
  };

  // get committee structure 
  const getCompanyStructure = () => {
    let headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append("token", token);
    var requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
    };

    fetch(`${BASE_URL2}Login/CompanyStructure?CompanyCode=${company}&LoginId=${id}`, requestOptions)
      .then(res => res.json())
      .then((result) => {
        if (result.StatusFl) {
          setCompanyStructure(result)
        }
        else console.log(result.Msg)
      })
      .catch(err => console.log(err))
  }

  // get company news 
  const getCompanyNewsApi = () => {
    let headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append("token", token);
    var requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
    };

    fetch(`${BASE_URL2}Login/CompanyNews?CompanyCode=${company}&LoginId=${id}`, requestOptions)
      .then(res => res.json())
      .then((result) => {
        if (result.StatusFl) {
          setCompanyNews(result)
        }
        else console.log(result.Msg)
      })
      .catch(err => console.log(err))
  }

  const getCompanyCompositionApi = () => {
    let headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append("token", token);
    var requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
    };

    fetch(`${BASE_URL2}Login/CommitteeComposition?CompanyCode=${company}&LoginId=${id}`, requestOptions)
      .then(res => res.json())
      .then((result) => {
        if (result.StatusFl) {
          setCompanyComposition(result)
        }
        else console.log(result.Msg)
      })
      .catch(err => console.log(err))
  }
  const getMyDocsListApi = () => {
    setGlobalLoader(true);

    axios.post(BASE_URL2 + 'Resource/GetMyDocTypeList', {}, {
      headers: { token: token }
    })
      .then((response) => {
        console.log(response, "docc");
        setMyDocs(response.data);
        setGlobalLoader(false);
      })
      .catch(error => {
        console.log(error);  // Fix the typo here
        setGlobalLoader(false);
      });
  };

  const getCompDocsListApi = () => {
    setGlobalLoader(true);

    axios.post(BASE_URL2 + 'Resource/GetCompanyDocTypeList', {}, {
      headers: { token: token }
    })
      .then((response) => {
        console.log(response, "docc");
        setCompDocs(response.data);
        setGlobalLoader(false);
      })
      .catch(error => {
        console.log(error);  // Fix the typo here
        setGlobalLoader(false);
      });
  };

  const deleteMyDocApi = (docID) => {
    setGlobalLoader(true);

    axios.post(`${BASE_URL2}Resource/DeleteMyDocById?Id=${docID}`, {}, {
      headers: { token: token }
    }).then((response) => {
      console.log(response, "docc");
      getMyDocsListApi()
      setGlobalLoader(false);
      toast.success("Deleted successfully");
    })
      .catch(error => {
        console.log(error);  // Fix the typo here
        setGlobalLoader(false);
      });
  };


  // logout
  const handleLogout = () => {
    navigate(`/login/${activeCompany?.COMPANY_NAME}`);
  };

  useEffect(() => {

    const storedAllCompaniesList = localStorage.getItem("allCompaniesList");
    if (storedAllCompaniesList) {
      setAllCompaniesList(JSON.parse(storedAllCompaniesList));
    }
  }, []);
  useEffect(() => {
    // Check if userDetails has been updated
    if (
      Object.keys(userDetails).length > 0 &&
      window.location.pathname !== "/user/edit-profile"
    ) {
      // Call getProfileApi
      getProfileApi();
    }
  }, [userDetails]);

  return (
    <DataContext.Provider
      value={{
        isMobile,
        sidemenu,
        setSidemenu,
        isFiltersModal,
        setIsFilterModal,
        attatchModal,
        setAttachModal,
        userProfile,
        profileImage,
        setUserProfile,
        setProfileImage,
        btnDisable,
        setBtnDisable,
        numberError,
        setNumberError,
        nameError,
        setNameError,
        bioError,
        setBioError,
        companyIdentifierApi,
        userDetails,
        login,
        allCompaniesList,
        activeCompany,
        setActiveCompany,
        locales,
        setLocales,
        getProfileApi,
        userProfile,
        setUserProfile,
        setAllCompaniesList,
        forgotPasswordApi,
        submitOtpApi,
        resendOtpApi,
        isReset,
        setReset,
        isOtp,
        setIsOtp,
        homeCompanyApi,
        homeCompanyDetails,
        passwordPolicy,
        setPasswordPolicy,
        languageTimezoneApi,
        updateProfileDataApi,
        userDetails,
        setUserDetails,
        resetPasswordApi,
        companyError,
        setComapnyError,
        language,
        setLanguage,
        timezone,
        setTimezone,
        dashboardData,
        setDashboardData,
        getDashboardDataApi,
        handleLogout,
        getEventsCalendarApi,
        calendarData,
        setCalendarData,
        buttonDisabledonApi,
        setButtonDisabledonApi,
        isErrorModal,
        setErrorModal,
        isLoading,
        getCompanyStructure,
        companyStructure, setCompanyStructure,
        comapanyNews, setCompanyNews,
        getCompanyNewsApi,
        getCompanyCompositionApi,
        companyComposition, setCompanyComposition,
        getMyDocsListApi,
        myDocs, setMyDocs,
        globalLoader,
        deleteMyDocApi,
        getCompDocsListApi,
        compDocs, setCompDocs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
