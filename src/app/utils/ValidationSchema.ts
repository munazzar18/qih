import { z } from "zod";

export const registerSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Email is invalid"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
    mobile: z
        .string()
        .min(1, "Mobile is required")
        .max(22, "Mobile must be 10 characters")
})

export type RegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required"),
    password: z
        .string()
        .min(1, "Password is required")
})

export type LoginScehma = z.infer<typeof loginSchema>


export const departmentSchema = z.object({
    title: z
        .string()
        .min(1, "Department name is required")
})

export type DepartmentSchema = z.infer<typeof departmentSchema>

export const consultantSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Email is invalid"),
    office_extention: z
        .string()
        .min(1, "Office extention is required"),
    photo: z
        .custom<File | null>((file) => file === null || file instanceof File, {
            message: "Photo is required",
        }),
    department_id: z
        .number()
        .min(1, "Department is required")
})

export type ConstultantSchema = z.infer<typeof consultantSchema>