import React, { useState } from "react";
import finger from "../../../Assets/fingerpringBig.svg";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import fingerSuccess from "../../../Assets/fingerprintBigSuccess.svg";
import FaceModal from "../FaceModal";

const FingerPrintLogin = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [faceModal, setIsFaceModal] = useState(false);
  return (
    <>
      {faceModal && <FaceModal />}
      <h1 className="text-heading leading-none text-center text-dark font-semibold">
        Login with Fingerprint
      </h1>
      <p className="mt-4 text-center text-light leading-snug text-base font-medium break-words">
        Place your finger over the sensor
      </p>
      <img
        src={!isLoginSuccess ? finger : fingerSuccess}
        className="w-[240px] mt-12 h-auto"
        alt=""
      />
    </>
  );
};

export default FingerPrintLogin;
