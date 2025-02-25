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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Loader2, ArrowLeft } from "lucide-react";

export default function VerifyOTP() {
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
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-md">
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
              <CardTitle className="text-2xl font-bold">Verify Email</CardTitle>
            </div>
            <CardDescription className="pt-2">
              We've sent a verification code to your email address. Please enter
              it below.
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
              className="w-full"
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
  );
}
