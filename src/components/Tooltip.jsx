import React, { useState, useRef } from "react";

const Tooltip = ({ children, text, shortcut }) => {
  const [show, setShow] = useState(false);
  const timerRef = useRef();

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setShow(true), 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setShow(false);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 z-50 bg-zinc-900 text-white text-xs rounded px-3 py-1 shadow-lg flex items-center gap-2 whitespace-nowrap border border-zinc-800">
          {text}
          {shortcut && (
            <span className="ml-2 flex gap-1">
              {shortcut.split(" ").map((key, i) => (
                <kbd
                  key={i}
                  className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs font-mono"
                >
                  {key}
                </kbd>
              ))}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip; 