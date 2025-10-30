import React from "react";

const Button: React.FC = () => {
  return (
    <button
      className="flex items-center justify-center gap-[10px] px-[20px] py-[10px] w-[340px] h-[40px]
     bg-[#FFCE22] text-[#1F2128] rounded-[4px] hover:bg-[#FFD84D] active:bg-[#FFCE22] transition-none
     font-montserrat font-normal text-[14px] leading-[1.3] tracking-normal"
    >
      Done
    </button>
  );
};

export default Button;
