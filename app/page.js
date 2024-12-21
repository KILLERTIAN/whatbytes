import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";

export default function Home() {
  return (
    <div className="bg-gray-100 w-full h-screen">
    <Navbar/>
    <div className="flex flex-row justify-normal">
    <Sidebar/>
    <Dashboard/>
    </div>
    </div>
  );
}
