"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock, AtSign, User } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterInput, registerSchema } from "@/schemas";
import ErrorMessage from "@/components/auth/error-message";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data: RegisterInput) => {
    console.log(data);
  };
  return (
    <CardWrapper
      backButtonLabel="Sign In"
      backButtonHref="/auth/login"
      backButtonMessage="Already have an account ?"
      title="Create an Account"
      description="Believe in yourself and all that you are. You can achieve greatness!"
      showsocial
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <div>
              <Input
                {...register("firstname")}
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
              />
            </div>
            <div>
              <Input
                type="text"
                {...register("lastname")}
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
              />
            </div>
          </div>
          {errors.firstname && (
            <ErrorMessage
              message={errors.firstname.message as string}
              icon={User}
            />
          )}
          {errors.lastname && (
            <ErrorMessage
              message={errors.lastname.message as string}
              icon={User}
            />
          )}

          <div className="relative">
            <Input
              {...register("email")}
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
          {errors.email && (
            <ErrorMessage
              message={errors.email.message as string}
              icon={AtSign}
            />
          )}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password")}
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
          {errors.password && (
            <ErrorMessage
              message={errors.password.message as string}
              icon={Lock}
            />
          )}
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

        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
        >
          Register
        </Button>
      </form>
    </CardWrapper>
  );
};

export default Register;
