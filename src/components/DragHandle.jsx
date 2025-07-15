import React, { useRef, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";

const MIN_WIDTH = 60;
const MAX_WIDTH = 400;
const DEFAULT_WIDTH = 220;

const DragHandle = ({ children, onCollapse }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH);
  const startX = useRef(null);
  const startWidth = useRef(null);

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    startWidth.current = sidebarWidth;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const dx = e.clientX - startX.current;
    let newWidth = startWidth.current + dx;
    if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
    if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;
    setSidebarWidth(newWidth);
  };

  const handleMouseUp = () => {
    if (sidebarWidth <= MIN_WIDTH) {
      setIsOpen(false);
      if (onCollapse) onCollapse();
    }
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  if (!isOpen) {
    return (
      <button
        className="fixed top-4 left-4 z-50 bg-zinc-800 text-white px-2 py-1 rounded"
        onClick={() => { setIsOpen(true); setSidebarWidth(DEFAULT_WIDTH); }}
      >
        <FiChevronsRight className="inline mr-1" /> Open Sidebar
      </button>
    );
  }

  return (
    <div
      className="h-screen bg-zinc-900 border-r border-zinc-800 relative transition-all duration-200"
      style={{ width: sidebarWidth }}
    >
      {children}
      <div
        className="absolute top-0 right-0 h-full w-2 flex items-center justify-center cursor-ew-resize group"
        onMouseDown={handleMouseDown}
        style={{ zIndex: 100 }}
      >
        <div className="bg-zinc-700 w-1 h-10 rounded-full group-hover:bg-zinc-400 transition-colors" />
        <FiChevronsRight className="text-zinc-400 ml-1 group-hover:text-zinc-200" />
      </div>
    </div>
  );
};

export default DragHandle; 