"use client";

import React, { useState } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Description,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
} from "@heroui/react";
import { Envelope, Person, Lock, Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "", // Added password to state
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Controls password show/hide toggle

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Hero UI v3 TextField updates state directly with the text string value
  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading("Creating your account...");
    // console.log(e);
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      toast.update(toastId, {
        render: `🎉 Welcome ${userData.name}! Your account has been created successfully.`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      redirect('/')
    }
    if (error) {
      toast.update(toastId, {
        render: error.message || "Failed to create account",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }

    // console.log(data, error);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <Card className="w-full max-w-md p-4 shadow-xl border border-gray-100 dark:border-gray-800">
        <CardHeader className="flex flex-col gap-1 items-center justify-center pt-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Join Us Today
          </h1>
          <p className="text-sm text-gray-500">
            Enter your details below to create your account
          </p>
        </CardHeader>

        {/* Wrapped inside CardBody for structure consistency */}

        {/* Hero UI Wrapper Form handles built-in validation attributes */}
        <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Input Block */}
          <TextField
            name="name"
            type="text"
            isRequired
            value={formData.name}
            onChange={(val) => handleFieldChange("name", val)}
            className="w-full"
          >
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </Label>
            <div className="relative flex items-center">
              <Person className="absolute left-3 text-xl text-gray-400 pointer-events-none" />
              <Input
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent py-2.5 pl-10 pr-4 text-sm shadow-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          {/* Email Input Block */}
          <TextField
            name="email"
            type="email"
            isRequired
            value={formData.email}
            onChange={(val) => handleFieldChange("email", val)}
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </Label>
            <div className="relative flex items-center">
              <Envelope className="absolute left-3 text-xl text-gray-400 pointer-events-none" />
              <Input
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent py-2.5 pl-10 pr-4 text-sm shadow-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          {/* Password Input Block */}
          <TextField
            name="password"
            type={isVisible ? "text" : "password"}
            isRequired
            minLength={8}
            value={formData.password}
            onChange={(val) => handleFieldChange("password", val)}
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </Label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 text-xl text-gray-400 pointer-events-none" />
              <Input
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent py-2.5 pl-10 pr-10 text-sm shadow-sm outline-none focus:border-primary transition-colors"
              />
              <button
                className="absolute right-3 focus:outline-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlash className="text-xl" />
                ) : (
                  <Eye className="text-xl" />
                )}
              </button>
            </div>
            <Description className="text-xs text-gray-400 mt-1">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            className="w-full font-semibold mt-2"
            isLoading={isLoading}
          >
            {isLoading ? "Submitting..." : "Sign Up"}
          </Button>
        </Form>

        {/* Footer Link */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-sm font-medium text-primary">
            Log In
          </Link>
        </div>
      </Card>
    </div>
  );
}
