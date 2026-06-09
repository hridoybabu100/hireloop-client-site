"use client";

import React, { useState } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Checkbox,
} from "@heroui/react";
import { Envelope, Lock, Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  // 1. Credentials Sign-In Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading("Signing you in...");

    const formElement = e.currentTarget;
    const rawFormData = new FormData(formElement);
    const userData = Object.fromEntries(rawFormData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      // rememberMe can be passed if supported by your auth provider config
    });

    setIsLoading(false);

    if (data) {
      toast.update(toastId, {
        render: "🎉 Welcome back! Logged in successfully.",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      
      // Use router.push over redirect() inside async handlers to avoid throwing breaking uncaught exceptions
      router.push("/");
    }

    if (error) {
      toast.update(toastId, {
        render: error.message || "Invalid email or password",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

  // 2. Google OAuth Sign-In Handler
  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    const toastId = toast.loading("Connecting to Google...");

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // Where users land after authenticating
      });
    } catch (error) {
      setIsGoogleLoading(false);
      toast.update(toastId, {
        render: "Failed to initialize Google login.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <Card className="w-full max-w-md p-4 shadow-xl border border-gray-100 dark:border-gray-800">
        <CardHeader className="flex flex-col gap-1 items-center justify-center pt-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to access your account
          </p>
        </CardHeader>

        <Card className="flex flex-col gap-5">
          {/* Email/Password Form */}
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Input */}
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

            {/* Password Input */}
            <TextField
              name="password"
              type={isVisible ? "text" : "password"}
              isRequired
              value={formData.password}
              onChange={(val) => handleFieldChange("password", val)}
              className="w-full"
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
                  {isVisible ? <EyeSlash className="text-xl" /> : <Eye className="text-xl" />}
                </button>
              </div>
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            {/* Extra Facilities: Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-1 px-1">
              <Checkbox 
                isSelected={rememberMe} 
                onValueChange={setRememberMe}
                size="sm"
                classNames={{ label: "text-xs text-gray-600 dark:text-gray-400" }}
              >
                Remember me
              </Checkbox>
              <Link 
                href="/forgot-password" 
                className="text-xs text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              color="primary"
              className="w-full font-semibold mt-2"
              isLoading={isLoading}
              isDisabled={isGoogleLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </Form>

          {/* Divider Line */}
          <div className="relative flex items-center my-2">
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-400 uppercase tracking-wider">or</span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
          </div>

          {/* Google Login Extra Facility */}
          <Button
            type="button"
            variant="secondary"
            className="w-full border border-gray-200 dark:border-gray-700 font-medium bg-white dark:bg-transparent"
            onClick={handleGoogleSignIn}
            isLoading={isGoogleLoading}
            isDisabled={isLoading}
          >
            {!isGoogleLoading && (
              <svg className="mr-2 h-4 w-4" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            )}
            Continue with Google
          </Button>

          {/* Footer Link */}
          <div className="text-center mt-2 text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/signup" className="text-sm font-medium text-primary">
              Sign Up
            </Link>
          </div>
        </Card>
      </Card>
    </div>
  );
}