
import { CircleDashed, PanelRight, Plus } from "lucide-react";
import { CgLink } from "react-icons/cg";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";
import { TbCopyXFilled, TbCube } from "react-icons/tb";
import DropdownItem from "../components/DropdownItem";
import { MdOutlineLabel, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { TbListDetails, TbRepeat, TbRelationManyToMany, TbCircleDashed } from "react-icons/tb";
import FilterDropdown from "../components/FilterDropdown";
import { FiSearch, FiFilter, FiUser, FiFlag, FiList, FiUsers, FiAlertCircle, FiArrowRightCircle, FiChevronRight, FiBell, FiLink } from "react-icons/fi";
import { FaUserPen } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi";
import RightSidebar from "../components/RightSidebar";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";


function Project() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(30); // percent
    const minSidebarWidth = 20;
    const maxSidebarWidth = 80;
    const handleDragMouseDown = (e) => {
        e.preventDefault();
        const container = document.getElementById('projects-flex-container');
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const totalWidth = rect.width;
        function onMouseMove(e2) {
            const mouseX = e2.clientX - rect.left;
            let newWidth = 100 - (100 * mouseX / totalWidth);
            newWidth = Math.max(30, Math.min(maxSidebarWidth, newWidth));
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
        <div className="py-2 px-2 w-full h-full">
            <div className="h-full flex flex-col border-1 border-zinc-800 rounded-sm bg-zinc-950">
                <div className="flex justify-between w-full pr-6 py-1 pl-8 border-b-1 border-zinc-800 ">
                    <div className="flex gap-4">
                        <div className="flex gap-3 items-center">
                            <p className="text-zinc-50 font-medium text-xs cursor-default"> Projects</p>
                        </div>
                        <div className="flex gap-3 items-center border-1 border-zinc-800 bg-zinc-900 px-2  py-0.5 rounded-lg">
                            <TbCube className=" text-zinc-400 " />
                            <p className="text-zinc-50 font-medium text-xs cursor-default"> All Projects</p>
                        </div>
                        <div className="flex gap-3 items-center  hover:bg-zinc-900 px-2  py-1 rounded-lg group">
                            <TbCopyXFilled className=" rotate-225 text-zinc-600 group-hover:text-white" />
                            <p className="text-zinc-600 font-medium text-xs group-hover:text-zinc-50 cursor-default"> New View</p>
                        </div>
                        <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group"></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group">
                            <CgLink className="text-zinc-400 size-5 group-hover:text-white" />
                        </div>
                        <div className="flex gap-2 items-center  hover:bg-zinc-900 px-2  py-1 rounded-lg group">
                            <Plus className=" text-zinc-400 group-hover:text-white size-4" />
                            <p className="text-zinc-200 text-xs font-medium cursor-default"> Add project</p>
                        </div>
                        <div className="h-4 w-0.5 bg-zinc-800" />
                        <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group cursor-pointer" onClick={() => setShowSidebar((prev) => !prev)}>
                            <PanelRight className="text-zinc-400 size-4 group-hover:text-white" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border-b-1 border-zinc-800 pr-6 py-2 pl-8">
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
                                label={<span className="cursor-default">Status</span>}
                                rightIcon
                            />
                            <DropdownItem icon={<FiUser className="text-zinc-400" />} label={<span className="cursor-default">Assignee</span>} rightIcon />
                            <DropdownItem icon={<FaUserPen className="text-zinc-400" />} label={<span className="cursor-default">Creator</span>} rightIcon />
                            <DropdownItem icon={<HiChartBar className="text-zinc-400" />} label={<span className="cursor-default">Priority</span>} rightIcon />
                            <DropdownItem icon={<MdOutlineLabel className="text-zinc-400" />} label={<span className="cursor-default">Labels</span>} rightIcon />
                            <DropdownItem icon={<FiList className="text-zinc-400" />} label={<span className="cursor-default">Content</span>} />
                            <DropdownItem icon={<TbCube className="text-zinc-400" />} label={<span className="cursor-default">Project</span>} rightIcon />
                            <DropdownItem icon={<TbCircleDashed className="text-zinc-400" />} label={<span className="cursor-default">Project status</span>} rightIcon />
                            <DropdownItem icon={<HiChartBar className="text-zinc-400" />} label={<span className="cursor-default">Project priority</span>} rightIcon />
                            <DropdownItem icon={<TbListDetails className="text-zinc-400" />} label={<span className="cursor-default">Project milestone name</span>} />
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
                    <div className="flex items-center gap-2 border-1 border-zinc-800 hover:bg-zinc-800 bg-zinc-900 px-2  py-0.5 rounded-lg">
                        <HiAdjustmentsHorizontal className="text-zinc-400 size-5" />
                        <p className="text-zinc-400 text-xs cursor-default">Display</p>
                    </div>
                </div>

                <div className="flex h-full overflow-hidden" id="projects-flex-container">
                    <div
                        className={
                            "flex flex-col justify-center h-full gap-4 flex-1 transition-all duration-300 " +
                            (showSidebar
                                ? "px-[22%] items-center" // Not centered when sidebar is open
                                : "px-[37%] items-center" // Centered when sidebar is closed
                            )
                        }
                    >
                        <div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 91 95" aria-label="No projects illustration" className="size-23 pr-6"><path fill="lch(4.8% 0.7 272)" fill-rule="evenodd" d="M10.7 49c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9C0 70.3 0 69 0 66.2v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Z" clip-rule="evenodd"></path><path fill="lch(62.6% 1.35 272 / 1)" fill-rule="evenodd" d="M10.7 49c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9C0 70.3 0 69 0 66.2v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Zm13.4 1.3 3.6 2a18 18 0 0 1 4.4 2.7l.7.7L22 61.1l-.8.4c-2 1-4.4 1-6.4 0l-1-.4-11-5.5.5-.6c.8-.7 1.8-1.3 4.4-2.7l3.7-2a19 19 0 0 1 4.8-2.2c1-.2 2-.2 3 0 1.2.2 2.2.8 4.9 2.2ZM2 56.8l-.3.6c-.3 1-.3 2-.3 4.8v4c0 2.8 0 3.9.3 4.8.4.9.9 1.7 1.5 2.4.8.8 1.8 1.3 4.4 2.7l3.7 2a19 19 0 0 0 4.8 2.2l.8.1.2-11.4c0-2.8-1.5-5.3-4-6.6l-11-5.6Zm16.6 23.6.6-.1c1-.2 2.1-.8 4.8-2.2l3.6-2a18 18 0 0 0 4.4-2.7 6 6 0 0 0 1.5-2.4c.4-.9.4-2 .4-4.8v-4a15.7 15.7 0 0 0-.5-5.1l-10.9 5.4a7.2 7.2 0 0 0-3.9 6.4v11.5Z" clip-rule="evenodd"></path><path fill="lch(4.8% 0.7 272)" fill-rule="evenodd" d="M56.7 49c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9C0 70.3 0 69 0 66.2v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Z" clip-rule="evenodd"></path><path fill="lch(62.6% 1.35 272 / 1)" fill-rule="evenodd" d="M56.7 49c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9c-.4-1.2-.4-2.6-.4-5.3v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Zm13.4 1.3 3.6 2a18 18 0 0 1 4.4 2.7l.7.7L68 61.1l-.8.4c-2 1-4.4 1-6.4 0l-1-.4-11-5.5.5-.6c.8-.7 1.8-1.3 4.4-2.7l3.7-2a19 19 0 0 1 4.8-2.2c1-.2 2-.2 3 0 1.2.2 2.2.8 4.9 2.2Zm-22 6.5-.3.6c-.3 1-.3 2-.3 4.8v4c0 2.8 0 3.9.3 4.8.4.9.9 1.7 1.5 2.4.8.8 1.8 1.3 4.4 2.7l3.7 2a19 19 0 0 0 4.8 2.2l.8.1.2-11.4c0-2.8-1.5-5.3-4-6.6l-11.1-5.6Zm16.6 23.6.6-.1c1-.2 2.1-.8 4.8-2.2l3.6-2a18 18 0 0 0 4.4-2.7 6 6 0 0 0 1.5-2.4c.4-.9.4-2 .4-4.8v-4a15.7 15.7 0 0 0-.5-5.1l-10.9 5.4a7.2 7.2 0 0 0-3.9 6.4v11.5Z" clip-rule="evenodd"></path><path fill="lch(4.8% 0.7 272)" fill-rule="evenodd" d="M33.7 62c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9c-.4-1.2-.4-2.6-.4-5.3v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Z" clip-rule="evenodd"></path><path fill="lch(62.6% 1.35 272 / 1)" fill-rule="evenodd" d="M33.7 62c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9c-.4-1.2-.4-2.6-.4-5.3v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Zm13.4 1.3 3.6 2a18 18 0 0 1 4.4 2.7l.7.7L45 74.1l-.8.4c-2 1-4.4 1-6.4 0l-1-.4-11-5.5.5-.6c.8-.7 1.8-1.3 4.4-2.7l3.7-2a19 19 0 0 1 4.8-2.2c1-.2 2-.2 3 0 1.2.2 2.2.8 4.9 2.2Zm-22 6.5-.3.6c-.3 1-.3 2-.3 4.8v4c0 2.8 0 3.9.3 4.8.4.9.9 1.7 1.5 2.4.8.8 1.8 1.3 4.4 2.7l3.7 2a19 19 0 0 0 4.8 2.2l.8.1.2-11.4c0-2.8-1.5-5.3-4-6.6l-11.1-5.6Zm16.6 23.6.6-.1c1-.2 2.1-.8 4.8-2.2l3.6-2a18 18 0 0 0 4.4-2.7 6 6 0 0 0 1.5-2.4c.4-.9.4-2 .4-4.8v-4a15.7 15.7 0 0 0-.5-5.1l-10.9 5.4a7.2 7.2 0 0 0-3.9 6.4v11.5Z" clip-rule="evenodd"></path><path fill="lch(4.8% 0.7 272)" fill-rule="evenodd" d="M33.7 12c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9c-.4-1.2-.4-2.6-.4-5.3v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Z" clip-rule="evenodd"></path><path fill="lch(62.6% 1.35 272 / 1)" fill-rule="evenodd" d="M33.7 12c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9c-.4-1.2-.4-2.6-.4-5.3v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Zm13.4 1.3 3.6 2a18 18 0 0 1 4.4 2.7l.7.7L45 24.1l-.8.4c-2 1-4.4 1-6.4 0l-1-.4-11-5.5.5-.6c.8-.7 1.8-1.3 4.4-2.7l3.7-2a19 19 0 0 1 4.8-2.2c1-.2 2-.2 3 0 1.2.2 2.2.8 4.9 2.2Zm-22 6.5-.3.6c-.3 1-.3 2-.3 4.8v4c0 2.8 0 3.9.3 4.8.4.9.9 1.7 1.5 2.4.8.8 1.8 1.3 4.4 2.7l3.7 2a19 19 0 0 0 4.8 2.2l.8.1.2-11.4c0-2.8-1.5-5.3-4-6.6l-11.1-5.6Zm16.6 23.6.6-.1c1-.2 2.1-.8 4.8-2.2l3.6-2a18 18 0 0 0 4.4-2.7 6 6 0 0 0 1.5-2.4c.4-.9.4-2 .4-4.8v-4a15.7 15.7 0 0 0-.5-5.1l-10.9 5.4a7.2 7.2 0 0 0-3.9 6.4v11.5Z" clip-rule="evenodd"></path><path fill="lch(4.8% 0.7 272)" fill-rule="evenodd" d="M66.2 4.8c2.8-.8 4.2-1.2 5.6-1.1 1.3 0 2.5.3 3.6.8 1.3.5 2.3 1.5 4.5 3.4l3.2 2.7c2.2 2 3.3 2.9 4 4a8 8 0 0 1 1.1 3.3c.2 1.3-.1 2.6-.7 5.3l-.9 3.8c-.6 2.7-.9 4-1.6 5.2a8 8 0 0 1-2.4 2.4c-1.1.7-2.5 1.1-5.3 1.9l-4 1.1c-2.9.8-4.3 1.2-5.6 1.1-1.3 0-2.5-.3-3.6-.8-1.3-.5-2.4-1.5-4.6-3.4l-3.1-2.7c-2.2-2-3.3-2.9-4-4a8 8 0 0 1-1.2-3.3c-.1-1.3.2-2.6.8-5.3l.9-3.8c.6-2.7.9-4 1.6-5.1a8 8 0 0 1 2.4-2.5c1.1-.7 2.5-1.1 5.3-1.9l4-1.1Z" clip-rule="evenodd" class="sc-iMwwLu gPasKp"></path><path fill="lch(90.65% 1.35 272 / 1)" fill-rule="evenodd" d="M66.2 4.8c2.8-.8 4.2-1.2 5.6-1.1 1.3 0 2.5.3 3.6.8 1.3.5 2.3 1.5 4.5 3.4l3.2 2.7c2.2 2 3.3 2.9 4 4a8 8 0 0 1 1.1 3.3c.2 1.3-.1 2.6-.7 5.3l-.9 3.8c-.6 2.7-.9 4-1.6 5.2a8 8 0 0 1-2.4 2.4c-1.1.7-2.5 1.1-5.3 1.9l-4 1.1c-2.9.8-4.3 1.2-5.6 1.1-1.3 0-2.5-.3-3.6-.8-1.3-.5-2.4-1.5-4.6-3.4l-3.1-2.7c-2.2-2-3.3-2.9-4-4a8 8 0 0 1-1.2-3.3c-.1-1.3.2-2.6.8-5.3l.9-3.8c.6-2.7.9-4 1.6-5.1a8 8 0 0 1 2.4-2.5c1.1-.7 2.5-1.1 5.3-1.9l4-1.1ZM79 9l3.1 2.8c2.3 2 3.2 2.7 3.7 3.6l.5.9L74.7 19h-.2l-.8.3c-2.2.5-4.5 0-6.3-1.5l-.7-.6L57 9.5l.6-.4c.9-.6 2-1 4.9-1.7l4-1.2a19 19 0 0 1 5.2-1c1 0 2 .2 3 .7 1 .4 1.9 1.2 4.2 3.1Zm-23 1.6-.3.5c-.5.8-.7 1.8-1.4 4.6l-.8 3.9c-.7 2.7-.9 3.8-.8 4.8.1.9.5 1.8 1 2.6.5.9 1.4 1.7 3.6 3.6l3.2 2.8a19 19 0 0 0 4.2 3.2l.7.2 2.7-11c.7-2.7-.3-5.6-2.4-7.3l-9.6-8Zm11.2 26.6h.5a19 19 0 0 0 5.1-1l4-1.1c3-.8 4-1.2 5-1.7.8-.6 1.4-1.3 2-2 .5-.9.7-2 1.3-4.7l1-3.8a15.7 15.7 0 0 0 .6-5.2l-11.8 3a7.2 7.2 0 0 0-5.2 5.3l-2.5 11.2Z" clip-rule="evenodd" class="sc-iMwwLu gPasKp"></path><path fill="lch(4.8% 0.7 272)" fill-rule="evenodd" d="M10.7 24c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9C0 45.3 0 44 0 41.2v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Z" clip-rule="evenodd"></path><path fill="lch(62.6% 1.35 272 / 1)" fill-rule="evenodd" d="M10.7 24c2.6-1.4 3.9-2 5.2-2.4 1.2-.2 2.5-.2 3.7 0 1.3.3 2.6 1 5.2 2.4l3.7 2c2.5 1.3 3.8 2 4.7 3a8 8 0 0 1 1.8 2.9c.5 1.2.5 2.6.5 5.3v4c0 2.7 0 4.1-.5 5.3-.3 1.1-1 2.1-1.8 3-1 1-2.2 1.6-4.7 3l-3.7 2c-2.6 1.3-3.9 2-5.2 2.3-1.2.2-2.5.2-3.7 0a23 23 0 0 1-5.2-2.4l-3.7-2c-2.5-1.3-3.8-2-4.7-3a8 8 0 0 1-1.9-2.9C0 45.3 0 44 0 41.2v-4c0-2.7 0-4 .4-5.3.4-1 1-2 1.9-3 .9-.9 2.2-1.6 4.7-3l3.7-2Zm13.4 1.3 3.6 2a18 18 0 0 1 4.4 2.7l.7.7L22 36.1l-.8.4c-2 1-4.4 1-6.4 0l-1-.4-11-5.5.5-.6c.8-.7 1.8-1.3 4.4-2.7l3.7-2a19 19 0 0 1 4.8-2.2c1-.2 2-.2 3 0 1.2.2 2.2.8 4.9 2.2ZM2 31.8l-.3.6c-.3 1-.3 2-.3 4.8v4c0 2.8 0 3.9.3 4.8.4.9.9 1.7 1.5 2.4.8.8 1.8 1.3 4.4 2.7l3.7 2a19 19 0 0 0 4.8 2.2l.8.1.2-11.4c0-2.8-1.5-5.3-4-6.6l-11-5.6Zm16.6 23.6.6-.1c1-.2 2.1-.8 4.8-2.2l3.6-2a18 18 0 0 0 4.4-2.7 6 6 0 0 0 1.5-2.4c.4-.9.4-2 .4-4.8v-4a15.7 15.7 0 0 0-.5-5.1l-10.9 5.4a7.2 7.2 0 0 0-3.9 6.4v11.5Z" clip-rule="evenodd"></path><path fill="lch(4.8% 0.7 272)" fill-rule="evenodd" d="M33.7 37.05C36.3 35.65 37.6 35.05 38.9 34.65C40.1 34.45 41.4 34.45 42.6 34.65C43.9 34.95 45.2 35.65 47.8 37.05L51.5 39.05C54 40.35 55.3 41.05 56.2 42.05C57.0016 42.8759 57.6156 43.8651 58 44.95C58.5 46.15 58.5 47.55 58.5 50.25V54.25C58.5 56.95 58.5 58.35 58 59.55C57.7 60.65 57 61.65 56.2 62.55C55.2 63.55 54 64.15 51.5 65.55L47.8 67.55C45.2 68.85 43.9 69.55 42.6 69.85C41.4 70.05 40.1 70.05 38.9 69.85C37.0734 69.2698 35.3266 68.4635 33.7 67.45L30 65.45C27.5 64.15 26.2 63.45 25.3 62.45C24.4623 61.6338 23.8137 60.6439 23.4 59.55C23 58.35 23 56.95 23 54.25V50.25C23 47.55 23 46.25 23.4 44.95C23.8 43.95 24.4 42.95 25.3 41.95C26.2 41.05 27.5 40.35 30 38.95L33.7 36.95V37.05Z" clip-rule="evenodd"></path><path fill="lch(62.6% 1.35 272 / 1)" fill-rule="evenodd" d="M33.7 37.05C36.3 35.65 37.6 35.05 38.9 34.65C40.1 34.45 41.4 34.45 42.6 34.65C43.9 34.95 45.2 35.65 47.8 37.05L51.5 39.05C54 40.35 55.3 41.05 56.2 42.05C57.0016 42.8759 57.6156 43.8651 58 44.95C58.5 46.15 58.5 47.55 58.5 50.25V54.25C58.5 56.95 58.5 58.35 58 59.55C57.7 60.65 57 61.65 56.2 62.55C55.2 63.55 54 64.15 51.5 65.55L47.8 67.55C45.2 68.85 43.9 69.55 42.6 69.85C41.4 70.05 40.1 70.05 38.9 69.85C37.0734 69.2698 35.3266 68.4635 33.7 67.45L30 65.45C27.5 64.15 26.2 63.45 25.3 62.45C24.4623 61.6338 23.8137 60.6439 23.4 59.55C23 58.35 23 56.95 23 54.25V50.25C23 47.55 23 46.25 23.4 44.95C23.8 43.95 24.4 42.95 25.3 41.95C26.2 41.05 27.5 40.35 30 38.95L33.7 36.95V37.05ZM47.1 38.35L50.7 40.35C52.2888 41.0339 53.7707 41.9433 55.1 43.05L55.8 43.75L45 49.15L44.2 49.55C42.2 50.55 39.8 50.55 37.8 49.55L36.8 49.15L25.8 43.65L26.3 43.05C27.1 42.35 28.1 41.75 30.7 40.35L34.4 38.35C35.8898 37.3968 37.5054 36.6564 39.2 36.15C40.2 35.95 41.2 35.95 42.2 36.15C43.4 36.35 44.4 36.95 47.1 38.35ZM25.1 44.85L24.8 45.45C24.5 46.45 24.5 47.45 24.5 50.25V54.25C24.5 57.05 24.5 58.15 24.8 59.05C25.2 59.95 25.7 60.75 26.3 61.45C27.1 62.25 28.1 62.75 30.7 64.15L34.4 66.15C35.8898 67.1032 37.5054 67.8437 39.2 68.35L40 68.45L40.2 57.05C40.2 54.25 38.7 51.75 36.2 50.45L25.1 44.85ZM41.7 68.45L42.3 68.35C43.3 68.15 44.4 67.55 47.1 66.15L50.7 64.15C52.2888 63.4661 53.7707 62.5567 55.1 61.45C55.7842 60.7811 56.2985 59.9582 56.6 59.05C57 58.15 57 57.05 57 54.25V50.25C57.1138 48.5341 56.9449 46.8111 56.5 45.15L45.6 50.55C44.425 51.1559 43.4396 52.0736 42.7516 53.2026C42.0637 54.3315 41.6999 55.628 41.7 56.95V68.45Z" clip-rule="evenodd"></path></svg>

                            <div className="flex flex-col gap-3 flex-wrap">

                                <h2 className="text-zinc-300 text-lg font-medium">Projects</h2>

                                <p className="text-zinc-400 text-sm font-medium">Projects are larger units of work with a clear outcome, such as a new feature you want to ship. They can be shared across multiple teams and are comprised of issues and optional documents.</p>

                            </div>

                            <div className="flex gap-10 pt-6">
                                <button className="bg-indigo-500 border-1 border-indigo-400 px-4 py-1 rounded-sm text-center text-sm text-white font-medium">Create a new project</button>
                                <button className="bg-zinc-900 rounded-sm text-center text-sm font-medium border-1 border-zinc-800 py-1 px-4 text-white">Documentation</button>
                            </div>
                        </div>


                    </div>
                    {showSidebar && (
                        <RightSidebar
                            sidebarWidth={sidebarWidth}
                            handleDragMouseDown={handleDragMouseDown}
                        >

                            <div className="flex pt-4 px-4">
                                <div className="bg-zinc-900 rounded-xs px-2 pb-0.5">
                                    <p className="text-white text-sm">Projects</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 px-8 pt-4 pb-8  border-b border-zinc-800">
                                <TbCube className=" text-lime-600 size-4 " />
                                <span className="text-zinc-100 font-medium text-base flex-1">Sandhiya</span>
                                <FaRegStar className="text-zinc-400 size-5.5 rounded-sm hover:bg-zinc-800 p-1  hover:text-zinc-100" />
                            </div>
                        </RightSidebar>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Project;




