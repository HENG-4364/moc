import { z } from "zod";

export const changePasswordSchema = z
  .object({
    password: z.string().min(6, "ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងហោចណាស់ 6 តួអក្សរ"),
    confirmPassword: z.string(),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "ពាក្យសម្ងាត់មិនត្រូវគ្នា",
    path: ["confirmPassword"],
  });

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;