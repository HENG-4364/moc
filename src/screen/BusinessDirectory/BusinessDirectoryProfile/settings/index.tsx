"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  Loader2,
  XIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface FormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
    req.test(formData.newPassword)
  );

  const isFormValid =
    formData.currentPassword.trim() !== "" &&
    isPasswordValid &&
    formData.newPassword === formData.confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Reset form after successful submission
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      router.push("/business-directory/login");
    }
  };

  return (
    <div className="p-4">
      <h4 className="mb-4 text-xl font-semibold">ផ្លាស់ប្ដូរពាក្យសម្ងាត់</h4>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <div className="relative">
            <Input
              id="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }))
              }
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? (
                <EyeOffIcon className="size-4" />
              ) : (
                <EyeIcon className="size-4" />
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <div className="relative">
            <Input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }))
              }
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <EyeOffIcon className="size-4" />
              ) : (
                <EyeIcon className="size-4" />
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
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
            formData.newPassword !== formData.confirmPassword && (
              <p className="text-sm text-destructive">Passwords do not match</p>
            )}
        </div>

        <div className="space-y-2">
          <Label>Password requirements</Label>
          <div className="space-y-2 text-sm">
            {passwordRequirements.map((req, index) => (
              <div key={index} className="flex items-center space-x-2">
                {req.test(formData.newPassword) ? (
                  <CheckIcon className="size-4 text-green-500" />
                ) : (
                  <XIcon className="size-4 text-destructive" />
                )}
                <span
                  className={
                    req.test(formData.newPassword)
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

        <Button
          className="w-full hover:bg-primary"
          type="submit"
          disabled={isLoading || !isFormValid}
        >
          {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
          ផ្លាស់ប្ដូរពាក្យសម្ងាត់
        </Button>
      </form>
    </div>
  );
}
