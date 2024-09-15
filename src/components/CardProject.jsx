import React from 'react';

const CardProject = ({ title, description, link, github }) => {
  return (
    <div className='border cursor-pointer border-gray-200 hover:border-[#986DFF] transition-all duration-300 rounded-lg group px-4 py-4 bg-white shadow shadow-gray-200 text-gray-700'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-lg font-semibold mb-2'>{title}</h1>
        <svg className='rotate-45 group-hover:scale-125 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512">
          <path className='group-hover:fill-[#986DFF] fill-gray-400' d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
        </svg>
      </div>
      <p className='text-xs'>{description}</p>

      <div className='flex gap-4 mt-6'>
        {github && (
          <a href={github} target='_blank' rel='noopener noreferrer' className='bg-[#986DFF] hover:bg-[#7c57d2] transition-all duration-300 text-white rounded-md flex justify-center items-center w-24 py-1 text-xs font-semibold'>
            GitHub
          </a>
        )}
        {link && (
          <a href={link} target='_blank' rel='noopener noreferrer' className='bg-[#986DFF] hover:bg-[#7c57d2] transition-all duration-300 text-white rounded-md flex justify-center items-center w-24 py-1 text-xs font-semibold'>
            Site
          </a>
        )}
      </div>
    </div>
  );
};

export default CardProject;
