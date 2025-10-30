import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

const HomePage: React.FC = () => {
  return (
    <div className=" mx-auto bg-white min-h-screen flex items-start justify-center pt-[100px]">
      <div className="bg-white items-center w-fit h-fit shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A] rounded-[6px] border-[1px] border-[#EEEEEE] py-[10px] px-[5px] flex flex-col">
        <Checkbox label="All pages" />
        <div className="w-[370px] py-[10px] px-[10px]">
          <div className="border-t border-[#CDCDCD]" />
        </div>
        <div className="flex flex-col justify-between">
          {Array.from({ length: 4 }, (_, i) => (
            <Checkbox key={i} label={`Page ${i + 1}`} />
          ))}
        </div>
        <div className="w-[370px] py-[10px] px-[10px]">
          <div className="border-t border-[#CDCDCD]" />
        </div>
        <div className="py-[10px] px-[15px]">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
