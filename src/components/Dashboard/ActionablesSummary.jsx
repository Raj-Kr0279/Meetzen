import React from 'react'
import { demoData } from '../../demoData/demoData'
import { FiEdit, FiFile } from 'react-icons/fi'
import { MdOutlineMessage } from 'react-icons/md'
import dash from "../../Assets/Icon placeholder.svg";

const ActionablesSummary = () => {
  return (
      <div className="w-full md:p-4 my-6 md:my-0 card">
          <h1 className="text-foreground text-heading font-semibold pb-2">
            My Actionable
          </h1>
          <div className="grid-cols-2 md:grid-cols-4 grid gap-2">
            <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightOrange">
              <FiEdit className="text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-actionableOrange" />
              <span className="text-foreground text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
                Draft Minutes
              </span>
              <h1 className="text-foreground text-heading font-bold mt-auto">{demoData.draftMinutes.length}</h1>
            </div>
            <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightGreen">
              <MdOutlineMessage className="text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-success" />
              <span className="text-foreground text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
                Board Evaluation
              </span>
              <h1 className="text-foreground text-heading font-bold mt-auto">{demoData.boardEvaluations.length}</h1>
            </div>
            <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightPurple">
              <img src={dash} alt="" />
              <span className="text-foreground text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
                Resolution By Circulation
              </span>
              <h1 className="text-foreground text-heading font-bold mt-auto">{demoData.circularResolutonLists.length}</h1>
            </div>
            <div className="flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightYellow">
              <FiFile className="text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-actionableYellow" />
              <span className="text-foreground text-smallCaption tracking-[1px] pt-2 font-medium pb-2">
                Final Minutes
              </span>
              <h1 className="text-foreground text-heading font-bold mt-auto">{demoData.finalMinutes.length}</h1>
            </div>
          </div>
        </div>
  )
}

export default ActionablesSummary
