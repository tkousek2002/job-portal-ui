import { cloneElement, useId } from "react";

export const Tooltip = ({ text, children }) => {
  const tooltipId = useId();

  return (
    <span className="group/tip relative inline-flex">
      {cloneElement(children, {
        "aria-describedby": tooltipId,
        tabIndex: 0,
      })}
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 px-4 py-3 text-left text-sm leading-relaxed text-gray-300 opacity-0 shadow-lg shadow-black/30 transition-opacity duration-300 group-hover/tip:opacity-100 group-focus-within/tip:opacity-100"
      >
        {text}
        <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-gray-900"></span>
      </span>
    </span>
  );
};
