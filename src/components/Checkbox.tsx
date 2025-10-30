import React, { useState } from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label
      className="flex bg-white items-center justify-between w-[370px] h-[42px] px-[22px] pr-[15px] py-[8px] cursor-pointer group"
    >
        <span
        className="
          text-gray-800 font-montserrat font-normal text-[14px] leading-[130%] align-middle"
      >
        {label}
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only "
      />
      {/* for the outline when pressed with color #2469F6 i added 1A at the end to make it 10% opacity */}
      <span
        className={`w-[25px] h-[25px] rounded-[6px] border flex items-center 
    justify-center ${
      checked
        ? "bg-[#2469F6] text-white border-[#2469F6] group-hover:bg-[#5087F8] group-hover:border-[#5087F8] group-active:bg-[#2469F6] group-active:border-[#2469F6] group-active:outline group-active:outline-3 group-active:outline-[#2469F61A]"
        : "bg-white text-white border-[#CDCDCD] group-hover:border-[#BDBDBD] group-hover:text-[#E3E3E3] group-active:border-[#BDBDBD] group-active:text-[#878787] group-active:outline group-active:outline-3 group-active:outline-[#2469F61A]"
    }`}
      >
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 7.1L6.53451 12.4672C6.55497 12.4854 6.58626 12.4837 6.6047 12.4635L17.5 0.5"
            stroke="currentColor"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </label>
  );
};
export default Checkbox;
