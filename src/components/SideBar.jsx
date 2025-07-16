import { ChevronDown, Cross, PanelRight, Plus, Search, SquarePen, X } from "lucide-react";
import { FaGithub, FaSortDown } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { LuInbox } from "react-icons/lu";
import { MdContacts, MdFilterCenterFocus } from "react-icons/md";
import { PiDotsSixVertical, PiDotsThree } from "react-icons/pi";
import { RiQuestionMark } from "react-icons/ri";
import { RxStack } from "react-icons/rx";
import { TbCube, TbDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FiX, FiUsers, FiUser, FiEdit2 } from "react-icons/fi";
import Tooltip from "./Tooltip";
import { AiOutlineTeam } from "react-icons/ai";


function SideBar() {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const [userDropdownOpen, setuserDropdownOpen] = useState(true);
    const [teamsDropdownOpen, setTeamsDropdownOpen] = useState(true);
    const [tryDropdownOpen, setTryDropdownOpen] = useState(true)
    const dropdownRef = useRef(null);
    const userDropdownRef = useRef(null);
    const teamsDropdownRef = useRef(null);
    const tryDropdownRef = useRef(null);

    const [openMore, setOpenMore] = useState(false)
    const moreRef = useRef(null);

    const [sidebarWidth, setSidebarWidth] = useState(220); // default width in px
    const [collapsed, setCollapsed] = useState(false);
    const sidebarRef = useRef(null);
    const isDragging = useRef(false);

    function startDrag(e) {
      isDragging.current = true;
      document.body.style.cursor = "ew-resize";
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", stopDrag);
    }

    function onDrag(e) {
      if (!isDragging.current) return;
      const minWidth = 60; // px, collapse threshold
      const maxWidth = 400; // px, max expanded
      const sidebarLeft = sidebarRef.current?.getBoundingClientRect().left || 0;
      const newWidth = e.clientX - sidebarLeft;
      if (newWidth < minWidth) {
        setCollapsed(true);
        setSidebarWidth(220); // reset for next open
        stopDrag();
      } else if (newWidth > maxWidth) {
        setSidebarWidth(maxWidth);
      } else {
        setSidebarWidth(newWidth);
      }
    }

    function stopDrag() {
      isDragging.current = false;
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
    }


    useEffect(() => {
        function handleClickOutside(event) {
            if (moreRef.current && !moreRef.current.contains(event.target)) {
                setOpenMore(false);
            }
        }
        if (openMore) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMore]);


    return (
        <>

            <div
              ref={sidebarRef}
              className="h-screen pt-4 pb-2 flex flex-col justify-between relative overflow-visible transition-all duration-200"
              style={{
                width: collapsed ? "0px" : `${sidebarWidth}px`,
                minWidth: collapsed ? "0px" : "60px",
                overflow: "hidden",
              }}
            >

                <div className="flex flex-col  gap-4">

                    <div className=" flex justify-between items-center px-3">
                        <div className="flex gap-2 items-center hover:bg-zinc-900 rounded-sm  p-1">
                            <div className="bg-indigo-500 rounded-sm p-0.5">
                                <p className="text-white text-xs">SA</p>
                            </div>
                            <p className="text-white text-sm">sandhiya </p><ChevronDown className="text-zinc-400 size-5 pt-1" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <Search className="text-zinc-500 size-6 hover:bg-zinc-900 rounded-sm p-1" />
                            <SquarePen className="text-white size-6 bg-zinc-900 hover:bg-zinc-800 p-1 rounded-lg" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-0.5 px-3 cursor-default">
                        <Tooltip text="Go to inbox" shortcut="G I">
                            <NavLink to="/inbox" className={({ isActive }) => `flex w-full gap-3 items-center px-2 py-1 rounded-sm group cursor-default hover:bg-zinc-900 ${isActive ? "bg-zinc-900" : ""}`}>
                                <LuInbox className="text-zinc-400 group-hover:text-white" />
                                <p className="text-zinc-200 text-sm cursor-default">Inbox</p>
                            </NavLink>
                        </Tooltip>
                        <Tooltip text="Go to my issues" shortcut="G M">
                            <NavLink to="/myissues" className={({ isActive }) => `flex gap-3 w-full items-center cursor-default px-2 py-1 rounded-sm group hover:bg-zinc-900 ${isActive ? "bg-zinc-900" : ""}`}>
                                <MdFilterCenterFocus className="text-zinc-400 group-hover:text-white" />
                                <p className="text-zinc-200 text-sm cursor-default">My Issues</p>
                            </NavLink>
                        </Tooltip>

                    </div>

                    <div className="flex flex-col px-3">
                        {/* Workspace Dropdown */}
                        <div ref={dropdownRef}>
                            <div
                                className="flex gap-1 items-center hover:bg-zinc-900 px-2 py-1 rounded-sm cursor-default"
                                onClick={() => setDropdownOpen((prev) => !prev)}
                            >
                                <p className="text-sm text-zinc-400 cursor-default">Workspace</p>
                                <FaSortDown className={`text-zinc-400 size-3 transition-transform duration-300 ${dropdownOpen ? '' : '-rotate-90'}`} />
                            </div>
                            <div
                                className={`transition-all flex flex-col gap-0.5 duration-300  ${dropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <Tooltip text="Go to projects" shortcut="G P">
                                    <NavLink to="/projects" className={({ isActive }) => `flex gap-3 w-full items-center px-2 py-1 cursor-default rounded-sm group hover:bg-zinc-900 ${isActive ? 'bg-zinc-900' : ''}`}>
                                        <TbCube className=" text-zinc-400 group-hover:text-white" />
                                        <p className="text-zinc-200 text-sm cursor-default">Projects</p>
                                    </NavLink>
                                </Tooltip>
                                <Tooltip text="Go to views" shortcut="G U">
                                    <NavLink to="/views" className={({ isActive }) => `flex gap-3 w-full items-center px-2 py-1 cursor-default rounded-sm group hover:bg-zinc-900 ${isActive ? 'bg-zinc-900' : ''}`}>
                                        <RxStack className=" text-zinc-400 group-hover:text-white" />
                                        <p className="text-zinc-200 text-sm cursor-default">Views</p>
                                    </NavLink>
                                </Tooltip>

                                {/* More Dropdown Button */}
                                <div className="relative" ref={moreRef}>
                                    <div
                                        className={`flex gap-3 items-center w-full px-2 py-1 cursor-pointer rounded-sm group
                                                 hover:bg-zinc-900 ${openMore ? "bg-zinc-900" : ""}`}
                                        onClick={() => setOpenMore((prev) => !prev)}
                                    >
                                        <TbDots className={`text-zinc-400 group-hover:text-white ${openMore ? "text-white" : ""}`} />
                                        <p className="text-zinc-200 text-sm cursor-default">More</p>
                                    </div>
                                    {openMore && (
                                        <div className="absolute bottom-full mb-[-95%] left-0 z-50 flex flex-col border border-zinc-900 rounded-sm bg-zinc-950 shadow-lg min-w-[180px]">
                                            <div className="flex flex-col p-1">
                                                <div className="flex items-center gap-2 rounded-sm hover:bg-zinc-800 p-2">
                                                    <AiOutlineTeam className="text-zinc-400" />
                                                    <p className="text-zinc-100 text-sm font-medium">Members</p>
                                                </div>
                                                <div className="flex items-center gap-2 rounded-sm hover:bg-zinc-800 p-2">
                                                    <MdContacts className="text-zinc-400" />
                                                    <p className="text-zinc-100 text-sm font-medium">Teams</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center border-t border-zinc-800 px-2 py-1 gap-2">
                                                <div className="flex items-center gap-2 rounded-sm hover:bg-zinc-800 p-2 w-full">
                                                    <AiOutlineTeam className="text-zinc-400" />
                                                    <p className="text-zinc-100 text-sm font-medium">Customize sidebar</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Your Teams Dropdown */}
                        <div ref={teamsDropdownRef}>
                            <div
                                className="flex gap-1 items-center hover:bg-zinc-900 py-1 rounded-sm px-5 cursor-default"
                                onClick={() => setTeamsDropdownOpen((prev) => !prev)}
                            >
                                <p className="text-sm text-zinc-400 cursor-default ">Your teams</p>
                                <FaSortDown
                                    className={`text-zinc-400 size-3 transition-transform duration-300 ${teamsDropdownOpen ? '' : '-rotate-90'}`}
                                />
                            </div>
                            <div
                                className={`transition-all duration-300  ${teamsDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="flex flex-col group">
                                    <div ref={userDropdownRef}>
                                        <div
                                            className="flex justify-between items-center pr-3 cursor-default"
                                            onClick={() => setuserDropdownOpen((prev) => !prev)}
                                        >
                                            <div className="flex gap-2 items-center ">
                                                <PiDotsSixVertical className="group-hover:text-zinc-400 text-transparent" />
                                                <div className="bg-lime-900 rounded-sm p-0.5">
                                                    <GiWorld className="text-lime-500 size-3" />
                                                </div>
                                                <p className="text-base text-white cursor-default">Sandhiya</p>
                                                <FaSortDown
                                                    className={`text-zinc-400 size-3 transition-transform duration-300 ${userDropdownOpen ? '' : '-rotate-90'}`}
                                                />
                                            </div>
                                            <PiDotsThree className="group-hover:text-zinc-400 text-transparent" />
                                        </div>
                                        <div
                                            className={`transition-all duration-300  ${userDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="flex flex-col gap-0.5 pl-6 pr-3">
                                                <Tooltip
                                                    text={
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center gap-2">
                                                                <span>All issues</span>
                                                                <span className="flex gap-1 ml-2">
                                                                    <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs font-mono">G</kbd>
                                                                    <span>then</span>
                                                                    <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs font-mono">E</kbd>
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span>Active</span>
                                                                <span className="flex gap-1 ml-2">
                                                                    <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs font-mono">G</kbd>
                                                                    <span>then</span>
                                                                    <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs font-mono">A</kbd>
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span>Backlog</span>
                                                                <span className="flex gap-1 ml-2">
                                                                    <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs font-mono">G</kbd>
                                                                    <span>then</span>
                                                                    <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs font-mono">B</kbd>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    }
                                                >
                                                    <NavLink
                                                        to="/issues"
                                                        className={({ isActive }) =>
                                                            `flex gap-3 w-full items-center cursor-default px-2 py-1 rounded-sm group hover:bg-zinc-900 ${isActive ? "bg-zinc-900" : ""
                                                            }`
                                                        }
                                                    >
                                                        <HiOutlineSquare2Stack className="rotate-180 text-zinc-400 group-hover:text-white" />
                                                        <p className="text-zinc-200 text-sm cursor-default">Issues</p>
                                                    </NavLink>
                                                </Tooltip>

                                                <Tooltip
                                                    text="Go to projects" shortcut="G P"
                                                >
                                                    <NavLink to="/projects2" className={({ isActive }) => `flex gap-3  w-full items-center cursor-default px-2 py-1 rounded-sm group hover:bg-zinc-900 ${isActive ? 'bg-zinc-900' : ''}`}>
                                                        <TbCube className="text-zinc-400 group-hover:text-white" />
                                                        <p className="text-zinc-200 text-sm cursor-default">Projects</p>
                                                    </NavLink>
                                                </Tooltip>
                                                <NavLink to="/views2" className={({ isActive }) => `flex gap-3 w-full items-center cursor-default px-2 py-1 rounded-sm group hover:bg-zinc-900 ${isActive ? 'bg-zinc-900' : ''}`}>
                                                    <RxStack className="text-zinc-400 group-hover:text-white" />
                                                    <p className="text-zinc-200 text-sm cursor-default">Views</p>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={tryDropdownRef}>
                        {/* Try Dropdown */}
                        <div className="flex flex-col px-3">
                            <div
                                className="flex gap-1 items-center hover:bg-zinc-900 px-2 py-1 rounded-sm cursor-default"
                                onClick={() => setTryDropdownOpen((prev) => !prev)}
                            >
                                <p className="text-sm text-zinc-400 cursor-default">Try</p>
                                <FaSortDown
                                    className={`text-zinc-400 size-3 transition-transform duration-300 ${tryDropdownOpen ? '' : '-rotate-90'}`}
                                />
                            </div>
                            <div
                                className={`transition-all gap-0.5 duration-300  ${tryDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="flex gap-3 items-center justify-between  hover:bg-zinc-900 px-2 py-1 rounded-sm group">
                                    <div className="flex gap-3  cursor-default items-center">
                                        <HiOutlineSquare2Stack className="rotate-180 text-zinc-400 group-hover:text-white" />
                                        <p className="text-zinc-200 text-sm cursor-default">Import issues</p>
                                    </div>
                                    <FiX className="text-transparent group-hover:text-zinc-600 hover:text-white size-3.5 transition-colors" />
                                </div>
                                <div className="flex gap-3 items-center justify-between hover:bg-zinc-900 px-2 py-1 rounded-sm group">
                                    <div className="flex gap-3 cursor-default items-center">
                                        <Plus className="text-zinc-400 size-4 group-hover:text-white" />
                                        <p className="text-zinc-200 text-sm cursor-default">Invite people</p>
                                    </div>
                                    <FiX className="text-transparent group-hover:text-zinc-600 hover:text-white size-3.5 transition-colors" />
                                </div>
                                <div className="flex gap-3 items-center justify-between hover:bg-zinc-900 px-2 py-1 rounded-sm group">
                                    <div className="flex cursor-default  gap-3 items-center">
                                        <FaGithub className="text-zinc-400" />
                                        <p className="text-zinc-200 text-sm cursor-default">Link Github</p>
                                    </div>
                                    <FiX className="text-transparent group-hover:text-zinc-600 hover:text-white size-3.5 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="border-1 h-6 w-6 border-zinc-500 rounded-full flex justify-center items-center hover:bg-zinc-800 group">
                        <RiQuestionMark className="text-zinc-500 size-3 group-hover:text-white" />
                    </div>
                </div>
                {!collapsed && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "6px",
                      height: "100%",
                      cursor: "ew-resize",
                      zIndex: 100,
                      background: "transparent",
                    }}
                    onMouseDown={startDrag}
                  />
                )}
              </div>
              {collapsed && (
                <div
                  style={{
                    position: "fixed",
                    top: "16px",
                    left: "10px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 2000,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                  onClick={() => setCollapsed(false)}
                  title="Open sidebar"
                >
                  <PanelRight className="text-zinc-400" size={18} />
                </div>
              )}

        </>
    )
}

export default SideBar;