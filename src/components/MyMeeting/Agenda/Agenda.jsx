import React from "react";
import { BiEditAlt } from "react-icons/bi";
import {
  BsChevronDown,
  BsFileEarmarkText,
  BsFileText,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Agenda = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div onClick={() => navigate("/home/agenda-pdf")} className="rounded-md w-full border border-border p-4 bg-surface hover:border-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full place-items-center">
            <div className="flex items-center gap-3 justify-self-start">
              <div className="bg-primary rounded-md text-2xl flex items-center justify-center w-10 h-10 text-white">
                1
              </div>
              <div>
                <p className="text-body-sm text-secondary">
                  CR/Audit/001/Fy2023-2024
                </p>
                <h1 className="text-primary text-display-md font-display">
                  Record of Attendance (2)
                </h1>
              </div>
            </div>
            <div className="flex justify-self-end text-body-sm text-subtle  items-center gap-4">
              <BiEditAlt className="hover:text-primary" />
              <BsFileEarmarkText className="hover:text-primary" />
              <BsStar className="" fill="#A87C3F" />
              <p className="py-1  px-1 5">Agenda Type</p>
              <p className="py-1 hover:text-primary px-1 5">1/40</p>
              <BsChevronDown />
            </div>
          </div>
          <div className="mt-6 flex flex-col w-full gap-1 text-body-md">
            <div
              className="flex items-center w-full gap-2 cursor-pointer"
              
            >
              <div className="px-1.5 bg-hover-bg">1.1</div>
              <p className="">Anti Corruption Initiatives</p>
            </div>
            <div className="flex items-center w-full gap-2">
              <div className="px-1.5  rounded-sm bg-hover-bg">1.2</div>
              <p className="">Anti Corruption Initiatives</p>
            </div>
          </div>
        </div>

       <div onClick={() => navigate("/home/agenda-pdf")} className="rounded-md w-full border border-border p-4 bg-surface hover:border-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full place-items-center">
            <div className="flex items-center gap-3 justify-self-start">
              <div className="bg-primary rounded-md text-2xl flex items-center justify-center w-10 h-10 text-white">
                1
              </div>
              <div>
                <p className="text-body-sm text-secondary">
                  CR/Audit/001/Fy2023-2024
                </p>
                <h1 className="text-primary text-display-md font-display">
                  Financials (4)
                </h1>
              </div>
            </div>
            <div className="flex justify-self-end text-body-sm text-subtle  items-center gap-4">
              <BiEditAlt className="hover:text-primary" />
              <BsFileEarmarkText className="hover:text-primary" />
              <BsStar className="" fill="#A87C3F" />
              <p className="py-1  px-1 5">Agenda Type</p>
              <p className="py-1 hover:text-primary px-1 5">1/40</p>
              <BsChevronDown />
            </div>
          </div>
          <div className="mt-6 flex flex-col w-full gap-1 text-body-md">
            <div
              className="flex items-center w-full gap-2 cursor-pointer"
            >
              <div className="px-1.5 bg-hover-bg">1.1</div>
              <p className="">Anti Corruption Initiatives</p>
            </div>
            <div className="flex items-center w-full gap-2">
              <div className="px-1.5  rounded-sm bg-hover-bg">1.2</div>
              <p className="">Anti Corruption Initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agenda;
