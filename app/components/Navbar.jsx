"use client";
import { CircleUserRound, Menu } from "lucide-react"; // Added Menu icon for the drawer button
import Image from "next/image";
import React from "react";

export const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex flex-row items-center justify-between pr-5 md:pr-20 border-b border-gray-300 py-4">
      {/* Logo with max-width for smaller screens */}
      <div className="flex items-center">
        <Image
          src="/logo.jpg"
          width={220} // Adjust width for mobile
          height={80}
          alt="logo"
          priority
           // Make logo responsive
        />
      </div>

      {/* Right side of the navbar */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden p-2 border border-gray-300 rounded-lg"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>

        {/* User Info - Hide name on small screens if space is tight */}
        <div className="hidden md:flex items-center justify-center rounded-lg border-2 border-gray-300 p-1 font-bold text-xl gap-1">
          <CircleUserRound />
          Om Sharma
        </div>
      </div>
    </div>
  );
};
