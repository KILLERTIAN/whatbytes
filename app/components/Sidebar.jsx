"use client";
import { Award, ChartNoAxesColumn, File, X } from 'lucide-react'; // Added X icon for closing the sidebar
import React, { useState } from 'react';
import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [activeItem, setActiveItem] = useState('skill-test'); // Default active item

  // Function to close the sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`fixed md:relative left-0 top-0 h-full max-w-[300px] bg-gray-100 border-r border-gray-300 pr-5 py-8 flex flex-col items-start gap-4 z-10 transition-all ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-[300px]`}
    >
      {/* Close Button - Only visible on mobile view */}
      <div className="md:hidden absolute top-4 right-4">
        <button
          className="p-2 text-gray-800"
          onClick={handleCloseSidebar}
        >
          <X size={24} />
        </button>
      </div>

      {/* Logo - Top of the sidebar on mobile and desktop */}
      <div className="flex items-center justify-center w-full p-4">
        <Image src="/logo.jpg" width={200} height={40} alt="logo" priority className="md:hidden w-full" />
      </div>

      {/* Sidebar Menu Items */}
      <div className="flex flex-col gap-2 w-full">
        <div
          className={`flex flex-row gap-2 w-full p-4 rounded-r-full text-lg font-semibold cursor-pointer ${activeItem === 'dashboard' ? 'bg-gray-200 text-blue-500' : 'text-gray-800'}`}
          onClick={() => {
            setActiveItem('dashboard');
            handleCloseSidebar(); // Close the sidebar when clicked
          }}
        >
          <ChartNoAxesColumn />
          Dashboard
        </div>
        <div
          className={`flex flex-row gap-2 w-full p-4 text-lg rounded-r-full font-semibold cursor-pointer ${activeItem === 'skill-test' ? 'bg-gray-200 text-blue-500' : 'text-gray-800'}`}
          onClick={() => {
            setActiveItem('skill-test');
            handleCloseSidebar(); // Close the sidebar when clicked
          }}
        >
          <Award />
          Skill Test
        </div>
        <div
          className={`flex flex-row gap-2 w-full p-4 text-lg rounded-r-full font-semibold cursor-pointer ${activeItem === 'internship' ? 'bg-gray-200 text-blue-500' : 'text-gray-800'}`}
          onClick={() => {
            setActiveItem('internship');
            handleCloseSidebar(); // Close the sidebar when clicked
          }}
        >
          <File />
          Internship
        </div>
      </div>

      {/* User Info - Bottom of the sidebar on mobile and desktop */}
      <div className="mt-auto flex flex-row items-center justify-center w-full  p-2 ">
        <CircleUserRound size={24} className="block md:hidden ml-2 text-lg font-semibold" />
        <span className="block md:hidden ml-2 text-lg font-semibold">Om Sharma</span>
      </div>
    </div>
  );
};
