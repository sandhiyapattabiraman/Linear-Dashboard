import React, { useRef, useState, useEffect } from "react";


const FilterDropdown = ({ button, children, className = "" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={`relative inline-block ${className}`} ref={ref}>
      <div onClick={() => setOpen((o) => !o)} className="cursor-default">
        {button}
      </div>
      <div
        className={`
          absolute left-0 mt-2 min-w-[260px] h-[610px] z-10
          transition-all duration-300
          ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
          bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg  
        `}
        style={{ transformOrigin: "top" }}
      >
        <div className="h-full overflow-y-auto hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown; 