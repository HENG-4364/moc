"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useMutation } from "@apollo/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Loader2, ArrowLeft, RotateCw } from "lucide-react"
import {  ForgotPasswordFormData } from "../../../schema"
import { CONFIRM_TWO_FACTOR_VERIFICATION_MUTATION, FORGOT_PASSWORD_REQUEST_MUTATION } from "../../../graphql/Mutation"

const OTP_EXPIRATION_TIME = 120

interface ConfirmOtpForForgotPasswordProps {
    data: ForgotPasswordFormData
    onBack: () => void
}

function ConfirmTwoFactorVerificationForgotPasswordScreen({ data, onBack }: ConfirmOtpForForgotPasswordProps) {
    const router = useRouter()
    const [otp, setOtp] = useState("")
    const [timeLeft, setTimeLeft] = useState(OTP_EXPIRATION_TIME)
    const [canResend, setCanResend] = useState(false)
    const [isExpired, setIsExpired] = useState(false)

    const [confirmTwoFactorVerification, { loading: verifyLoading }] = useMutation(CONFIRM_TWO_FACTOR_VERIFICATION_MUTATION)
    const [forgotPasswordPublicUser, { loading: resendLoading }] = useMutation(FORGOT_PASSWORD_REQUEST_MUTATION)

    const isLoading = verifyLoading || resendLoading

    // Timer effect
    useEffect(() => {
        if (timeLeft <= 0) {
            setCanResend(true)
            setIsExpired(true)
            return
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft])

    // Format time as MM:SS
    const formatTime = useCallback((time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }, [])

    // Handle OTP verification
    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault()

        if (isExpired) {
            toast.error("OTP has expired. Please request a new code.", {
                position: "top-right",
                style: { fontSize: "11pt" },
            })
            return
        }

        if (otp.length !== 6) {
            toast.error("Please enter a valid 6-digit code", {
                position: "top-right",
                style: { fontSize: "11pt" },
            })
            return
        }

        try {
            const result = await confirmTwoFactorVerification({
                variables: {
                    input: {
                        code: otp,
                        phone_number: data.phoneNumber,
                    },
                },
            })

            const success = result.data?.confirmTwoFactorVerificationForgotPassword?.success
            const message = result.data?.confirmTwoFactorVerificationForgotPassword?.message
            const token = result.data?.confirmTwoFactorVerificationForgotPassword?.token

            if (success && token) {
                setOtp("")
                setTimeLeft(OTP_EXPIRATION_TIME)
                setCanResend(false)
                setIsExpired(false)

                toast.success(message || "OTP verification successful. You can proceed to reset your password.", {
                    position: "top-right",
                    style: { fontSize: "11pt", zIndex: "100" },
                })

                router.push(`/business-directory/reset-password?token=${token}`)
            } else {
                setOtp("")
                toast.error(message || "Verification failed", {
                    position: "top-right",
                    style: { fontSize: "11pt" },
                })
            }
        } catch (error: any) {
            setOtp("")
            toast.error(error.message || "Failed to verify OTP. Please try again.", {
                position: "top-right",
                style: { fontSize: "11pt" },
            })
        }
    }

    // Handle resending OTP
    const handleResend = async () => {
        try {
            const result = await forgotPasswordPublicUser({
                variables: {
                    input: {
                        phone_number: data.phoneNumber,
                    },
                },
            })

            const success = result.data?.forgotPasswordPublicUser?.success
            const message = result.data?.forgotPasswordPublicUser?.message

            if (success) {
                setOtp("")
                setCanResend(false)
                setIsExpired(false)
                setTimeLeft(OTP_EXPIRATION_TIME)

                toast.success(message || "OTP resent successfully!", {
                    position: "top-right",
                    style: { fontSize: "11pt", zIndex: "100" },
                })
            } else {
                toast.error(message || "Failed to resend OTP", {
                    position: "top-right",
                    style: { fontSize: "11pt" },
                })
            }
        } catch (error: any) {
            toast.error(error.message || "Failed to resend OTP. Please try again.", {
                position: "top-right",
                style: { fontSize: "11pt" },
            })
        }
    }

    return (
        <div className="bg-muted/50">
            <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
                <Card className="w-full">
                    <form onSubmit={handleVerify}>
                        <CardHeader className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                    onClick={onBack}
                                    disabled={isLoading}
                                >
                                    <ArrowLeft className="size-4" />
                                </Button>
                                <CardTitle className="text-2xl font-bold">Confirm Two-Factor Verification</CardTitle>
                            </div>
                            <CardDescription className="pt-2">
                                We've sent a verification code to {data.phoneNumber}. Please enter it below to reset your password.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <InputOTP
                                    maxLength={6}
                                    value={otp}
                                    onChange={(value) => {
                                        if (/^\d*$/.test(value)) {
                                            setOtp(value)
                                        }
                                    }}
                                    pattern="\d*"
                                    inputMode="numeric"
                                    disabled={isLoading}
                                >
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                                <div className="text-sm text-muted-foreground flex items-center">
                                    {canResend ? (
                                        <Button
                                            variant="link"
                                            className="p-0 h-auto font-normal flex items-center gap-1"
                                            onClick={handleResend}
                                            disabled={isLoading}
                                            type="button"
                                        >
                                            <RotateCw className="size-3" />
                                            Resend code
                                        </Button>
                                    ) : (
                                        <span className={timeLeft < 30 ? "text-amber-500" : ""}>
                                            Code expires in {formatTime(timeLeft)}s
                                        </span>
                                    )}
                                </div>
                                {isExpired && (
                                    <div className="text-destructive text-sm">
                                        This code has expired. Please request a new one.
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <Button
                                className="w-full hover:bg-primary"
                                type="submit"
                                disabled={isLoading || otp.length !== 6 || isExpired}
                            >
                                {verifyLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                                Verify
                            </Button>
                            <div className="text-sm text-center space-y-2">
                                <span className="text-muted-foreground">
                                    Didn't receive the code? Check that you entered the correct phone number
                                </span>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default ConfirmTwoFactorVerificationForgotPasswordScreen