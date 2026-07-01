import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineShareAlt } from 'react-icons/ai'
import { BsFillTriangleFill, BsTrash } from 'react-icons/bs'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Pagination } from '../Pagination'
import prof from '../../Assets/profileDummy.png'
import { useNavigate } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import PageHeading from '../PageHeading'

const CircularResolutionResult = () => {
    const data = {
        labels: ['Ascent', 'Dissent', 'Abstain', 'Vote'],
        datasets: [
          {
            data: [5, 3, 5, 2],
            legend: false,
            backgroundColor: ['#0078C2', '#BBB6F8', '#EAEBF0', '#F4F0FD'],
            borderColor: ['white', 'white', 'white', 'white'],
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
                return context.active ? context.label : '';
              },
            },
          },
        },
      };
      
      ChartJS.register(ArcElement, Tooltip, Legend);
    const navigate = useNavigate()
    return (
        <>
              <PageHeading/>
            <div className="w-full bg-white p-8 min-h-screen">
                <div className="min-h-[70vh] w-full bg-white border border-gray-200  rounded-md">
                    <div className='py-2 px-4 border-b bg-hover-bg'>
                        <h1 className="text-dark font-semibold text-2xl">Results</h1>
                    </div>
                    <div class="overflow-y-auto h-[70vh] w-full bg-white mb-8 md:rounded-lg">
                        <table class="min-w-full divide-y  divide-gray-200 ">
                            <thead class=" sticky top-0 bg-white ">
                                <tr>
                                    <th scope="col" class="py-3.5 px-4 tracking-wide text-left rtl:text-right text-prof font-medium text-base">
                                        <div className="flex items-center gap-1.5">
                                            <span>Name</span>
                                            <div className="flex flex-col gap-0.5 justify-center">
                                                <BsFillTriangleFill className=' text-[5px]' />
                                                <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" class="py-3.5 px-4 tracking-wide text-left rtl:text-right text-prof font-medium text-base">
                                        <div className="flex items-center gap-1.5">
                                            <span>Designation</span>
                                            <div className="flex flex-col gap-0.5 justify-center">
                                                <BsFillTriangleFill className=' text-[5px]' />
                                                <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" class="py-3.5 px-4 tracking-wide text-left rtl:text-right text-prof font-medium text-base">Vote</th>
                                    <th scope="col" class="py-3.5 px-4 tracking-wide text-left rtl:text-right text-prof font-medium text-base">Reviewed On</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 ">
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-action bg-actionBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-action'></span>Abstained</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-success bg-meetGreenBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-success'></span>Ascent</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-error bg-meetRedBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-error'></span>Dissent</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-action bg-actionBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-action'></span>Abstained</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-action bg-actionBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-action'></span>Abstained</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-action bg-actionBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-action'></span>Abstained</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-action bg-actionBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-action'></span>Abstained</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-action bg-actionBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-action'></span>Abstained</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <img src={prof} className='w-8 h-8 rounded-full' alt="" />
                                            <div className='flex flex-col'>
                                                <span className='text-prof text-smallSubheading font-medium'>Kelly Casper</span>
                                                <span className='text-dark text-smallSubheading font-medium'>Mario.Koss@hotmail.com</span></div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Employer</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <p className='text-action bg-actionBg inline-block rounded-[2px] p-[1px_2px] text-smallSubheading font-medium'><span className='w-2 h-2 mr-1 rounded-full bg-action'></span>Abstained</p>
                                    </td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">20/06/23</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Pagination />
                </div>


                <div className="graph__section flex justify-center gap-16 items-center mt-6">
                    <div className="pie w-[20rem]">
                <Pie data={data} options={options} />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-dark font-semibold text-mediumSubheading pl-4'>Results</h1>
                    <div className='flex items-center justify-between gap-3'>
                        <div className="flex gap-4 items-center">
                            <div className='bg-meetzen-primary w-8 h-8 rounded-full'></div>
                            <p className='text-placeholder font-medium text-base justify-self-start whitespace-nowrap'>No of director who have given Assent</p>
                        </div>
                        <p className='text-theme-color font-extrabold bg-themeLightBlue shrink-0 w-8 h-6 rounded-sm flex item-center justify-center'>6</p>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                    <div className="flex gap-4 items-center">
                    <div className='bg-[#BBB6F8] w-8 h-8 rounded-full'></div>
                        <p className='text-placeholder font-medium text-base justify-self-start whitespace-nowrap'>No of director who have given Dissent</p>
                        </div>
                        <p className='text-theme-color font-extrabold bg-themeLightBlue shrink-0 w-8 h-6 rounded-sm flex item-center justify-center'>3</p>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                    <div className="flex gap-4 items-center">
                    <div className='bg-[#EAEBF0] w-8 h-8 rounded-full'></div>
                        <p className='text-placeholder font-medium text-base justify-self-start whitespace-nowrap'>No of director who have given Abstain</p>
                        </div>
                        <p className='text-theme-color font-extrabold bg-themeLightBlue shrink-0 w-8 h-6 rounded-sm flex item-center justify-center'>5</p>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                    <div className="flex gap-4 items-center">
                    <div className='bg-[#F4F0FD] w-8 h-8 rounded-full'></div>
                        <p className='text-placeholder font-medium text-base justify-self-start whitespace-nowrap'>No of director who have given Vote</p>
                        </div>
                        <p className='text-theme-color font-extrabold bg-themeLightBlue shrink-0 w-8 h-6 rounded-sm flex item-center justify-center'>2</p>
                    </div>
                </div>


                </div>
            </div>

        </>
    )
}

export default CircularResolutionResult
