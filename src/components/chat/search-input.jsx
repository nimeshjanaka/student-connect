"use client";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { FaArrowUp } from "react-icons/fa";



const SeacrhInput = () => {
  

  return (
    <div className=" flex items-center text-black bg-slate-300  max-w-screen h-15  rounded-lg">

      <Input
        className="bg-transparent text-black w-full focus:outline-none text-xs border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"

        placeholder="Seacrh"
      />

      <Button className=" rounded-3xl bg-transparent hover:bg-slate-200">
        <FaArrowUp className="w-4 h-4  " color="black" />
      </Button>
    </div>
  );
};

export default SeacrhInput;