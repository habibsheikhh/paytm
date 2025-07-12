"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-black text-white font-semibold px-6 py-2 rounded-4xl hover:bg-gray-800 transition duration-300"
    >
      {children}
    </button>
  );
};
