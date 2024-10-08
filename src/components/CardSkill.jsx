import React from "react";

const CardSkill = ({ src, text}) => {
  return (

      <div className="rounded-lg cursor-pointer hover:border-[#986DFF] transition-all duration-300 border border-gray-200 flex items-center py-2 gap-4 px-4">
        <img className="w-6" src={src} alt="" />
        <p className="text-gray-700">{text}</p>
      </div>

  );
};

export default CardSkill;
