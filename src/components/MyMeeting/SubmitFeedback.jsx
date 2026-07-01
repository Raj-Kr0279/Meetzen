import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlineSearch } from 'react-icons/ai'
import { FaFile } from 'react-icons/fa'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip';
import { BiBarChartAlt2 } from 'react-icons/bi'
import { BsTriangleFill } from 'react-icons/bs'
import strategy  from '../../Assets/strategy_FILL0_wght300_GRAD0_opsz24.svg'
function Icon({ id, open }) {
    return (
        <BsTriangleFill className={`${id === open ? "" : "rotate-180"} h-3 w-3 transition-transform`} />
    );
}
const SubmitFeedback = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]; // Define all the steps
    const handleSliderChange = (event) => {
        const stepValue = parseFloat(event.target.value); // Parse as a float
        setCurrentStep(stepValue);
    };

    const stepsBarWidth = ((currentStep - 1) / 4) * 100 + '%';
    return (
        <>
            <div className="flex fixed bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-2xlX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
            </div>
            <p className='text-dark fixed top-2 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Draft Minutes</p>



            <div className="w-full mb-8 px-10 mt-[40px] twok:mt-[60px] max-h-[calc(100dvh-40px)] flex flex-col h-screen overflow-y-scroll">
                {/* filters and search section  */}

                <div className=' bg-hover-bg px-4 py-4  flex justify-between rounded-md mt-6 mb-4 items-center'>
                    <div className="">
                        <h1 className='text-dark font-semibold text-2xl pb-1.5'>132nd Meeting of Board Committee</h1>
                        <p className='text-theme-color text-lg font-semibold'>Document Name</p>
                        <p className='text-base font-medium text-light' >Date & Time: <span className='text-theme-color text-lg font-semibold pl-1'>20/06/23 07:20 PM</span></p>
                    </div>
                </div>


                {/* <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        <div className="flex items-center gap-1">
                            <BiBarChartAlt2 className='text-theme-color text-2xl' />
                            <h1 className="text-theme-color font-semibold text-2xl">Leadership</h1>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='mb-4'>
                            <p className='text-dark font-normal text-base break-words'>
                                1. <span>Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut.</span>
                            </p>
                            <div className="slider-container pt-4 w-3/12 flex justify-start gap-4">
                                <div className="inline-block w-full items-center gap-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="5"
                                        step="0.5" // Step by 0.5
                                        value={currentStep}
                                        onChange={handleSliderChange}
                                        className="slider w-full my-anchor-element"
                                        data-tip={`Step: ${currentStep}`}
                                    />
                                    <div className="steps-bar flex w-full items-center -mt-2 gap-1">
                                        {steps.map((step) => (
                                            <div key={step} className="step-label w-full flex-col items-center flex justify-center">
                                                <AiOutlineMinus className='rotate-90 text-small' />
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="step-value w-20 h-10 border border-theme-color flex items-center justify-center text-theme-color font-extrabold text-mediumSubheading">{currentStep}</p>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Add your comments...' className='w-full shadow-textarea p-4 h-32 resize-none border border-profileModalBorder rounded-md mt-3'></textarea>
                        </div>

                        <div className='mb-4'>
                            <p className='text-dark font-normal text-base break-words'>
                                2. <span>Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut.</span>
                            </p>
                            <div className="slider-container pt-4 w-3/12 flex justify-start gap-4">
                                <div className="inline-block w-full items-center gap-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="5"
                                        step="0.5" // Step by 0.5
                                        value={currentStep}
                                        onChange={handleSliderChange}
                                        className="slider w-full my-anchor-element"
                                        data-tip={`Step: ${currentStep}`}
                                    />
                                    <div className="steps-bar flex w-full items-center -mt-2 gap-1">
                                        {steps.map((step) => (
                                            <div key={step} className="step-label w-full flex-col items-center flex justify-center">
                                                <AiOutlineMinus className='rotate-90 text-small' />
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="step-value w-20 h-10 border border-theme-color flex items-center justify-center text-theme-color font-extrabold text-mediumSubheading">{currentStep}</p>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Add your comments...' className='w-full shadow-textarea p-4 h-32 resize-none border border-profileModalBorder rounded-md mt-3'></textarea>
                        </div>

                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                    <div className="flex items-center gap-1">
                            <img src={strategy} alt="" />
                            <h1 className="text-theme-color font-semibold text-2xl">Strategy Formulation</h1>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='mb-4'>
                            <p className='text-dark font-normal text-base break-words'>
                                1. <span>Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut.</span>
                            </p>
                            <div className="slider-container pt-4 w-3/12 flex justify-start gap-4">
                                <div className="inline-block w-full items-center gap-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="5"
                                        step="0.5" // Step by 0.5
                                        value={currentStep}
                                        onChange={handleSliderChange}
                                        className="slider w-full my-anchor-element"
                                        data-tip={`Step: ${currentStep}`}
                                    />
                                    <div className="steps-bar flex w-full items-center -mt-2 gap-1">
                                        {steps.map((step) => (
                                            <div key={step} className="step-label w-full flex-col items-center flex justify-center">
                                                <AiOutlineMinus className='rotate-90 text-small' />
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="step-value w-20 h-10 border border-theme-color flex items-center justify-center text-theme-color font-extrabold text-mediumSubheading">{currentStep}</p>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Add your comments...' className='w-full shadow-textarea p-4 h-32 resize-none border border-profileModalBorder rounded-md mt-3'></textarea>
                        </div>

                        <div className='mb-4'>
                            <p className='text-dark font-normal text-base break-words'>
                                2. <span>Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut.</span>
                            </p>
                            <div className="slider-container pt-4 w-3/12 flex justify-start gap-4">
                                <div className="inline-block w-full items-center gap-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="5"
                                        step="0.5" // Step by 0.5
                                        value={currentStep}
                                        onChange={handleSliderChange}
                                        className="slider w-full my-anchor-element"
                                        data-tip={`Step: ${currentStep}`}
                                    />
                                    <div className="steps-bar flex w-full items-center -mt-2 gap-1">
                                        {steps.map((step) => (
                                            <div key={step} className="step-label w-full flex-col items-center flex justify-center">
                                                <AiOutlineMinus className='rotate-90 text-small' />
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="step-value w-20 h-10 border border-theme-color flex items-center justify-center text-theme-color font-extrabold text-mediumSubheading">{currentStep}</p>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Add your comments...' className='w-full shadow-textarea p-4 h-32 resize-none border border-profileModalBorder rounded-md mt-3'></textarea>
                        </div>

                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                    Another heading
                    </AccordionHeader>
                    <AccordionBody>
                       pending...
                    </AccordionBody>
                </Accordion> */}
                <button className="text-white self-center mt-6 bg-meetzen-primary font-medium py-2.5 px-32 rounded-sm">Submit</button>
            </div>

            <Tooltip
                opacity={1}
                style={{ backgroundColor: "#F5F8FE", color: "#49556D", width: "", boxShadow: "0px 6px 7px 0px #e5e5e5" }}
                anchorSelect=".my-anchor-element" className='tooltip bg-white text-black text-smallCaption' place="top-center">
                {currentStep}
            </Tooltip>
        </>
    )
}

export default SubmitFeedback
