import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";

const DropdownItem = ({ icon, label , rightIcon}) => (
  <div className="flex items-center gap-2 px-2 py-1 mx-1 rounded hover:bg-zinc-800 text-zinc-200 cursor-default">
    {icon}
    <span>{label}</span>
    {rightIcon ? <IoMdArrowDropright className="ml-auto text-zinc-500" /> : '' }
  </div>
);

export default DropdownItem; 