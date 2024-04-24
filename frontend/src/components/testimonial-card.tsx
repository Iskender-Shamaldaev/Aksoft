import React from 'react';
import {Avatar} from "@material-tailwind/react";

const TestimonialCard = ({ author, isActive, onClick, imgSrc, imgAlt }) => {
  return (
    <>
      <Avatar
        variant="rounded"
        src={imgSrc}
        alt={imgAlt}
        size="sm"
        className={`cursor-pointer ${isActive ? "opacity-100" : "opacity-50"}`}
        onClick={onClick}
      />
      <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
    </>
  );
};

export default TestimonialCard;
