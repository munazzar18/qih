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