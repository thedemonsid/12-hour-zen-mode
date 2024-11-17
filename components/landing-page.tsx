"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Clock, ListTodo, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import CountDown from "./ui/count-down-landing";

export function LandingPageComponent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Gradient orbs */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content container with glass effect */}
      <div className="relative flex flex-col items-center">
        <Navbar></Navbar>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
        <div className="relative backdrop-blur-[2px]">
          <div className="relative container mx-auto px-4 py-20 text-center">
            {/* Announcement Banner */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm mb-8 hover:bg-gray-100 transition-colors"
            >
              <div className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                New Feature
              </div>
              <span className="text-gray-600">
                AI-powered task prioritization
              </span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </Link>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Conquer procrastination, boost your productivity
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your habits with smart task management, personalized
                strategies, and real-time motivation
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap justify-center gap-4 pt-8">
                {[
                  { icon: Clock, label: "Time Blocking" },
                  { icon: ListTodo, label: "Smart To-Do Lists" },
                  { icon: Zap, label: "Instant Motivation" },
                ].map(({ icon: Icon, label }) => (
                  <Button
                    key={label}
                    variant="outline"
                    className="h-12 px-6 gap-2 bg-transparent text-gray-900 transition-colors shadow-sm"
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Button>
                ))}
              </div>

              {/* App Preview */}
              <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <CountDown></CountDown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
