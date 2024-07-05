"use client"

import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { FaSearch } from "react-icons/fa";


const SearchNewFriends = () => {
  

  return (
    <div className="w-1/2 flex items-center text-black bg-slate-300  max-w-screen h-15  rounded-lg mb-4">

      <Input
        className="bg-transparent text-black w-full focus:outline-none text-xs border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"

        placeholder="Seacrh"
      />

      <Button className=" rounded-3xl bg-transparent hover:bg-slate-200">
        <FaSearch  className="w-4 h-4  " color="black" />
      </Button>
    </div>
  );
};

export default SearchNewFriends;