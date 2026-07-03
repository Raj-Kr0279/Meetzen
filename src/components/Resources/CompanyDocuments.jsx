import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { BsFillTriangleFill, BsTrash } from 'react-icons/bs'

const CompanyDocuments = () => {
    return (
        <div class="overflow-hidden border border-gray-200 w-full bg-white md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 ">
                <thead class="bg-tableLightBlue text-tableHeadText ">
                    <tr>
                        <th scope="col" class="py-2 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <span>Document Title</span>
                                <div className="flex flex-col gap-0.5 justify-center">
                                    <BsFillTriangleFill className=' text-[5px]' />
                                    <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                </div>
                            </div>
                        </th>
                        <th scope="col" class="py-2 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <span>Category</span>
                                <div className="flex flex-col gap-0.5 justify-center">
                                    <BsFillTriangleFill className=' text-[5px]' />
                                    <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                </div>
                            </div>
                        </th>

                        <th scope="col" class="py-2 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <span>Uploaded On</span>
                                <div className="flex flex-col gap-0.5 justify-center">
                                    <BsFillTriangleFill className=' text-[5px]' />
                                    <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                </div>
                            </div>
                        </th>
                        <th scope="col" class="py-2 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <span>Uploaded/Shared By</span>
                                <div className="flex flex-col gap-0.5 justify-center">
                                    <BsFillTriangleFill className=' text-[5px]' />
                                    <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 ">
                    <tr>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">Compliance</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">12/03/2023</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">John Doe</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">Compliance</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">12/03/2023</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">John Doe</td>
                    </tr>
                    <tr>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">Compliance</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">12/03/2023</td>
                        <td class="p-4 text-foreground text-sm font-medium whitespace-nowrap">John Doe</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CompanyDocuments
