import React, { useState } from 'react'
import prof from '../../Assets/profileDummy.png'
import { BsTriangleFill } from 'react-icons/bs';


const CommitteeComposition = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    function Icon({ id, open }) {
        return (
            <BsTriangleFill className={`${id === open ? "" : "rotate-180"} h-3 w-3 transition-transform`} />
        );
    }

    const membercards = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="member__card break-words bg-hover-bg flex rounded-lg flex-col items-center text-center p-4">
            <img src={prof} className='rounded-full w-1/3 h-1/3' alt="" />
            <h1 className='text-memberCardHeader text-mediumHeading font-bold'>Madelyn Mango</h1>
            <p className='text-gray50 py-0.5 rounded-sm mb-2 text-smallSubheading font-bold w-full  '>Chairman</p>
            <div className='flex flex-col'>
                <p className='text-meetzen-textSecondary text-smallSubheading font-medium'>Chairman:</p>
                <h5 className='text-black pb-1.5 font-semibold text-smallSubheading'>Board Meeting</h5>
                <p className='text-foreground text-xs font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur quam eligendi placeat saepe corrupti facilis ab, esse modi natus.</p>
                <span className='text-primary underline font-bold pt-3'>View profile</span>
            </div>
        </div>
    ))

    return (
        <div className=' h-[75vh] overflow-y-auto w-full p-4 bg-white'>


            {/* <Accordion className='mb-4 rounded-md border border-accordion px-4' open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)} className='border-b-0 transition-colors'>
                    <div className='flex w-full justify-between items-center'>
                        <h1 className='text-primary font-semibold text-mediumSubheading'>Board of Directors</h1>
                        <span className='text-memberCount font-medium text-mediumSubheading'>20 Members</span>
                    </div>
                </AccordionHeader>
                <AccordionBody>
                    <div className='grid member__cards__wrp pt-4 w-full grid-cols-[repeat(auto-fit,_minmax(15.625rem,_1fr))]  pb-6 gap-4'>
                        {membercards}

                    </div>

                </AccordionBody>
            </Accordion>

            
            <Accordion className='mb-4 rounded-md border border-accordion px-4' open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className='border-b-0 transition-colors'>
                    <div className='flex w-full justify-between items-center'>
                        <h1 className='text-primary font-semibold text-mediumSubheading'>Board of Directors</h1>
                        <span className='text-memberCount font-medium text-mediumSubheading'>20 Members</span>
                    </div>
                </AccordionHeader>
                <AccordionBody>
                    <div className='grid member__cards__wrp pt-4 w-full grid-cols-[repeat(auto-fit,_minmax(15.625rem,_1fr))]  pb-6 gap-4'>
                        {membercards}

                    </div>

                </AccordionBody>
            </Accordion> */}


        </div>
    )
}


export default CommitteeComposition
