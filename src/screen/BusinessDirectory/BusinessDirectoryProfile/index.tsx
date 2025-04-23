"use client";

import {
  AlertTriangle,
  BadgeCheck,
  CircleAlert,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChangePassword from "./settings";
import EditProfile from "./Profile";
import Business from "./Business";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useUserStore } from "@/stores/me";

export default function BusinessDirectoryProfileScreen() {
  const me = useUserStore((state) => state.me);
  const { first_name, last_name, profile_picture, email, status } = me;

  return (
    <div className="bg-muted/50 ">
      <div className="min-h-screen container mx-auto px-4 py-8">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src="/placeholder-banner.png"
            alt="Profile banner"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mx-auto ">
          <div className="relative -mt-20 mb-8 px-3 shadow-lg pb-6 ">
            <div className="flex items-start justify-between ">
              <div className="flex items-end gap-4 ">
                <div className="relative ">
                  <Avatar className="h-32 w-32 border-4 border-background">
                    <AvatarImage src={profile_picture ? profile_picture : "/placeholder.svg"} />
                    <AvatarFallback>CJ</AvatarFallback>
                  </Avatar>
                  <div className="absolute -right-2 bottom-3 rounded-full bg-[#e4f1fa] p-1">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                Edit Profile
              </Button>
            </div>
            <div className="mb-4 ">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{first_name} {last_name}	</h1>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>{email}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-5 text-xs border-orange-300 text-orange-500 hover:text-orange-400"
                >
                  Upgrade Account
                </Button>
              </div>
            </div>
            <div className="mt-4 flex gap-6 text-sm text-muted-foreground">
              <span>0 Followers</span>
              <span>0 Following</span>
            </div>
          </div>

          <div className="mb-8 shadow-lg border border-slate-100 bg-white">
            <div className="px-6 py-5">
              <h2 className="mb-4 text-xl font-semibold">Manage My Business</h2>
            </div>

            <Tabs defaultValue={me?.status === "APPROVED" ? "business" : "profile"} className="px-6">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 gap-5">
                {me?.status === "APPROVED" && (
                  <TabsTrigger
                    value="business"
                    className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary relative"
                  >
                    Business
                    {me?.business_directory?.status === "REJECTED" && (
                      <CircleAlert
                        className="absolute -top-1 -right-1.5 bg-red-50 rounded-full w-6 h-6 p-1"
                        color="red"
                      />
                    )}
                    {(me?.business_directory?.status === "PENDING" || me?.business_directory?.status === "INREVIEW") && (
                      <CircleAlert
                        className="absolute -top-1 -right-1.5 bg-orange-50 rounded-full w-6 h-6 p-1"
                        color="orange"
                      />

                    )}
                    {me?.business_directory?.is_updated && (
                      <CircleAlert
                        className="absolute -top-1 -right-1.5 bg-orange-50 rounded-full w-6 h-6 p-1"
                        color="orange"
                      />
                    )}
                  </TabsTrigger>
                )}

                <TabsTrigger
                  value="profile"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary relative"
                >
                  Profile
                  {me?.is_updated && (
                    <CircleAlert
                      className="absolute -top-1 -right-1.5 bg-orange-50 rounded-full w-6 h-6 p-1"
                      color="orange"
                    />
                  )}
                  {(me?.status === "PENDING" || me?.status === "INREVIEW") && (
                    <CircleAlert
                      className="absolute -top-1 -right-1.5 bg-orange-50 rounded-full w-6 h-6 p-1"
                      color="orange"
                    />
                  )}
                  {(me?.status === "REJECTED") && (
                    <CircleAlert
                      className="absolute -top-1 -right-1.5 bg-red-50 rounded-full w-6 h-6 p-1"
                      color="red"
                    />
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary relative"
                >
                  Settings
                  {/* <CircleAlert
                    className="absolute -top-1 -right-1.5 bg-orange-50 rounded-full w-6 h-6 p-1"
                    color="orange"
                  /> */}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="business" className="py-6">

                {me?.business_directory?.is_updated && (
                  <Alert
                    variant="default"
                    className="border-none bg-orange-100/40 p-3 "
                  >
                    <AlertTitle className="">
                      <div className="flex items-center gap-2 text-orange-400">
                        <AlertTriangle className="h-6 w-6 text-warning" />
                        <div> ការស្នើរធ្វើបច្ចុប្បន្នភាពគណនីអាជីវកម្មរបស់អ្នកកំពុងត្រួតពិនិត្យ!</div>
                      </div>
                    </AlertTitle>
                  </Alert>
                )}
                {me?.status === "APPROVED" && (
                  <div className="">
                    <Business />
                  </div>
                )}

              </TabsContent>
              <TabsContent value="profile" className="py-6">
                {me?.is_updated && (
                  <Alert
                    variant="default"
                    className="border-none bg-orange-100/40 p-3 "
                  >
                    <AlertTitle className="">
                      <div className="flex items-center gap-2 text-orange-400">
                        <AlertTriangle className="h-6 w-6 text-warning" />
                        <div> ការស្នើរធ្វើបច្ចុប្បន្នភាពគណនីរបស់អ្នកកំពុងត្រួតពិនិត្យ!</div>
                      </div>
                    </AlertTitle>
                  </Alert>
                )}
                <EditProfile />
              </TabsContent>
              <TabsContent value="settings" className="py-6">
                <div className="max-w-md">
                  <ChangePassword />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
