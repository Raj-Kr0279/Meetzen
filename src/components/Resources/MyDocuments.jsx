import React, { useState } from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { BsFillTriangleFill, BsPlusLg, BsTrash } from 'react-icons/bs'
import pdf from '../../assets/pdf.svg'
import xls from '../../assets/xls.svg'
import ppt from '../../assets/ppt.svg'
import image from '../../assets/image.svg'
import { FiFolder } from 'react-icons/fi'
import ShareDocModal from './ShareDocModal'
import SuccessModal from './SuccessModal'

const MyDocuments = () => {
    const [files, setFiles] = useState([])
    const [shareModal, setShareModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
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
            {shareModal && <ShareDocModal modal={shareModal} setModal={setShareModal} />}
            {successModal && <SuccessModal modal={successModal} setModal={setSuccessModal} />}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-[8fr_4fr] place-items-start">
                <div class="overflow-y-scroll h-[75vh] border border-gray-200 w-full bg-white  md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 ">
                        <thead class="bg-tableLightBlue sticky top-0 text-tableHeadText ">
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
                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 ">
                            <tr>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">12/03/2023</td>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">
                                    <div className="flex items-center gap-3 text-primary">
                                        <AiOutlineShareAlt className='text-2xl cursor-pointer' onClick={() => setShareModal(true)} />
                                        <BsTrash className='text-2xl cursor-pointer' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">12/03/2023</td>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">
                                    <div className="flex items-center gap-3 text-primary">
                                        <AiOutlineShareAlt className='text-2xl cursor-pointer' onClick={() => setShareModal(true)} />
                                        <BsTrash className='text-2xl cursor-pointer' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">Board meeting document.xlsx</td>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">12/03/2023</td>
                                <td class="px-4 py-4 text-primary text-sm font-medium whitespace-nowrap">
                                    <div className="flex items-center gap-3 text-primary">
                                        <AiOutlineShareAlt className='text-2xl cursor-pointer' onClick={() => setShareModal(true)} />
                                        <BsTrash className='text-2xl cursor-pointer' />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='w-full'>
                    <div class={`mx-auto min-h-[250px] cursor-pointer flex gap-8 h-full aspect-square w-full max-w-lg flex-col ${files.length > 0 ? "justify-between" : "justify-center"} rounded-xl border-2 border-dashed border-border bg-white p-6 text-center`}>
                        <label htmlFor="dropzone-file" className='flex flex-col w-full items-center'>
                            <div className="flex w-12 h-12 border-dashed border-2 rounded-full justify-center items-center">
                                <BsPlusLg className=" text-2xlX " />
                            </div>

                            <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Drop your Files Here</h2>

                            <p class="pt-0.5 text-gray-500 tracking-wide"><span className='text-primary font-medium'>Browse Files</span> from your Computer</p>
                            <div className="flex items-center pt-4 justify-center gap-4">
                                <img src={pdf} alt="" />
                                <img src={xls} alt="" />
                                <img src={ppt} alt="" />
                                <img src={image} alt="" />
                            </div>
                            <input id="dropzone-file" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf" type="file" class="hidden" multiple onChange={handleFileInput} />
                        </label>
                        {files && files.length > 0 ? <div className="flex grow-1 overflow-y-auto w-full flex-col gap-2">
                            {files && files.map((v, index) =>

                                <div className='flex w-full justify-between text-start items-center' key={index} alt="">
                                    <div className="flex w-8/12 items-center gap-2">
                                        <FiFolder className='text-primary shrink-0' />
                                        <span className='text-primary text-xs font-normal'>{v.name}</span>
                                    </div>
                                    <div className="flex w-4/12 items-center gap-2">
                                        <div className='flex items-center border rounded-sm py-1 px-2'><span className='text-primary text-xs font-normal'>{Math.floor(v.size / 1024 / 1024 * 100) / 100 + " Mb"}</span></div>
                                        <BsTrash className='shrink-0' onClick={(e) => { e.stopPropagation(); deleteFile(index) }} />
                                    </div>
                                </div>
                            )
                            }
                            <button className="bg-primary w-full text-white py-3 rounded-md px-8 mt-2" onClick={() => setSuccessModal(true)}>Okay</button>

                        </div> : ""}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyDocuments
