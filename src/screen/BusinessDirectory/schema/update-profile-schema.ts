import { z } from "zod";

export const updateProfileSchema = z
  .object({
    first_name: z.string().min(1, "នាមខ្លួនត្រូវបានទាមទារ*"),
    last_name: z.string().min(1, "នាមត្រកូលត្រូវបានទាមទារ*"),
    email: z.string().min(1, "អ៊ីមែលត្រូវបានទាមទារ*"),
    profile_picture: z.string().nullable().optional()
  });

export type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;