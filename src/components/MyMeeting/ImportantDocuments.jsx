import React, { useRef, useState } from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { BsFillTrashFill, BsFillTriangleFill, BsPlusLg, BsTrash } from 'react-icons/bs'
import { FiFolder } from 'react-icons/fi'
import pdf from '../../Assets/pdf.svg'
import xls from '../../Assets/xls.svg'
import ppt from '../../Assets/ppt.svg'
import image from '../../Assets/image.svg'

const ImportantDocuments = () => {
    const [files, setFiles] = useState([])
    const [successModal, setSuccessModal] = useState(false)

    const deleteFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const handleFileInput = (e) => {
        if (e.target.files) {
            // const file = Array.from(e.target.files).map((item) => URL.createObjectURL(item))
            const file = Array.from(e.target.files)
            setFiles(file);

            console.log(file, "lljadljdjd")
        }
    }
    return (
        <>
            <div className='w-full'>
                <div className='flex justify-end items-center gap-4'>
                    <label htmlFor="year" className='text-placeholder text-paragraph font-normal'>Filter Year: </label>
                    <select className='py-2.5 px-2.5 bg-white text-dark text-paragraph w-[19vw] rounded-sm border border-borderInput' name="year" id="year">
                        <option value="all" >All</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
                <div className="grid mt-4 gap-8 grid-cols-1 md:grid-cols-[8fr_4fr] place-items-center">
                    <div class="overflow-hidden border border-gray-200 w-full bg-white h-full md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 ">
                            <thead class="bg-tableLightBlue text-tableHeadText ">
                                <tr>
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <span>Title</span>
                                            <div className="flex flex-col gap-0.5 justify-center">
                                                <BsFillTriangleFill className=' text-[5px]' />
                                                <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <span>Created On</span>
                                            <div className="flex flex-col gap-0.5 justify-center">
                                                <BsFillTriangleFill className=' text-[5px]' />
                                                <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <span>Category</span>
                                            <div className="flex flex-col gap-0.5 justify-center">
                                                <BsFillTriangleFill className=' text-[5px]' />
                                                <BsFillTriangleFill className=" text-[5px] rotate-180" />
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 ">
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Compliance</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">12/03/2023</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-3 text-theme-color">
                                            <AiOutlineShareAlt className='text-large' />
                                            <BsTrash className='text-large' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Annual Reports</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">12/03/2023</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-3 text-theme-color">
                                            <AiOutlineShareAlt className='text-large' />
                                            <BsTrash className='text-large' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">Compliance</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">12/03/2023</td>
                                    <td class="px-4 py-4 text-dark text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-3 text-theme-color">
                                            <AiOutlineShareAlt className='text-large' />
                                            <BsTrash className='text-large' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full'>
                        <div class={`mx-auto min-h-[250px] cursor-pointer flex gap-8 h-full aspect-square w-full max-w-lg flex-col ${files.length > 0 ? "justify-between" : "justify-center"} rounded-xl border-2 border-dashed border-borderInput bg-white p-6 text-center`}>
                            <label htmlFor="dropzone-file" className='flex flex-col w-full items-center'>
                                <div className="flex w-12 h-12 border-dashed border-2 rounded-full justify-center items-center">
                                    <BsPlusLg className=" text-largeX " />
                                </div>

                                <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Drop your Files Here</h2>

                                <p class="pt-0.5 text-gray-500 tracking-wide"><span className='text-theme-color font-medium'>Browse Files</span> from your Computer</p>
                                <div className="flex items-center pt-4 justify-center gap-4">
                                    <img src={pdf} alt="" />
                                    <img src={xls} alt="" />
                                    <img src={ppt} alt="" />
                                    <img src={image} alt="" />
                                </div>
                                <input id="dropzone-file" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf" type="file" class="hidden" multiple onChange={handleFileInput} />
                            </label>
                            {files && files.length > 0 ?  <div className="flex grow-1 overflow-y-auto w-full flex-col gap-2">
                                {files && files.map((v, index) =>

                                    <div className='flex w-full justify-between text-start items-center' key={index} alt="">
                                        <div className="flex w-8/12 items-center gap-2">
                                            <FiFolder className='text-theme-color shrink-0' />
                                            <span className='text-dark text-smallSubheading font-normal'>{v.name}</span>
                                        </div>
                                        <div className="flex w-4/12 items-center gap-2">
                                            <div className='flex items-center border rounded-sm py-1 px-2'><span className='text-dark text-smallSubheading font-normal'>{Math.floor(v.size / 1024 / 1024 * 100) / 100 + " Mb"}</span></div>
                                            <BsTrash className='shrink-0' onClick={(e) => { e.stopPropagation(); deleteFile(index) }} />
                                        </div>
                                    </div>
                                )
                                }
                               <button className="bg-theme-color w-full text-white py-3 rounded-md px-8" onClick={()=>setSuccessModal(true)}>Upload</button>
                            </div> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImportantDocuments
