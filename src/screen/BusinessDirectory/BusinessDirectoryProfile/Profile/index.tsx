"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Loader2 } from "lucide-react";
import { useUserStore } from "@/stores/me";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema } from "../../schema";
import type { UpdateProfileFormData } from "../../schema";
import { UPDATE_PUBLIC_USER_ME_MUTATION } from "../../graphql/Mutation";
import { settings } from "@/lib/settings";
import Image from "next/image";
import SingleUpload from "@/components/Upload/Drozone/SingleUpload";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const me = useUserStore((state) => state.me);
  const setMe = useUserStore((state) => state.setMe);
  const [updateProfile, { loading }] = useMutation(UPDATE_PUBLIC_USER_ME_MUTATION);
  const [logo, setLogo] = useState<string | null>(`${me?.profile_picture}` || null);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      first_name: me?.first_name || "",
      last_name: me?.last_name || "",
      email: me?.email || ""
    }
  });


  const onSubmit: SubmitHandler<UpdateProfileFormData> = async (data) => {
    try {
      const variables = {
        publicUserUpdateProfileId: me?.id,
        websiteId: settings.websiteId,
        input: {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          profile_picture: logo || null,
          phone_number: me?.phone_number
        }
      };
      const response = await updateProfile({
        variables: variables
      });

      if (response.data?.publicUserUpdateProfile?.success) {
        const updatedUser = {
          ...me,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          profile_picture: logo || null,
        };

        setMe(updatedUser);
        toast.success(response.data?.publicUserUpdateProfile?.message || "Profile updated successfully");
        router.refresh();
      } else {
        toast.error(response.data?.publicUserUpdateProfile?.message || "Failed to update profile");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };
  const handleFileUpload = (fileURL?: string | undefined) => {
    const fileNames = fileURL;
    if (fileNames) {
      setLogo(fileNames);
    } else {
      setLogo(null)
    }
  };
  return (
    <div className="p-4">
      {(me?.status === "INREVIEW" || me?.status === "PENDING") && (
        <>
          <div className="flex justify-center items-center h-[320px] w-full">
            <div className="text-center flex justify-center items-center">
              <div className="p-3 border-0 flex flex-col items-center">
                <Image src="/inreview-icon.svg" alt="Status Icon" width={150} height={150} className="w-[150px] h-auto" />
                <div className="mt-2 font-bold text-lg ">គណនីរបស់អ្នកកំពុងត្រួតពិនិត្យ</div>
              </div>
            </div>
          </div>
        </>
      )}
      {me?.status === "REJECTED" && (
        <>
          <div className="flex justify-center items-center h-[320px] w-full">
            <div className="text-center flex justify-center items-center">
              <div className="p-3 border-0 flex flex-col items-center">
                <Image
                  src="/rejected-icon.svg"
                  alt="Rejected Status Icon"
                  width={150}
                  height={150}
                  className="w-[150px] h-auto"
                />
                <div className="mt-2 font-bold text-lg">គណនីរបស់អ្នកត្រូវបានបដិសេដ</div>
              </div>
            </div>
          </div>
        </>
      )}
      {(me?.status === "APPROVED" || me?.status === "REVERSION") && (
        <>
          <h1 className="mb-4 text-xl font-semibold">ពត៌មានផ្ទាល់ខ្លួន</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <div className="pt-6">
                <div className="grid grid-cols-6 mb-2">
                  <div className="col-span-3 md:col-span-1 flex justify-center items-center">
                    <SingleUpload
                      disabled={me?.is_updated}
                      onFileUpload={handleFileUpload}
                      defaultValue={`${me?.profile_picture}`}
                      acceptedFileTypes={["image/*"]}
                      maxFileSize={5 * 1024 * 1024}
                      buttonText="Choose File"
                      dropzoneText="Upload your profile picture"
                    />
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="last_name">
                        នាមត្រកូល <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        disabled={me?.is_updated}
                        id="last_name"
                        {...register("last_name")}
                        aria-invalid={errors.last_name ? "true" : "false"}
                      />
                      {errors.last_name && (
                        <p className="text-sm text-destructive mt-1">{errors.last_name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="first_name">
                        នាមខ្លួន <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        disabled={me?.is_updated}
                        id="first_name"
                        {...register("first_name")}
                        aria-invalid={errors.first_name ? "true" : "false"}
                      />
                      {errors.first_name && (
                        <p className="text-sm text-destructive mt-1">{errors.first_name.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      អ៊ីមែល <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      disabled={me?.is_updated}
                      id="email"
                      type="email"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">លេខទូរស័ព្ទ</Label>
                    <Input
                      disabled
                      id="phone"
                      type="tel"
                      value={me?.phone_number || ""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => reset()}
                disabled={loading || !isDirty}
              >
                បោះបង់
              </Button>
              <Button
                type="submit"
                className="md:w-auto hover:bg-primary"
                disabled={loading || me?.is_updated}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    កំពុងដំណើរការ...
                  </>
                ) : (
                  "ធ្វើបច្ចុប្បន្នភាព"
                )}
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}