"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail } from "lucide-react";
import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <CardWrapper
      backButtonLabel="Sign In"
      backButtonHref="/auth/login"
      backButtonMessage="Already have an account ?"
      title="Create an Account"
      description="Believe in yourself and all that you are. You can achieve greatness!"
      showsocial
    >
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="first_name"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <Input
              type="last_name"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
            />
          </div>
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox id="remember" className="border-gray-300" />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember Me
            </label>
          </div>
          <Link href="#" className="text-sm text-blue-600 hover:text-blue-500">
            Forget Password ?
          </Link>
        </div> */}

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
          Register
        </Button>
      </form>
    </CardWrapper>
  );
};

export default Register;
