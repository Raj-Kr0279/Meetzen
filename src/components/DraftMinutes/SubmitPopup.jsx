
import React, { useState } from 'react'
import done from '../../Assets/done_FILL0_wght400_GRAD0_opsz48 (1) 1.svg'
import { useEffect } from 'react';

const SubmitPopup = ({ modal, setModal, isSaveDraft, setSaveDraft }) => {
    const [isModal, setIsModal] = useState(true);
    const [isComment, setComment] = useState(false)
    const [isSubmitted, setSubmitted] = useState(false)
    const handleAddComment = () => {
        setIsModal(false);
        setComment(true);
    }
    const handleSubmit = () => {
        setComment(false);
        setSubmitted(true);
    }
    const handleSubmitted = () => {
        setModal(false);
    }
    const handleContinue = () => {
        setSaveDraft(false);
        setIsModal(true);

    }
    useEffect(() => {
        isSaveDraft && setIsModal(false)
    },[]);
    return (
        <>
            <div className="fixed z-20 top-0 left-0 w-full h-screen bg-overlay" onClick={() => setModal(false)}></div>
            <div className="absolute w-[25rem] z-30 top-1/2 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md px-6 py-4">

                { isSaveDraft ? 
                <div className="flex flex-col gap-2">
                <h3 className='text-prof font-medium text-mediumSubheading'>Saved Draft Minutes</h3>
                <p className='text-foreground text-medium font-normal'>Your draft minutes are saved successfully. Tap on “Continue” to submit to the company secretary.</p>
                <div className="grid mt-2 grid-cols-2 gap-2">
                    <button className='text-white rounded-sm border border-white bg-primary font-medium py-2 px-4' onClick={()=>setModal(false)}>Save</button>
                    <button className='text-primary rounded-sm bg-white border border-theme-color text-base font-medium py-2 px-4' onClick={handleContinue}>Continue</button>
                </div>
            </div>
            :
                isModal ?
                    <div className="flex flex-col gap-2">
                        <h3 className='text-prof font-medium text-mediumSubheading'>Submit Draft Minutes</h3>
                        <p className='text-foreground text-medium font-normal'>Your are about to share this draft minute with the company secretary. Provide your comments for the final submission.</p>
                        <button className='bg-primary mt-3 text-white py-2 px-6 w-full rounded-md' onClick={handleAddComment}>Add Comments</button>
                    </div>
                    :
                    isComment ?
                        <>
                            <div className="flex flex-col gap-2">
                                <textarea name="" id="" cols="30" rows="6" className='border border-border rounded-md p-4' placeholder='Enter comments here...'></textarea>
                                <button className='bg-primary mt-3 text-white py-2 px-6 w-full rounded-md' onClick={handleSubmit}>Submit</button>
                            </div>
                        </>
                        :
                        isSubmitted ?
                            <div className="flex flex-col gap-2">
                                <img src={done} alt="" className=' w-14 h-14 py-2' />
                                <h3 className='text-prof font-medium text-mediumSubheading'>Draft Minutes Submitted</h3>
                                <p className='text-foreground text-medium font-normal'>Your draft minutes has been successfully submitted.</p>
                                <button className='bg-primary mt-3 text-white py-2 px-6 w-full rounded-md' onClick={handleSubmitted}>Okay</button>
                            </div>
                            :
                            null
                }
            </div>
        </>
    )
}

export default SubmitPopup
