import { PanelRight} from "lucide-react";
import { FaRegCircle, FaSortDown } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { TbSquareDashed } from "react-icons/tb";
import DropdownItem from "../components/DropdownItem";
import { MdOutlineLabel, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import {  TbListDetails, TbRepeat, TbRelationManyToMany, TbCube, TbCopyXFilled,  TbCircleDashed } from "react-icons/tb";
import FilterDropdown from "../components/FilterDropdown";
import { FiSearch, FiFilter, FiUser, FiFlag,  FiList,  FiUsers,  FiAlertCircle, FiArrowRightCircle, FiChevronRight, FiBell, FiLink } from "react-icons/fi";
import { FaUserPen } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi";
import { CircleDashed } from "lucide-react";


function MyIssues() {
    return (
        <>
            <div className="py-2 px-2 w-full h-full">
                <div className=" h-full flex flex-col border-1 border-zinc-800 rounded-sm bg-zinc-950">
                    <div className=" flex justify-between w-full pr-6 py-2 pl-8 border-b-1 border-zinc-800 ">
                        <div className="flex gap-3">
                            <p className="text-white font-medium text-sm">My Issues</p>

                            <div className="flex gap-3 items-center border-1 border-zinc-800  hover:bg-zinc-900 px-2 py-0.5  rounded-sm group">
                                <p className="text-zinc-500 font-medium text-xs group-hover:text-zinc-50 cursor-default">Assigned</p>
                            </div>
                            <div className="flex gap-3 items-center border-1 border-zinc-800  hover:bg-zinc-900 px-2 py-0.5   rounded-sm group">
                                <p className="text-zinc-500 font-medium text-xs group-hover:text-zinc-50 cursor-default">Created</p>
                            </div>
                            <div className="flex gap-3 items-center border-1 border-zinc-800  hover:bg-zinc-900 px-2 py-0.5  rounded-sm group">
                                <p className="text-zinc-500 font-medium text-xs group-hover:text-zinc-50 cursor-default">Subscribed</p>
                            </div>

                            <div className="flex gap-3 items-center border-1 border-zinc-800 bg-zinc-900 px-2  rounded-sm">
                                <p className="text-zinc-50 font-medium text-xs cursor-default"> Activity</p>
                            </div>

                        </div>

                        <PanelRight className="text-zinc-400 size-4 group-hover:text-white" />

                    </div>

                    <div className="flex items-center justify-between border-b-1 border-zinc-800 pr-6 py-1.5 pl-8">
                    <FilterDropdown
                            button={
                                <div className="flex items-center gap-2 hover:bg-zinc-900 px-2 py-1 rounded-lg">
                                    <IoFilter className="text-zinc-400 group-hover:text-zinc-50" />
                                    <span className="text-zinc-300 text-xs">Filter</span>
                                </div>
                            }
                        >
                            {/* Fixed search bar */}
                            <div className="fixed flex items-center gap-2 w-full border-b-1 border-zinc-800 rounded-t-xl bg-zinc-900 px-4 py-2 py-2sticky top-0 z-10">
                                
                                <input
                                    className="bg-transparent outline-none text-zinc-200 text-sm flex-1"
                                    placeholder="Filter..."
                                />
                                <span className="border border-zinc-700 rounded px-1 text-xs text-zinc-400 ml-2">F</span>
                            </div>
                            {/* AI Filter */}
                            <div className="flex mt-10 px-1 border-b-1 w-full border-zinc-800  text-zinc-200 cursor-default mb-1">
                                <div className="flex items-center gap-2 p-1 m-1 w-full hover:bg-zinc-800 rounded">
                                <FiSearch className="text-zinc-400" />
                                <span>AI Filter</span>
                                </div>
                            </div>
                            {/* Main filter options */}
                            <div className="flex flex-col gap-1 mb-2">
                                <DropdownItem
                                    icon={<CircleDashed className="text-zinc-400 size-4" />}
                                    label="Status"
                                    rightIcon
                                />
                                <DropdownItem icon={<FiUser className="text-zinc-400" />} label="Assignee" rightIcon/>
                                <DropdownItem icon={<FaUserPen className="text-zinc-400" />} label="Creator" rightIcon/>
                                <DropdownItem icon={<HiChartBar className="text-zinc-400" />} label="Priority" rightIcon/>
                                <DropdownItem icon={<MdOutlineLabel className="text-zinc-400" />} label="Labels" rightIcon/>
                                <DropdownItem icon={<FiList className="text-zinc-400" />} label="Content" />
                                <DropdownItem icon={<TbCube className="text-zinc-400" />} label="Project" rightIcon />
                                <DropdownItem icon={<TbCircleDashed className="text-zinc-400" />} label="Project status" rightIcon />
                                <DropdownItem icon={<HiChartBar className="text-zinc-400" />} label="Project priority" rightIcon/>
                                <DropdownItem icon={<TbListDetails className="text-zinc-400" />} label="Project milestone name" />
                            </div>
                            <div className="border-t border-zinc-700 my-2" />
                            {/* Relations and sub-issues */}
                            <div className="flex flex-col gap-1">
                                <DropdownItem icon={<FiUsers className="text-zinc-400" />} label="Parent issues" />
                                <DropdownItem icon={<MdOutlineSubdirectoryArrowRight className="text-zinc-400" />} label="Sub-issues" />
                                <DropdownItem icon={<FiAlertCircle className="text-zinc-400" />} label="Blocked issues" />
                                <DropdownItem icon={<FiArrowRightCircle className="text-zinc-400" />} label="Blocking issues" />
                                <DropdownItem icon={<TbRepeat className="text-zinc-400" />} label="Recurring issues" rightIcon/>
                                <DropdownItem icon={<TbRelationManyToMany className="text-zinc-400" />} label="Issues with relations" />
                                <DropdownItem icon={<TbCopyXFilled className="text-zinc-400" />} label="Duplicates" />
                            </div>
                            {/* New date-related filter items */}
                            <div className="border-t border-zinc-700 my-2" />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Due date" />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Created date" />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Updated date" />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Started date" />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Completed date" />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Triaged date" className="bg-zinc-800" />
                            <div className="border-t border-zinc-700 my-2" />
                            <DropdownItem icon={<FiAlertCircle className="text-zinc-400" />} label="Auto-closed" />
                            <DropdownItem icon={<FiBell className="text-zinc-400" />} label="Subscribers" rightIcon/>
                            <DropdownItem icon={<FiLink className="text-zinc-400" />} label="Links" rightIcon/>
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Template" rightIcon/>
                        </FilterDropdown>
                        <div className="flex items-center gap-2 border-1 border-zinc-800 hover:bg-zinc-800 bg-zinc-900 px-2  py-0.5 rounded-sm">
                            <HiAdjustmentsHorizontal className="text-zinc-400 size-5" />
                            <p className="text-white text-xs cursor-default">Display</p>
                        </div>
                    </div>


                    <div className="flex justify-between items-center pt-2 bg-zinc-800 pl-3 pr-6 py-2">
                        <div className="flex items-center  gap-2 ">
                            <FaSortDown className="text-zinc-600 size-3 hover:text-zinc-100" />
                            <p className="text-zinc-300 text-sm font-medium cursor-default pl-2">Yesterday</p>
                            <p className="text-zinc-400 cursor-default">1</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center hover:bg-zinc-900 py-3 pr-6 pl-2">
                                <div className="flex gap-2  items-center">
                                    <TbSquareDashed className="hover:text-indigo-500 text-transparent " />
                                    <HiChartBar className="text-zinc-400 hover:text-zinc-200" />
                                    <p className="text-zinc-400 text-sm cursor-default">SAN-1</p>
                                    <FaRegCircle className="text-zinc-200 hover:text-zinc-50 size-4 " />
                                    <p className="text-white text-sm font-medium cursor-default">Welcome to Linear 👋</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className="text-zinc-400 text-xs cursor-default">Updated on Jul 10</p>
                                    <IoMdContact className="text-zinc-400 hover:text-zinc-300" />
                                </div>
                            </div>
                </div>
            </div>
        </>
    )

}

export default MyIssues;