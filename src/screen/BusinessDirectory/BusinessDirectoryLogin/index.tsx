"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@apollo/client"
import { LOGIN_MUTATION } from "../graphql/Mutation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { type LoginFormData, loginSchema } from "../schema/login-schema"
import Cookies from 'js-cookie';
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function BusinessDirectoryLoginScreen() {
  const router = useRouter()
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [signInPublicUser] = useMutation(LOGIN_MUTATION)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      const response = await signInPublicUser({
        variables: {
          input: {
            password: data.password,
            phone_number: data.phoneNumber,
          },
        },
      })

      const token = response.data?.signInPublicUser?.token
      const message = response.data?.signInPublicUser?.message

      if (token) {
        const cookieOptions = rememberMe ? { expires: 30 } : undefined
        Cookies.set("token", token, cookieOptions)

        toast.success("Login Successfully!", {
          position: "top-right",
          style: { fontSize: "11pt", zIndex: "100" },
        })

        router.push("/business-directory/profile")
        router.refresh()
      } else {
        toast.error(message || "Invalid phone number or password", {
          position: "top-right",
          style: { fontSize: "11pt" },
        })
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed. Please try again.", {
        position: "top-right",
        style: { fontSize: "11pt" },
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-muted/50">
      <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="w-full">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
              <CardDescription>Please signin to your business account</CardDescription>
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
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  </Button>
                </div>
                {errors.password && <p className="text-sm text-destructive mt-1">{errors.password.message}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full hover:bg-primary" type="submit" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
              <div className="text-sm text-center space-y-2">
                <Link className="text-primary hover:underline" href="/business-directory/forgot-password">
                  Forgot your password?
                </Link>
                <div className="text-muted-foreground">
                  Don't have an account?{" "}
                  <Link className="text-primary hover:underline" href="/business-directory/register">
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