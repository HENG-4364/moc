"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@apollo/client"
import { FORGOT_PASSWORD_REQUEST_MUTATION } from "../graphql/Mutation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ForgotPasswordFormData, forgotPasswordSchema } from "../schema/login-schema"
import { toast } from "sonner"
import Link from "next/link"
import { useState } from "react"
import ConfirmTwoFactorVerificationForgotPasswordScreen from "./components/ConfirmTwoFactorVerificationForgotPassword"

export default function BusinessDirectoryForgotPasswordScreen() {
  const [isLoading, setIsLoading] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [forgotPasswordPublicUser] = useMutation(FORGOT_PASSWORD_REQUEST_MUTATION)
  const [formData, setFormData] = useState<ForgotPasswordFormData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      phoneNumber: "",
    },
  })

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true)
    try {
      const response = await forgotPasswordPublicUser({
        variables: {
          input: {
            phone_number: data.phoneNumber,
          },
        },
      })

      const success = response.data?.forgotPasswordPublicUser?.success
      const message = response.data?.forgotPasswordPublicUser?.message

      if (success) {
        toast.success(message || "OTP has been sent to your phone number.", {
          position: "top-right",
          style: { fontSize: "11pt", zIndex: "100" },
        })

        // Store form data and show verification screen
        setFormData(data)
        setShowVerification(true)
      } else {
        toast.error(message || "Failed to send OTP. Please try again.", {
          position: "top-right",
          style: { fontSize: "11pt" },
        })
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to send OTP. Please try again.", {
        position: "top-right",
        style: { fontSize: "11pt" },
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (showVerification && formData) {
    return <ConfirmTwoFactorVerificationForgotPasswordScreen data={formData} onBack={() => setShowVerification(false)} />
  }

  return (
    <div className="bg-muted/50">
      <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="w-full">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Forgot your password?</CardTitle>
              <CardDescription>Enter your phone number and we'll send you a reset otp code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  aria-invalid={errors.phoneNumber ? "true" : "false"}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onKeyPress={(e) => {
                    // Allow only numeric input
                    const isNumber = /^[0-9]$/i.test(e.key);
                    if (!isNumber) {
                      e.preventDefault();
                    }
                  }}
                />
                {errors.phoneNumber && <p className="text-sm text-destructive mt-1">{errors.phoneNumber.message}</p>}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full hover:bg-primary" type="submit" disabled={isLoading}>
                {isLoading ? "Send..." : "Send"}
              </Button>
              <div className="text-sm text-center space-y-2">
                <div className="text-muted-foreground">
                  Remembered your password?{" "}
                  <Link className="text-primary font-medium hover:underline" href="/business-directory/signin">
                    Sign In
                  </Link>
                </div>
                <div className="text-muted-foreground">
                  Don't have an account?{" "}
                  <Link className="text-primary font-medium hover:underline" href="/business-directory/register">
                    Register
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}