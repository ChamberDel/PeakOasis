import React, { useState } from "react";

const DropdownMenu = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-semibold"
      >
        {title}
      </button>
      {open && (
        <ul className="absolute bg-white shadow-lg mt-1 w-full rounded-lg z-10">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;