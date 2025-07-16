import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

const Tooltip = ({ children, text, shortcut }) => {
  const [show, setShow] = useState(false);
  const timerRef = useRef();
  const triggerRef = useRef();
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    const rect = triggerRef.current.getBoundingClientRect();
    setCoords({
      top: rect.top + rect.height / 2,
      left: rect.right,
    });
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
      ref={triggerRef}
    >
      {children}
      {show &&
        createPortal(
          <div
            className="fixed z-[9999] bg-zinc-900 text-white text-xs rounded px-3 py-1 shadow-lg flex items-center gap-2 whitespace-nowrap border border-zinc-800"
            style={{
              top: `${coords.top}px`,
              left: `${coords.left + 8}px`,
              transform: "translateY(-50%)",
              pointerEvents: "none", // so it doesn't interfere with mouse events
            }}
          >
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
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip; 