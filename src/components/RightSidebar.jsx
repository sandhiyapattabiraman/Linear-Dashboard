import React from "react";

const RightSidebar = ({ sidebarWidth, handleDragMouseDown , className , children}) => (
    <div
        className={` border-l border-zinc-800 bg-zinc-950 flex flex-col relative ${className}`}
        style={{ width: `${sidebarWidth}%` }}
    >
        {/* Drag handle */}
        <div
            style={{ left: 0 }}
            className="absolute top-0 bottom-0 w-1 z-20 hover:bg-zinc-800 transition-colors cursor-col-resize"
            onMouseDown={handleDragMouseDown}
        />
        {children}
        
    </div>
);

export default RightSidebar; 