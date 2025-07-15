import { CircleDashed, PanelRight, Plus } from "lucide-react"
import { FaRegCircle, FaRegStar, FaSortDown, FaYenSign } from "react-icons/fa"
import { FaCircleHalfStroke, FaUserPen } from "react-icons/fa6"
import { HiAdjustmentsHorizontal, HiChartBar, HiOutlineSquare2Stack } from "react-icons/hi2"
import { HiBell } from "react-icons/hi";
import { IoMdArrowDropright, IoMdContact } from "react-icons/io"
import { LuCircleDashed } from "react-icons/lu"
import { TbCopyXFilled, TbSquareDashed } from "react-icons/tb"
import { useRef, useState, useEffect } from "react";
import FilterDropdown from "../components/FilterDropdown";
import { FiSearch, FiFilter, FiUser, FiFlag, FiList, FiUsers, FiAlertCircle, FiArrowRightCircle, FiBell, FiLink } from "react-icons/fi";
import DropdownItem from "../components/DropdownItem";
import { MdOutlineLabel, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { TbCube, TbListDetails, TbRepeat, TbRelationManyToMany, TbCopyXFilled as TbCircleDashed } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import RightSidebar from "../components/RightSidebar";

const tasks = [
    { id: "SAN-1", title: "Welcome to Linear 👋", date: "Jun 17" },
    { id: "SAN-2", title: "3 ways to navigate Linear: Command menu, keyboard or mouse", date: "Jun 17" },
    { id: "SAN-3", title: "Connect to Slack", date: "Jun 17" },
    { id: "SAN-4", title: "Connect GitHub or GitLab", date: "Jun 17" },
    { id: "SAN-5", title: "Customize settings", date: "Jun 17" },
    { id: "SAN-6", title: "Use Cycles to focus work over n–weeks", date: "Jun 17" },
    { id: "SAN-7", title: "Use Projects to organize work for features or releases", date: "Jun 17" },
    { id: "SAN-8", title: "Invite your teammates", date: "Jun 17" },
    { id: "SAN-9", title: "Next steps", date: "Jun 17" }
];

function Issues() {

    const [dropDownOpen, setDropDownOpen] = useState(true)
    const [showSidebar, setShowSidebar] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(40); // percent
    const minSidebarWidth = 20;
    const maxSidebarWidth = 80;
    const dropdownRef = useRef(null)

    // Drag logic (fixed)
    const handleDragMouseDown = (e) => {
        e.preventDefault();
        const container = document.getElementById('issues-flex-container');
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const totalWidth = rect.width;

        function onMouseMove(e2) {
            const mouseX = e2.clientX - rect.left;
            let newWidth = 100 - (100 * mouseX / totalWidth);
            // Only allow increasing width (not less than 40%)
            newWidth = Math.max(40, Math.min(maxSidebarWidth, newWidth));
            setSidebarWidth(newWidth);
        }
        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = '';
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.body.style.cursor = 'col-resize';
    };

    return (
        <>
            <div className="py-2 px-2 w-full h-full">
                <div className=" h-full flex flex-col  border-1 border-zinc-800 rounded-sm bg-zinc-950">
                    <div className=" flex justify-between w-full pr-6 py-2 pl-8 border-b-1 border-zinc-800 ">
                        <div className="flex gap-2">
                            <div className="flex gap-3 items-center border-1 border-zinc-800 hover:bg-zinc-900 px-2  py-1 rounded-lg group">
                                <HiOutlineSquare2Stack className=" rotate-180 text-zinc-400 group-hover:text-white" />
                                <p className="text-zinc-400 text-sm cursor-default"> All Issues</p>
                            </div>

                            <div className="flex gap-3 items-center border-1 border-zinc-800 bg-zinc-900 px-2  py-1 rounded-lg ">
                                <FaCircleHalfStroke className=" rotate-180 text-zinc-400 " />
                                <p className="text-zinc-100 text-sm cursor-default"> Active</p>
                            </div>

                            <div className="flex gap-3 items-center border-1 border-zinc-800 hover:bg-zinc-900 px-2  py-1 rounded-lg group">
                                <LuCircleDashed className=" rotate-180 text-zinc-400 group-hover:text-white" />
                                <p className="text-zinc-400 text-sm cursor-default"> Backlog</p>
                            </div>

                            <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group">
                                <TbCopyXFilled className=" rotate-225 text-zinc-400 group-hover:text-white" />
                            </div>
                        </div>


                        <div className="flex gap-2 items-center">
                            <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group">
                                <HiBell className="text-zinc-400 size-4 group-hover:text-white" />
                            </div>
                            <div className="h-4 w-0.5 bg-zinc-800" />
                            <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group " onClick={() => setShowSidebar((prev) => !prev)}>
                                <PanelRight className="text-zinc-400 size-4 group-hover:text-white" />
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-between border-b-1 border-zinc-800 pr-6 py-1 pl-8">
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
                                <DropdownItem icon={<FiUser className="text-zinc-400" />} label="Assignee" rightIcon />
                                <DropdownItem icon={<FaUserPen className="text-zinc-400" />} label="Creator" rightIcon />
                                <DropdownItem icon={<HiChartBar className="text-zinc-400" />} label="Priority" rightIcon />
                                <DropdownItem icon={<MdOutlineLabel className="text-zinc-400" />} label="Labels" rightIcon />
                                <DropdownItem icon={<FiList className="text-zinc-400" />} label="Content" />
                                <DropdownItem icon={<TbCube className="text-zinc-400" />} label="Project" rightIcon />
                                <DropdownItem icon={<TbCircleDashed className="text-zinc-400" />} label="Project status" rightIcon />
                                <DropdownItem icon={<HiChartBar className="text-zinc-400" />} label="Project priority" rightIcon />
                                <DropdownItem icon={<TbListDetails className="text-zinc-400" />} label="Project milestone name" />
                            </div>
                            <div className="border-t border-zinc-700 my-2" />
                            {/* Relations and sub-issues */}
                            <div className="flex flex-col gap-1">
                                <DropdownItem icon={<FiUsers className="text-zinc-400" />} label="Parent issues" />
                                <DropdownItem icon={<MdOutlineSubdirectoryArrowRight className="text-zinc-400" />} label="Sub-issues" />
                                <DropdownItem icon={<FiAlertCircle className="text-zinc-400" />} label="Blocked issues" />
                                <DropdownItem icon={<FiArrowRightCircle className="text-zinc-400" />} label="Blocking issues" />
                                <DropdownItem icon={<TbRepeat className="text-zinc-400" />} label="Recurring issues" rightIcon />
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
                            <DropdownItem icon={<FiBell className="text-zinc-400" />} label="Subscribers" rightIcon />
                            <DropdownItem icon={<FiLink className="text-zinc-400" />} label="Links" rightIcon />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label="Template" rightIcon />
                        </FilterDropdown>
                        <div className="flex items-center gap-2 border-1 border-zinc-800 hover:bg-zinc-900 px-2  py-1 rounded-lg">
                            <HiAdjustmentsHorizontal className="text-zinc-400 size-5" />
                            <p className="text-white text-xs cursor-default">Display</p>
                        </div>
                    </div>

                    <div className="flex" id="issues-flex-container">

                        <div ref={dropdownRef} className="w-full">
                            <div className="flex justify-between items-center pt-1 bg-zinc-800 pl-3 pr-6 py-2">


                                <div className="flex items-center  gap-2 ">
                                    <FaSortDown className={` size-3 hover:text-zinc-100 transition-transform duration-300 ${dropDownOpen ? 'text-zinc-600' : '-rotate-90 text-zinc-200'}`} onClick={() => setDropDownOpen((prev) => !prev)} />
                                    <FaRegCircle className="text-zinc-200 size-4 " />
                                    <p className="text-zinc-300 text-sm cursor-default">Todo</p>
                                    <p className="text-zinc-400 cursor-default">9</p>
                                </div>
                                <div className="flex items-center gap-2 border-1 border-zinc-800 hover:bg-zinc-900 px-2  py-1 rounded-lg group">
                                    <Plus className="text-zinc-400 size-4 group-hover:text-zinc-100" />
                                </div>
                            </div>

                            <div className="flex flex-col ">
                                {tasks.map(task => (
                                    <div className={`flex justify-between items-center hover:bg-zinc-900 py-3 px-2  ${dropDownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`} key={task.id}>
                                        <div className="flex gap-2  items-center">
                                            <TbSquareDashed className="hover:text-indigo-500 text-transparent " />
                                            <HiChartBar className="text-zinc-400 hover:text-zinc-200" />
                                            <p className="text-zinc-400 text-sm cursor-default">{task.id}</p>
                                            <FaRegCircle className="text-zinc-200 hover:text-zinc-50 size-4 " />
                                            <p className="text-white text-sm font-medium cursor-default">{task.title}</p>
                                        </div>
                                        <div className="flex gap-2 items-center pr-6">
                                            <p className="text-zinc-400 text-xs cursor-default">{task.date}</p>
                                            <IoMdContact className="text-zinc-400 hover:text-zinc-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {showSidebar && (
                            <RightSidebar
                                sidebarWidth={sidebarWidth}
                                handleDragMouseDown={handleDragMouseDown}
                                className='h-[144.5%]'
                            >
                                <div className="flex pt-4 px-4">
                                    <div className="bg-zinc-900 rounded-xs px-2 pb-0.5">
                                        <p className="text-white text-sm">All issues</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-6 p-4 pb-8 border-b border-zinc-800">
                                <TbCube className=" text-lime-600 size-4 " />
                                    <span className="text-zinc-100 font-medium text-base flex-1">Sandhiya</span>
                                    <FaRegStar className="text-zinc-400 size-5.5 rounded-sm hover:bg-zinc-800 p-1  hover:text-zinc-100" />
                                </div>
                                {/* Tabs */}
                                <div className="flex px-3 pt-2 pb-1  justify-between">
                                    <button className="px-3 py-1 rounded text-xs font-medium bg-zinc-900 text-zinc-100">Assignees</button>
                                    <button className="px-3 py-1 rounded text-xs font-medium text-zinc-400 hover:text-zinc-100">Labels</button>
                                    <button className="px-3 py-1 rounded text-xs font-medium text-zinc-400 hover:text-zinc-100">Priority</button>
                                    <button className="px-3 py-1 rounded text-xs font-medium text-zinc-400 hover:text-zinc-100">Projects</button>
                                </div>
                                {/* Assignees List */}
                                <div className="flex flex-col px-2 pt-4">
                                    <div className="flex items-center justify-between px-2 py-2 rounded hover:bg-zinc-900 cursor-pointer">
                                        <span className="flex items-center gap-2 text-zinc-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368" />
                                            </svg>
                                            No assignee
                                        </span>
                                        <span className="text-zinc-400 text-sm">9</span>
                                    </div>
                                </div>
                            </RightSidebar>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Issues
