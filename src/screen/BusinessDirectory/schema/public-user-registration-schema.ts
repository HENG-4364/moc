import { z } from "zod";

export const signUpSchema = z
  .object({
    lastName: z.string().min(1, "នាមត្រកូលត្រូវបានទាមទារ*"),
    firstName: z.string().min(1, "នាមខ្លួនត្រូវបានទាមទារ*"),
    email: z.string().min(1, "អ៊ីមែលត្រូវបានទាមទារ*"),
    phoneNumber: z.string().min(9, "លេខទូរស័ព្ទមិនត្រឹមត្រូវ*"),
    password: z.string().min(6, "ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងហោចណាស់ 6 តួអក្សរ*"),
    confirmPassword: z.string(),
    agree: z.literal(true, {
      errorMap: () => ({
        message: "You must accept the terms and conditions*",
      }),
    }),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "ពាក្យសម្ងាត់មិនត្រូវគ្នា*",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;