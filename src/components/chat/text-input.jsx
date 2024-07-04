"use client";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { FaArrowUp } from "react-icons/fa";

const TextInput = ({ onInputSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const defaultPlaceholder = 'Enter your text here';
  const [placeholder,setPlaceholder] = useState(defaultPlaceholder)

  const handleInputSubmit = () => {
    onInputSubmit(inputValue);
    setInputValue('');
    setPlaceholder(defaultPlaceholder)

  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className=" flex items-center text-black  rounded-md bg-slate-300 px-4 py-2 max-w-screen h-15 ml-5 ">
      <Input
        className="bg-transparent text-black w-full focus:outline-none text-xs border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />

      <button
        className=" rounded-3xl bg-transparent"
        onClick={handleInputSubmit}
      >
        <FaArrowUp className="w-4 h-4 " color="black" />
      </button>
    </div>
  );
};

export default TextInput;
