import React, { useState } from 'react';

const SelectLanguage = ({ next, prev }) => {
  const [selected, setSelected] = useState('');

  const handleLanguageChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-3 max-w-7xl mx-auto w-full place-items-center gap-x-6 mt-4 mb-16 gap-y-4">
        <label className={`${selected === "english" ? "bg-meetzen-primary text-white" : "text-dark bg-hover-bg"} lang__cards font-bold text-heading rounded-xl w-full xl:w-[85%] p-6 flex flex-col aspect-[20/9] justify-center items-center`}>
          <input
            type="radio"
            name="language"
            value="english"
            checked={selected === 'english'}
            onChange={handleLanguageChange}
          />
          <h1>English</h1>
          {/* <p className="text-light font-medium text-mediumSubheading"></p> */}
        </label>
        <label className={`${selected === "hindi" ? "bg-meetzen-primary text-white" : "text-dark bg-hover-bg"} lang__cards font-bold text-heading rounded-xl w-full xl:w-[85%] p-6 flex flex-col aspect-[20/9] justify-center items-center`}>
          <input
            type="radio"
            name="language"
            value="hindi"
            checked={selected === 'hindi'}
            onChange={handleLanguageChange}
          />
          <h1>Hindi</h1>
          <p className={`${selected === "hindi" ? "text-white" : "text-light"} font-medium text-mediumSubheading`}>(Hindi)</p>
        </label>
        <label className={`${selected === "marathi" ? "bg-meetzen-primary text-white" : "text-dark bg-hover-bg"} lang__cards font-bold text-heading rounded-xl w-full xl:w-[85%] p-6 flex flex-col aspect-[20/9] justify-center items-center`}>
          <input
            type="radio"
            name="language"
            value="marathi"
            checked={selected === 'marathi'}
            onChange={handleLanguageChange}
          />
          <h1>Marathi</h1>
          <p className={`${selected === "marathi" ? "text-white" : "text-light"} font-medium text-mediumSubheading`}>(Marathi)</p>
        </label>
        <label className={`${selected === "kannada" ? "bg-meetzen-primary text-white" : "text-dark bg-hover-bg"} lang__cards font-bold text-heading rounded-xl w-full xl:w-[85%] p-6 flex flex-col aspect-[20/9] justify-center items-center`}>
          <input
            type="radio"
            name="language"
            value="kannada"
            checked={selected === 'kannada'}
            onChange={handleLanguageChange}
          />
          <h1>Malayali</h1>
          <p className={`${selected === "kannada" ? "text-white" : "text-light"} font-medium text-mediumSubheading`}>(Malayali)</p>
        </label>
        <label className={`${selected === "malayali" ? "bg-meetzen-primary text-white" : "text-dark bg-hover-bg"} lang__cards font-bold text-heading rounded-xl w-full xl:w-[85%] p-6 flex flex-col aspect-[20/9] justify-center items-center`}>
          <input
            type="radio"
            name="language"
            value="malayali"
            checked={selected === 'malayali'}
            onChange={handleLanguageChange}
          />
          <h1>Kannada</h1>
          <p className={`${selected === "malayali" ? "text-white" : "text-light"} font-medium text-mediumSubheading`}>(Kannada)</p>
        </label>
        <label className={`${selected === "bengali" ? "bg-meetzen-primary text-white" : "text-dark bg-hover-bg"} lang__cards font-bold text-heading  rounded-xl w-full xl:w-[85%] p-6 flex flex-col aspect-[20/9] justify-center items-center`}>
          <input
            type="radio"
            name="language"
            value="bengali"
            checked={selected === 'bengali'}
            onChange={handleLanguageChange}
          />
          <h1>Bengali</h1>
          <p className={`${selected === "bengali" ? "text-white" : "text-light"} font-medium text-mediumSubheading`}>(Bengali)</p>
        </label>
        {/* Add more languages as needed */}
      </div>

    </>
  );
};

export default SelectLanguage;
