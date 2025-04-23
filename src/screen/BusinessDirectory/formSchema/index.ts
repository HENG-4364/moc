import { z } from "zod";

export const applicationFormSchema = z.object({
  // businessLogo: z
  //   .instanceof(FileList, { message: "Business logo is required" })
  //   .refine((files) => files.length > 0, "Business logo is required"),
  business_name: z.string().min(1, "Business name (KH) is required*"),
  business_name_en: z.string().min(1, "Business name (EN) is required*"),
  // businessType: z.string().min(1, "Business type is required*"), 
  // workingHoursStart: z.string().min(1, "Start time is required"),
  // workingHoursEnd: z.string().min(1, "End time is required"),

  home_number: z.string().min(1, "House number is required*"),
  map_url: z.string().optional(),
  // telegram_url: z.string().optional(),
  // facebook_url: z.string().optional(),
  // tiktok_url: z.string().optional(),
  // youtube_url: z.string().optional(),
  street_number: z.string().min(1, "Street number is required*"),
  email: z.string().email("Invalid email address*"),
  website_url: z.string().url("Invalid URL format*"),
  phone_number: z.string().min(1, "Phone number is required*"),
  started_date: z.string().min(1, "Start time is required"),
  ended_date: z.string().min(1, "End time is required"),
  // banner: z
  //   .instanceof(FileList, { message: "Banner is required" })
  //   .refine((files) => files.length > 0, "Banner is required"),
  province: z
    .object({
      label: z.string(),
      label_en: z.string(),
      value: z.string(),
    })
    .refine((data) => data.label && data.value, {
      message: "",
    }),
  district: z
    .object({
      label: z.string(),
      label_en: z.string(),
      value: z.string(),
    })
    .refine((data) => data.label && data.value, {
      message: "",
    }),
  commune: z
    .object({
      label: z.string(),
      label_en: z.string(),
      value: z.string(),
    })
    .refine((data) => data.label && data.value, {
      message: "",
    }),
  villageOrGroup: z
    .object({
      label: z.string(),
      label_en: z.string(),
      value: z.string(),
    })
    .refine((data) => data.label && data.value, {
      message: "",
    }),
  category: z
    .object({
      label: z.string(),
      value: z.number(),
    })
    .refine((data) => data.label && data.value, {
      message: "",
    }),
});
