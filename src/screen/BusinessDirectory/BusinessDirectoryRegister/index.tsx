"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Github,
  Mail,
  Loader2,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
  XIcon,
  ArrowLeft,
} from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export default function BusinessDirectoryRegisterScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const passwordRequirements = [
    { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
    { label: "At least one number", test: (p: string) => /\d/.test(p) },
    {
      label: "At least one special character",
      test: (p: string) => /[!@#$%^&*]/.test(p),
    },
    {
      label: "At least one uppercase letter",
      test: (p: string) => /[A-Z]/.test(p),
    },
  ];

  const isPasswordValid = passwordRequirements.every((req) =>
    req.test(formData.password)
  );
  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    isPasswordValid &&
    formData.password === formData.confirmPassword &&
    formData.terms;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowVerification(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (showVerification) {
    return <VerifyOTP email={formData.email} />;
  }

  return (
    <div className="bg-muted/50 ">
      <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
        <Card className="w-full ">
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">
                Business Directory Registration
              </CardTitle>
              <CardDescription>
                Enter your information to register an account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <Github className="mr-2 size-4" />
                  Github
                </Button>
                <Button variant="outline" type="button">
                  <Mail className="mr-2 size-4" />
                  Google
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="size-4" />
                    ) : (
                      <EyeIcon className="size-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  required
                />
                {formData.confirmPassword &&
                  formData.password !== formData.confirmPassword && (
                    <p className="text-sm text-destructive">
                      Passwords do not match
                    </p>
                  )}
              </div>

              <div className="space-y-2">
                <Label>Password requirements</Label>
                <div className="space-y-2 text-sm">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {req.test(formData.password) ? (
                        <CheckIcon className="size-4 text-green-500" />
                      ) : (
                        <XIcon className="size-4 text-destructive" />
                      )}
                      <span
                        className={
                          req.test(formData.password)
                            ? "text-green-500"
                            : "text-destructive"
                        }
                      >
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      terms: checked === true,
                    }))
                  }
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none"
                >
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                className="w-full hover:bg-primary"
                type="submit"
                disabled={isLoading || !isFormValid}
              >
                {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                Create account
              </Button>
              <div className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <a
                  className="text-primary hover:underline"
                  href="/business-directory/login"
                >
                  Login
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

function VerifyOTP({ email }: { email: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleResend = async () => {
    setCanResend(false);
    setTimeLeft(30);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-muted/50 ">
      <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
        <Card className="w-full ">
          <form onSubmit={handleVerify}>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="size-4" />
                </Button>
                <CardTitle className="text-2xl font-bold">
                  Verify Email
                </CardTitle>
              </div>
              <CardDescription className="pt-2">
                We've sent a verification code to {email}. Please enter it
                below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="text-sm text-muted-foreground">
                  {canResend ? (
                    <Button
                      variant="link"
                      className="p-0 h-auto font-normal"
                      onClick={handleResend}
                      disabled={isLoading}
                    >
                      Resend code
                    </Button>
                  ) : (
                    <span>Resend code in {formatTime(timeLeft)}</span>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                className="w-full hover:bg-primary"
                type="submit"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                Verify Email
              </Button>
              <div className="text-sm text-center space-y-2">
                <span className="text-muted-foreground">
                  Didn't receive the email? Check your spam folder
                </span>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
