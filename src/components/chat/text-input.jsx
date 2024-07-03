"use client";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { FaArrowUp } from "react-icons/fa";



const TextInput = () => {
  

  return (
    <div className=" flex items-center text-black bg-slate-300 px-4 py-2 max-w-screen h-15 ml-5 mt-40">

      <Input
        className="bg-transparent text-black w-full focus:outline-none text-xs border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"

        placeholder="Type Here"
      />

      <Button className=" rounded-3xl bg-transparent">
        <FaArrowUp className="w-4 h-4 " color="black" />
      </Button>
    </div>
  );
};

export default TextInput;