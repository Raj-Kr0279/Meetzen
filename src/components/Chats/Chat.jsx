import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew, MdAttachFile, MdOutlineEmojiEmotions } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import prof from '../../assets/profileDummy.png'
import gallery from '../../assets/photo_library.svg'
import doc from '../../assets/description.svg'
import './Chats.css';
import AddMemberModal from './AddMemberModal'
import CreateGroupModal from './CreateGroupModal'
import PageHeading from '../PageHeading'

const Chat = () => {
    const [attatchModal, setAttachModal] = useState(false)
    const [addMemberModal, setAddMemberModal] = useState(false)
    const [createGroupModal, setCreateGroupModal] = useState(false)
    const navigate = useNavigate()

    const chatCards = Array.from({ length: 30 }, (index) => (
        <div key={index} className="chat__card relative p-4">
            <div className="flex items-start">
                <div className="relative w-10 h-10 shrink-0 mr-3">
                    <img src={prof} className='w-full h-full rounded-full' alt="" />
                    <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between leading-none pb-1 items-center">
                        <p className='text-foreground font-medium text-xs'>Brenda White</p>
                        <span className="text-light font-medium text-[.813rem]">12:00</span>
                    </div>
                    <span className='text-light leading-[1.2] text-xs text__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsa repellat suscipit optio ex, voluptates quos nihil sunt consequuntur voluptate?</span>
                </div>
                <div className="absolute right-2 bottom-0 w-4 h-4 rounded-full text-small bg-primary flex items-center justify-center text-white">2</div>
            </div>
        </div>
    ));
    return (
        <>
          {/* <PageHeading label = "Chat"/> */}

            {addMemberModal && <AddMemberModal setModal= {setAddMemberModal} setGrpModal= {setCreateGroupModal} modal={addMemberModal} />}
            {createGroupModal && <CreateGroupModal setGrpModal= {setCreateGroupModal} modal={createGroupModal} />}
            <div className="flex w-full max-h-[calc(100dvh-40px)] overflow-hidden px-4">
                <div className='border-r basis-[300px] twok:basis-[450px] shrink-0 pr-2'>
                    <div className='flex items-center pt-4 pb-2 justify-between'>
                        <h1 className='text-foreground font-semibold text-mediumHeading'>Chat</h1>
                        <button className="bg-primary text-xs text-white px-4 py-2 font-medium rounded-md flex items-center gap-2" onClick={()=>setAddMemberModal(!addMemberModal)}>Add<AiOutlinePlus className=" text-mediumSubheading" /></button>

                    </div>
                    <div className='relative my-3'>
                        <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                        <input className='text-placeholder border w-full border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                    </div>

                    <div className="overflow-y-scroll h-[75vh] chat_left pb-4">
                        <div className="chat_list">
                            {chatCards}

                        </div>
                    </div>
                </div>
                <div className='grow-1 flex-1 flex flex-col shrink-0'>
                    <div className="chat__user__header flex px-8 border-b border-border py-4 items-center">
                        <div className="relative w-10 h-10 shrink-0 mr-4">
                            <img src={prof} className='w-full h-full rounded-full' alt="" />
                            <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                        </div>
                        <span className='text-foreground text-lg font-medium'>Jamie Spencer</span>
                    </div>
                    <div className="chat__area flex flex-col gap-5 h-[75vh] overflow-y-auto break-words py-6 px-8">
                        <div className='flex w-[65%] items-start mb-auto'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-white font-normal text-base  text-foreground p-4 rounded-lg '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder font-normal'>08:15 PM</span>
                            </div>
                        </div>
                        <div className='flex ml-auto w-[65%] flex-row-reverse items-start'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-primary text-white font-normal text-base p-4 rounded-lg '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder flex justify-end pt-2 font-normal'>08:15 PM</span>
                            </div>
                        </div>
                        <div className='flex w-[65%] items-start mb-auto'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-white font-normal text-base  text-foreground p-4 rounded-lg '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder font-normal'>08:15 PM</span>
                            </div>
                        </div>
                        <div className='flex ml-auto w-[65%] flex-row-reverse items-start'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-primary text-white font-normal text-base p-4 rounded-lg '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder flex justify-end pt-2 font-normal'>08:15 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full py-4 px-8 bg-chatInput items-center gap-4">
                        <img src={prof} className='w-10 h-10 rounded-full' alt="" />
                        <div className='relative w-full'>
                            <MdOutlineEmojiEmotions className='absolute text-mediumHeading text-placeholder top-1/2 right-10 -translate-y-1/2' />
                            <MdAttachFile className='absolute text-mediumHeading text-placeholder top-1/2 right-4 -translate-y-1/2' onClick={() => setAttachModal(!attatchModal)} />
                            <div className={`${attatchModal ? "flex" : "hidden"} absolute bottom-full mb-2 bg-white shadow-filter py-2 rounded-sm right-0 flex-col`}>
                                <div className="flex items-center gap-1 py-2 border-b border-profileModalBorder px-4"><img src={gallery} className='w-[16px] h-auto ' alt="" /><span className=' text-xs font-normal text-prof' >Photos & Videos</span></div>
                                <div className="flex items-center gap-1 py-2 px-4"><img src={doc} className='w-[16px] h-auto ' alt="" /><span className=' text-xs font-normal text-prof' >Document</span></div>
                            </div>
                            <input placeholder="Write your message here..." className='w-full border text-foreground border-topSearch rounded-md py-3 px-8' type="text" name="search" id="search" />
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Chat
