import React, { useState } from 'react'
import meetzen from "../../assets/Meetzen.png";
import prof from '../../assets/profileDummy.png'
import { BsTriangleFill } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
import './AboutCompany.css';

const CompanyStructure = () => {
    const [isCollapsed, setCollapsed] = useState(false)
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    function Icon({ id, open }) {
        return (
            <BsTriangleFill className={`${id === open ? "" : "rotate-180"} h-3 w-3 transition-transform`} />
        );
    }
    const membercards = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className='w-60 rounded-md border border-border flex justify-center items-center flex-col bg-white p-4'>
            <img src={prof} className=' w-12 h-12 rounded-full' alt="" />
            <h1 className='text-memberCardHeader pb-2 text-xs font-semibold'>Madelyn Mango</h1>
            <span className='w-full text-center bg-hover-bg text-primary my-1 text-smallCaption font0-semibold p-1'>Chairman</span>
        </div>
    ))

    return (
        <>
            <div className="flex items-center gap-8 pb-8">
                <img src={meetzen} className='w-[170px] h-[170px] bg-white rounded-md' alt="" />
                <div>
                    <h1 className='text-display-md pb-2'>Brief Introduction</h1>
                    <p className='text-body-md'>Vel nunc ut pulvinar eget elit enim neque, in sed. Facilisi ultrices in sed vitae, dolor. Nibh at et eget massa in orci, scelerisque tempor. Penatibus fermentum in in id dolor faucibus felis ac eget. Orci facilisis risus risus viverra. Iaculis dapibus purus, diam ullamcorper fames sit placerat id egestas. In sit egestas lobortis enim facilisis. Id turpis turpis ligula aenean. Vel nunc ut pulvinar eget elit enim neque, in sed. Facilisi ultrices in sed vitae, dolor. Nibh at et eget massa in orci, scelerisque tempor. Penatibus fermentum in in id dolor faucibus felis ac eget. </p>
                </div>
            </div>
            <div className='flex flex-col gap-2 mb-4'>
                 <h1 className='text-display-md pb-2'>Mission</h1>
                <p className='text-body-md'>Sit nulla imperdiet at a, eu nulla. A id ultrices at bibendum aliquet. Lectus imperdiet orci libero, justo, turpis consectetur. Tristique pretium, turpis sit non quis commodo nisi, tristique in. In placerat arcu, felis a amet semper dignissim est. Amet, enim aliquam neque, tincidunt ultrices dictum diam dui. Malesuada eu urna laoreet sed elit dolor ipsum sed. In mi cras vitae, id aliquam nulla elementum risus amet.</p>
            </div>
            <div className='flex flex-col gap-2 mb-4'>
               <h1 className='text-display-md pb-2'>Vision</h1>
               <p className='text-body-md'>Sit nulla imperdiet at a, eu nulla. A id ultrices at bibendum aliquet. Lectus imperdiet orci libero, justo, turpis consectetur. Tristique pretium, turpis sit non quis commodo nisi, tristique in. In placerat arcu, felis a amet semper dignissim est. Amet, enim aliquam neque, tincidunt ultrices dictum diam dui. Malesuada eu urna laoreet sed elit dolor ipsum sed. In mi cras vitae, id aliquam nulla elementum risus amet.</p>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="year" className='text-display-md pb-1'>Committee Composition</label>
                <select className='py-2.5 px-2.5 bg-white text-primary text-base w-[19vw] rounded-sm border border-border' name="committee" id="committee">
                    <option value="all">Audit Committee</option>
                    <option value="board_meetig">Board Meeting</option>
                    <option value="audit">Audit</option>
                    <option value="src">SRC</option>
                </select>
            </div>

            <div className='relative mb-6 w-full flex flex-col items-center justify-center'>
                <div className='w-60 rounded-md border border-border flex justify-center items-center flex-col bg-white p-4'>
                    <img src={prof} className=' w-12 h-12 rounded-full' alt="" />
                    <h1 className='text-memberCardHeader pb-2 text-xs font-semibold'>Madelyn Mango</h1>
                    <span className='w-full text-center bg-hover-bg text-primary my-1 text-smallCaption font0-semibold p-1'>Chairman</span>
                    <p className='bg-compareHead cursor-pointer text-white px-3 py-1 rounded-full -translate-x-1/2 left-1/2 flex items-center gap-1 absolute -bottom-3' onClick={() => setCollapsed(!isCollapsed)}>2<FaAngleDown /></p>
                </div>
            </div>
            {isCollapsed &&
                <>
                    <div className='border-r-2 h-8 w-full border-l-2 border-t-2 cards__line border-black'>
                    </div>
                    <div className='grid place-items-center member__cards__wrp pt-4 w-full grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))]  pb-6 gap-4'>
                        {membercards}
                    </div>
                </>
            }
        </>
    )
}

export default CompanyStructure
