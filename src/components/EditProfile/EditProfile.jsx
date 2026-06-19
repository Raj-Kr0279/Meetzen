import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew, MdOutlineImage } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import prof from '../../Assets/profileDummy.png'
import { FaAngleDown } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'

const EditProfile = () => {
  const [selectedTimezone, setSelectedTimezone] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <div className="flex fixed bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
        <div className='flex items-center cursor-pointer font-semibold text-theme-color' onClick={() => navigate("/dashboard")}>
          <MdArrowBackIosNew className=' text-largeX font-normal' />
          <span className=' text-lg font-medium'>Back</span>
        </div>
      </div>
      <p className='text-dark leading-[1.2] fixed top-2 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Edit Profile</p>

      <div className="grid md:grid-cols-[4fr_8fr] max-h-[calc(100dvh-40px)] mt-20 grid-cols-1 md:px-5 lg:px-24 place-items-center w-full">
        <div className='flex flex-col self-baseline gap-4 items-center'>
          <div className='flex flex-col gap-2 items-center'>
            <img src={prof} className='w-[240px] h-[240px] rounded-full' alt="" />
            <span className='text-dark font-medium text-smallSubheading text-center pb-6'>Recommeded image size<br />250x250</span>
          </div>
          <div className="buttons flex flex-col gap-4 w-9/12">
            <button className='bg-theme-color text-white py-3 px-4 rounded-md flex items-center gap-2 justify-center text-smallSubheading font-normal'><MdOutlineImage />Change Picture</button>
            <button className='bg-white border-error border text-error py-3 px-4 rounded-md flex items-center gap-2 justify-center text-smallSubheading font-normal'><FiTrash2 />Delete</button>
          </div>
        </div>
        {/* form profile  */}
        <div className='w-full xl:w-8/12 justify-self-start'>
          <form action='' className='flex edit_profile flex-col w-full gap-6 lg:gap-2'>
            <div>
              <label htmlFor="name" className='text-dark text-paragraph  font-semibold inline-block pb-2'>Full Name</label>
              <input type="text" className='border-border-input placeholder:text-placeholder w-full font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md' />
            </div>
            <div>
              <label htmlFor="phone" className='text-dark text-paragraph  font-semibold inline-block pb-2'>Mobile Number (WhatsApp Preferred)</label>
              <input type="number" className='border-border-input placeholder:text-placeholder w-full font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md' />
            </div>
            <div>
              <label htmlFor="bio" className='text-dark text-paragraph  font-semibold inline-block pb-2'>Bio</label>
              <textarea className='border-border-input resize-none h-28 placeholder:text-placeholder w-full font-normal border-1 text-paragraph  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md' />
            </div>
            <div>
              <label htmlFor="language" className='text-dark text-paragraph  font-semibold inline-block pb-2'>Change Language</label>
              <div className="select-wrapper w-full relative">
                <FaAngleDown className='absolute right-4 top-1/2 -translate-y-1/2 z-0' />
                <select name="language" id="language" className="border w-full text-paragraph text-dark font-medium pl-4 pr-10 py-3 rounded-md focus-visible:border-dark appearance-none">
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bengali</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="timezone" className='text-dark text-paragraph  font-semibold inline-block pb-2'>Change Time Zone</label>
              <div className="select-wrapper w-full relative">
                <FaAngleDown className='absolute right-4 top-1/2 -translate-y-1/2 z-0' />
                <select value={selectedTimezone} name="timezone_offset" id="timezone-offset" className="border w-full text-paragraph text-dark font-medium pl-4 pr-10 py-3 rounded-md focus-visible:border-dark appearance-none" onChange={(e) => setSelectedTimezone(e.target.value)}>
                  <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                  <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                  <option value="-10:00">(GMT -10:00) Hawaii</option>
                  <option value="-09:50">(GMT -9:30) Taiohae</option>
                  <option value="-09:00">(GMT -9:00) Alaska</option>
                  <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                  <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                  <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                  <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                  <option value="-04:50">(GMT -4:30) Caracas</option>
                  <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                  <option value="-03:50">(GMT -3:30) Newfoundland</option>
                  <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                  <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                  <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
                  <option value="+00:00" selected="selected">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                  <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                  <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                  <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                  <option value="+03:50">(GMT +3:30) Tehran</option>
                  <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                  <option value="+04:50">(GMT +4:30) Kabul</option>
                  <option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
                  <option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                  <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                  <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
                  <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                  <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                  <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                  <option value="+08:75">(GMT +8:45) Eucla</option>
                  <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                  <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                  <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                  <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                  <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                  <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                  <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                  <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                  <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                  <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
                </select>
              </div>
            </div>

            <button className="w-full mt-6 py-4 px-8 rounded-lg  bg-theme-color text-white">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>


  )
}

export default EditProfile
