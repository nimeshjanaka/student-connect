"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";

export default function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div className="fixed inset-y-0 left-0 bg-blue-600 w-1/6 py-4 px-6">

        <div className="text-white font-bold text-xl mb-4">Logo</div>

        <nav className="mt-4">
          <ul className="pt-5">
            <li className="mb-4">
              <Link href="/chat" className="text-white flex items-center space-x-2">
                <span>Chat</span>
              </Link>
            </li>
            <li className="mb-4 ">
              <Link href="/group" className="text-white flex items-center space-x-2">
                <span>Group</span>
              </Link>
            </li>
            <li className="mb-4">
              <a href="/friends" className="text-white flex items-center space-x-2">
                <span>Friends</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="/AddNew" className="text-white flex items-center space-x-2">
                <span>Add New Friends</span>
              </a>
            </li>
            
          </ul>
          
        </nav>
      </div>
      <div className="flex-1 ml-64 p-4">
        <header>
          <Header />
        </header>

        <main className="mt-4">
          <div className="m-10 p-4 border-0 shadow-lg border-gray-300 rounded-md">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
