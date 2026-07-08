import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import divider from "../../../Assets/divider.png";
import dividerComplete from "../../../Assets/dividerComplete.png";
import Button from "../../ui/Button";
import FooterText from "../../FooterText/FooterText";

const stepperStyles = `
  .stepper {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .step-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* divider between steps */
  .stepper::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    right: 9%;
    top: 28px;
    border: 1px dotted #dce0e5;
    border-style: dashed;
  }


`;

const steps = [
  { path: "review-profile", label: "Review Profile" },
  { path: "language", label: "Language" },
  { path: "timezone", label: "Time Zone" },
];

const SetUpLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    bio: "",
    language: "",
    timezone: "",
  });
  const [error, setError] = useState({});
  const [profileImage, setProfileImage] = useState(null); // Initialize as null
  const validate = (data) => {
    const e = {};
    if (formData.name.trim() === "") {
      e.name = "Name is mandatory";
    }
    if (!formData.number) {
      e.number = "Phone number is required";
    } else if (!/^\d+$/.test(formData.number)) {
      e.number = "Phone number must contain only digits";
    } else if (formData.number.length !== 10) {
      e.number = "Phone number must be 10 digits";
    }

    if (formData.bio.trim().length < 10) {
      e.bio = "Enter about yourself";
    }
    if (!formData.profile_image) {
      e.profile = "set a profile photo please";
    }

    return e;
  };
  const fileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Ensure a file is selected
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    console.log(value, "inevent");
    const newData = { ...formData, [e.target.name]: value };
    const err = validate(newData);
    setFormData(newData);
    if (Object.keys(err).length) {
      setError(err);
    } else {
      setError(() => ({ ...error, [e.target.name]: "" }));
    }
  };

  const currentIndex = Math.max(
    0,
    steps.findIndex((s) => location.pathname.endsWith(`/set-up/${s.path}`)),
  );
  const currentStep = currentIndex + 1;

  const nextButtonClick = () => {
    if (currentIndex === steps.length - 1) {
      setComplete(true);
      navigate("/home");
      return;
    }
    navigate(`/set-up/${steps[currentIndex + 1].path}`);
  };

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(`/set-up/${steps[currentIndex - 1].path}`);
      return;
    }
    navigate("/login");
  };
  const stepClasses = {
    active: "border-2 bg-white border-primary text-foreground",
    completed: "bg-success text-inverse",
    inactive: "bg-white",
  };

  return (
    <>
      <style>{stepperStyles}</style>

      <div className="topbar px-6 py-1.5 flex w-full place-items-center">
        <p
          onClick={goBack}
          className="text-primary cursor-pointer justify-self-start inline-block font-semibold text-md"
        >
          Back
        </p>
        <p className="text-center text-foreground w-full font-medium text-[clamp(1rem,_3vw,_1.25rem)] justify-self-start">
          {steps[currentIndex]?.label}
        </p>
      </div>

      <div className="flex flex-col h-[calc(90vh)]">
        <div className="flex justify-center">
          <div className="flex justify-between mobile:w-72 sm:w-96 md:w-[40rem] mx-auto my-6 stepper">
            {steps.map((step, i) => {
              const isActive = currentIndex === i;
              const isComplete = i < currentIndex || complete;

              return (
                <div
                  key={step.path}
                  className={`step-item ${isActive ? "" : ""} ${isComplete ? "" : ""}`}
                >
                  <div
                    className={`
                    step
                    border-border
                    flex items-center justify-center
                    w-14 h-14
                    rounded-full
                    font-normal
                    z-10
                    border
                     ${
                       currentIndex === i
                         ? stepClasses.active
                         : i < currentIndex
                           ? stepClasses.completed
                           : stepClasses.inactive
                     }
    `}
                  >
                    {isComplete ? (
                      <FaCheck className="text-xl font-medium" />
                    ) : (
                      i + 1
                    )}
                  </div>

                  <p
                    className={`mt-2 text-xs md:text-base ${
                      isActive ? "text-primary font-semibold" : "text-muted font-medium"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:mx-0 mx-4 h-full justify-between items-center">
          <Outlet
            context={{
              formData,
              setFormData,
              handleFormChange,
              error,
              setError,
            }}
          />

          <Button
            variant="primary"
            classNames="md:w-[40vw] mx-4 w-full tracking-widest font-normal px-6 rounded-lg py-4"
            label={currentIndex === steps.length - 1 ? "Finish" : "Next"}
            onClick={nextButtonClick}
          />
        </div>
      </div>

      <div className="absolute w-full text-xs text-placeholder bottom-2 md:bottom-4 text-center">
        <FooterText />
      </div>
    </>
  );
};

export default SetUpLayout;
