import { z } from "zod";

const phoneNumberSchema = z.string().min(9, "លេខទូរស័ព្ទចាំបាច់ត្រូវបំពេញ*");

export const loginSchema = z.object({
    phoneNumber: phoneNumberSchema,
    password: z.string().min(1, "ពាក្យសម្ងាត់ចាំបាច់ត្រូវបំពេញ*"),
});

export const forgotPasswordSchema = z.object({
    phoneNumber: phoneNumberSchema,
});

export const confirmTwoFactorVerificationSchema = z.object({
    phoneNumber: phoneNumberSchema,
    code: z.string().min(1, "លេខសម្ងាត់ចាំបាច់ត្រូវបំពេញ*"),
});

export const resetPasswordWithConfirmation = z.object({
    newPassword: z.string().min(1, "ពាក្យសម្ងាត់ចាំបាច់ត្រូវបំពេញ*"),
    confirmPassword: z.string().min(1, "ពាក្យសម្ងាត់ចាំបាច់ត្រូវបំពេញ*"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ConfirmTwoFactorVerificationSchemaFormData = z.infer<typeof confirmTwoFactorVerificationSchema>;
export type ResetPasswordWithConfirmationFormData = z.infer<typeof resetPasswordWithConfirmation>; 