"use client";
import React, { JSX, useState } from "react";
import { Menu, X } from "lucide-react";

function Hamburger({ navLinks }: { navLinks: JSX.Element }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
      {isOpen ? (
        <X size={32} className=" text-black" />
      ) : (
        <Menu size={32} className="text-black" />
      )}
      {/* div with navlinks */}
      {isOpen && (
        <div className="absolute top-28 left-0 w-full bg-secondary text-center py-6 shadow-lg md:hidden">
          {navLinks}
        </div>
      )}
    </div>
  );
}

export default Hamburger;
