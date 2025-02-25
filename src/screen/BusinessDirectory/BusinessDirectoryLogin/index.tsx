import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";

export default function BusinessDirectoryLoginScreen() {
  return (
    <div className="bg-muted/50 ">
      <div className="min-h-[80vh] container mx-auto max-w-xl py-6">
        <Card className="w-full ">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              Sign in to Business Directory
            </CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 size-4" />
                Github
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
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full hover:bg-primary">Sign in</Button>
            <div className="text-sm text-center space-y-2">
              <a className="text-primary hover:underline" href="#">
                Forgot your password?
              </a>
              <div className="text-muted-foreground">
                Don't have an account?{" "}
                <a className="text-primary hover:underline" href="/business-directory/register">
                  Register
                </a>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
