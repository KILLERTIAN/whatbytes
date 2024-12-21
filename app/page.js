"use client"
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  return (
    <div className="bg-gray-100 w-full h-screen">
      {/* Navbar with the toggle button */}
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      
      <div className="bg-gray-100 flex flex-row justify-normal">
        {/* Sidebar, passes isSidebarOpen state to control visibility */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        {/* Dashboard or main content */}
        <Dashboard />
      </div>
    </div>
  );
}
