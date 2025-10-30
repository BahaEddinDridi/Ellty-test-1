import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

const HomePage: React.FC = () => {

  return (
    <div className="max-w-[400px] mx-auto mt-[32px]">
      <div className="mt-[24px]">
        <Button />
      </div>
      <div className="mt-[24px]">
        <Checkbox label="Checkbox 1" />
        <Checkbox label="Checkbox 1" />
        <Checkbox label="Checkbox 1" />
        <Checkbox label="Checkbox 1" />
      </div>
    </div>
  );
};

export default HomePage;
