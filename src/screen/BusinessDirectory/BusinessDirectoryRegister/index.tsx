"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@apollo/client"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Loader2, EyeIcon, EyeOffIcon, CheckIcon, XIcon } from "lucide-react"
import { PUBLIC_USER_REGISTRATION_MUTATION } from "../graphql/Mutation"
import { type SignUpFormData, signUpSchema } from "../schema"
import VerifyOTP from "../BusinessDirectoryVerifyOTP"

export default function BusinessDirectoryRegisterScreen() {
  const [isPending, setIsPending] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [formData, setFormData] = useState<SignUpFormData | null>(null)
  const [createPublicUser] = useMutation(PUBLIC_USER_REGISTRATION_MUTATION)

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  })

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
  ]

  const onSubmit = async (data: SignUpFormData) => {
    setIsPending(true)
    try {
      const result = await createPublicUser({
        variables: {
          input: {
            phone_number: data.phoneNumber,
          },
        },
      })

      if (result.data?.createPublicUser?.success) {
        toast.success(result.data.createPublicUser.message || "OTP sent successfully!", {
          position: "top-right",
          style: { fontSize: "11pt", zIndex: "100" },
        })

        // Store the entire form data
        setFormData(data)
        setShowVerification(true)
      } else {
        toast.error(result.data?.createPublicUser?.message || "Registration failed", {
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
      toast.error(error.message || "An error occurred during registration", {
        position: "top-right",
        style: { fontSize: "11pt" },
      })
    } finally {
      setIsPending(false)
    }
  }

  if (showVerification && formData) {
    return <VerifyOTP data={formData} onBack={() => setShowVerification(false)} />
  }

  return (
    <div className="bg-muted/50">
      <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
        <Card className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">Business Directory Registration</CardTitle>
                <CardDescription>Enter your information to register an account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Fill your information</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="m@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="012345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type={showPassword ? "text" : "password"} {...field} />
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
                        <Input type="password" {...field} />
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
                        {req.test(form.getValues("password")) ? (
                          <CheckIcon className="size-4 text-green-500" />
                        ) : (
                          <XIcon className="size-4 text-destructive" />
                        )}
                        <span className={req.test(form.getValues("password")) ? "text-green-500" : "text-destructive"}>
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium leading-none">
                          I agree to the{" "}
                          <a href="#" className="text-primary hover:underline">
                            terms and conditions
                          </a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full hover:bg-primary" type="submit" disabled={isPending}>
                  {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
                  Create
                </Button>
                <div className="text-sm text-center text-muted-foreground">
                  Already have an account?{" "}
                  <a className="text-primary hover:underline" href="/business-directory/signin">
                    Sign In
                  </a>
                </div>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}