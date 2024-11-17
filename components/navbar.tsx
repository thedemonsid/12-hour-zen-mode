"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
interface NavbarProps {
  isLoggedIn?: boolean;
  userImage?: string;
}

const Navbar = ({ isLoggedIn = false, userImage = "" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-1/2 bg-transparent border border-sky-100 mt-4 shadow-lg rounded-lg">
      <div className="h-16 px-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link className="flex items-center justify-center gap-2" href="/">
          <div className="w-8 h-8 bg-[#2C2F35] rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-[15px] font-semibold text-[#2C2F35]">
            ProcrastiNot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-10">
          <Link
            className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            href="/features"
          >
            Features
          </Link>
          <Link
            className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            href="/use-case"
          >
            Use Case
          </Link>
          <Link
            className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            href="/blogs"
          >
            Blogs
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <Button
              variant="ghost"
              className="rounded-full p-0 h-8 w-8 hover:bg-gray-50"
              onClick={() => {
                /* Handle profile click */
              }}
            >
              {userImage ? (
                <img
                  src={userImage}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">U</span>
                </div>
              )}
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-[14px] font-medium text-gray-600 hover:text-gray-900 hover:bg-transparent px-4"
              >
                Login
              </Button>
              <Button className="text-[14px] font-medium bg-[#2C2F35] text-white hover:bg-[#2C2F35]/90 rounded-lg px-4">
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-2 p-2 hover:bg-gray-50 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-sm">
          <nav className="flex flex-col max-w-7xl mx-auto">
            <Link
              className="px-4 py-3 text-[14px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="px-4 py-3 text-[14px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              href="/use-case"
            >
              Use Case
            </Link>
            <Link
              className="px-4 py-3 text-[14px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="px-4 py-3 text-[14px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              href="/blogs"
            >
              Blogs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
