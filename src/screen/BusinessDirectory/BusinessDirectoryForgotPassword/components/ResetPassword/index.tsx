"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@apollo/client"
import { toast } from "sonner"
import Link from "next/link"
import { EyeIcon, EyeOffIcon, CheckIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RESET_PASSWORD_MUTATION } from "@/screen/BusinessDirectory/graphql/Mutation"
import {  resetPasswordWithConfirmation, ResetPasswordWithConfirmationFormData } from "@/screen/BusinessDirectory/schema"

export default function ResetPasswordScreen() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const [isPending, setIsPending] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [resetPasswordPublicUser] = useMutation(RESET_PASSWORD_MUTATION)

    useEffect(() => {
        if (!token) {
            toast.error("Invalid or missing reset token. Please try again.", {
                position: "top-right",
                style: { fontSize: "11pt" },
            })
            router.push("/business-directory/forgot-password")
        }
    }, [token, router])
    
    const form = useForm<ResetPasswordWithConfirmationFormData>({
        resolver: zodResolver(resetPasswordWithConfirmation),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    })

    const passwordRequirements = [
        { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
        { label: "At least one number", test: (p: string) => /\d/.test(p) },
        { label: "At least one special character", test: (p: string) => /[!@#$%^&*]/.test(p) },
        { label: "At least one uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
    ]

    const onSubmit = async (data: ResetPasswordWithConfirmationFormData) => {
        if (!token) {
            toast.error("Invalid or missing reset token. Please try again.", {
                position: "top-right",
                style: { fontSize: "11pt" },
            })
            return
        }

        setIsPending(true)
        try {
            const response = await resetPasswordPublicUser({
                variables: {
                    input: {
                        newPassword: data.newPassword,
                        token: token,
                    },
                },
            })

            const success = response.data?.createNewPasswordPublicUser?.success
            const message = response.data?.createNewPasswordPublicUser?.message

            if (success) {
                toast.success(message || "Password updated successfully.", {
                    position: "top-right",
                    style: { fontSize: "11pt", zIndex: "100" },
                })

                setTimeout(() => {
                    router.push("/business-directory/signin")
                }, 2000)
            } else {
                toast.error(message || "Failed to reset password. Please try again.", {
                    position: "top-right",
                    style: { fontSize: "11pt" },
                })
            }
        } catch (error: any) {
            if (error.graphQLErrors) {
                console.error("GraphQL errors:", error.graphQLErrors)
            }
            if (error.networkError) {
                console.error("Network error:", error.networkError)
            }

            toast.error(error.message || "Failed to reset password. Please try again.", {
                position: "top-right",
                style: { fontSize: "11pt" },
            })
        } finally {
            setIsPending(false)
        }
    }

    // If no token is present, show loading state until redirect
    if (!token) {
        return (
            <div className="bg-muted/50 min-h-screen flex items-center justify-center">
                <div className="text-center">Redirecting to forgot password...</div>
            </div>
        )
    }

    return (
        <div className="bg-muted/50">
            <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
                <Card className="w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardHeader className="space-y-1 text-center">
                                <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
                                <CardDescription>Enter your new password below</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">Fill IN</span>
                                    </div>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="newPassword"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel>New Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    >
                                                        {showConfirmPassword ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-2">
                                    <Label>Password requirements</Label>
                                    <div className="space-y-2 text-sm">
                                        {passwordRequirements.map((req, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                {req.test(form.watch("newPassword")) ? (
                                                    <CheckIcon className="size-4 text-green-500" />
                                                ) : (
                                                    <XIcon className="size-4 text-destructive" />
                                                )}
                                                <span className={req.test(form.watch("newPassword")) ? "text-green-500" : "text-destructive"}>
                                                    {req.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-4">
                                <Button className="w-full hover:bg-primary" type="submit" disabled={isPending}>
                                    {isPending ? "Resetting..." : "Reset"}
                                </Button>
                                <div className="text-sm text-center">
                                    <div className="text-muted-foreground">
                                        Remember your password?{" "}
                                        <Link className="text-primary font-medium hover:underline" href="/business-directory/signin">
                                            Sign In
                                        </Link>
                                    </div>
                                </div>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </div>
        </div>
    )
}