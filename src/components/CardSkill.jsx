import React from "react";

const CardSkill = ({ src, text}) => {
  return (

      <div className="rounded-lg border border-gray-200 flex  items-center py-2 gap-4 px-4">
        <img src={src} alt="" />
        <p className="text-gray-700">{text}</p>
      </div>

  );
};

export default CardSkill;
