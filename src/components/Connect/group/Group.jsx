"use client";
import SeacrhInput from "../../chat/search-input";
import GroupContent from "./group-content";
const Group = () => {
  return (
    <div>
      <div className="flex justify-center  ">
        <div className="w-1/2">
          <SeacrhInput />
        </div>
      </div>
      <div className="flex justify-center ">
        <GroupContent />
      </div>
    </div>
  );
};

export default Group;
