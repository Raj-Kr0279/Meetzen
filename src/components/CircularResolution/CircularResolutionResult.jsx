import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import { BsFillTriangleFill, BsTrash } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { Pagination } from "../Pagination";
import prof from "../../assets/profileDummy.png";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import PageHeading from "../PageHeading";

const CircularResolutionResult = () => {
  const data = {
    labels: ["Ascent", "Dissent", "Abstain", "Vote"],
    datasets: [
      {
        data: [5, 3, 5, 2],
        legend: false,
        backgroundColor: ["#0078C2", "#BBB6F8", "#EAEBF0", "#F4F0FD"],
        borderColor: ["white", "white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: {
        enabled: false, // Disable the default tooltip
        callbacks: {
          label: function (context) {
            // Display the label only on hover
            return context.active ? context.label : "";
          },
        },
      },
    },
  };

  ChartJS.register(ArcElement, Tooltip, Legend);
  const navigate = useNavigate();
  return (
    <>
      <PageHeading />
      <div className="w-full min-h-screen rounded-xl border border-border bg-white p-4 md:p-6">
  <div className="w-full">
    <div className="mb-5">
      <h1 className="text-display-lg font-display">
        Results
      </h1>
    </div>

    {/* TABLE */}
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="overflow-x-auto">
        <div className="max-h-[420px] overflow-y-auto">
          <table className="min-w-[850px] w-full table-auto border-collapse">
            <thead className="sticky top-0 z-20 bg-primary text-inverse">
              <tr className="[&_th]:px-5 [&_th]:py-3 [&_th]:text-left [&_th]:text-body-md">
                <th>
                  <div className="flex items-center gap-2">
                    <span>Name</span>

                    <div className="flex flex-col gap-0.5">
                      <BsFillTriangleFill className="text-[5px]" />
                      <BsFillTriangleFill className="rotate-180 text-[5px]" />
                    </div>
                  </div>
                </th>

                <th>
                  <div className="flex items-center gap-2">
                    <span>Designation</span>

                    <div className="flex flex-col gap-0.5">
                      <BsFillTriangleFill className="text-[5px]" />
                      <BsFillTriangleFill className="rotate-180 text-[5px]" />
                    </div>
                  </div>
                </th>

                <th>Vote</th>

                <th>Reviewed On</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border bg-white">
              {Array.from({ length: 20 }, (_, index) => (
                <tr
                  key={index}
                  className="transition-colors hover:bg-surface-hover"
                >
                  {/* NAME */}
                  <td className="px-5 py-4">
                    <div className="flex min-w-[240px] items-center gap-3">
                      <img
                        src={prof}
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                      />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-primary">
                          Kelly Casper
                        </p>

                        <p className="truncate text-captionLight text-muted">
                          Mario.Koss@hotmail.com
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* DESIGNATION */}
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-primary">
                    Employer
                  </td>

                  {/* VOTE */}
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center rounded-full bg-warning/15 px-3 py-1 text-xs font-medium text-warning whitespace-nowrap">
                      Abstained
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-primary">
                    20/06/23
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Pagination */}
    <div className="mt-5">
      <Pagination />
    </div>

    {/* GRAPH SECTION */}
    <div className="mt-10 flex flex-col items-center justify-between gap-10 xl:flex-row xl:items-start">
      {/* Chart */}
      <div className="w-full max-w-sm shrink-0">
        <Doughnut data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="w-full max-w-2xl">
        <h2 className="mb-6 text-xl font-semibold text-primary">
          Results
        </h2>

        <div className="space-y-5">
          {/* Item */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-7 w-7 rounded-full bg-primary"></div>

              <p className="text-base font-medium leading-6 text-placeholder">
                No of director who have given Assent
              </p>
            </div>

            <div className="flex h-7 w-9 shrink-0 items-center justify-center rounded bg-themeLightBlue font-bold text-primary">
              6
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-7 w-7 rounded-full bg-[#BBB6F8]"></div>

              <p className="text-base font-medium leading-6 text-placeholder">
                No of director who have given Dissent
              </p>
            </div>

            <div className="flex h-7 w-9 shrink-0 items-center justify-center rounded bg-themeLightBlue font-bold text-primary">
              3
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-7 w-7 rounded-full bg-[#EAEBF0]"></div>

              <p className="text-base font-medium leading-6 text-placeholder">
                No of director who have given Abstain
              </p>
            </div>

            <div className="flex h-7 w-9 shrink-0 items-center justify-center rounded bg-themeLightBlue font-bold text-primary">
              5
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-7 w-7 rounded-full bg-[#F4F0FD]"></div>

              <p className="text-base font-medium leading-6 text-placeholder">
                No of director who have given Vote
              </p>
            </div>

            <div className="flex h-7 w-9 shrink-0 items-center justify-center rounded bg-themeLightBlue font-bold text-primary">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default CircularResolutionResult;
