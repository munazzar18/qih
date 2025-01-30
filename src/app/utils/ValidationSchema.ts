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
        .min(1, "Department name is required"),
    description: z
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
        .string()
        .min(1, "Photo is required"),
    department_id: z
        .string()
        .min(1, "Department is required")
})

export type ConstultantSchema = z.infer<typeof consultantSchema>

export const makeAppointmentSchema = z.object({
    mr_no: z
        .string()
        .min(1, "MR No is required"),
    patient_name: z
        .string()
        .min(1, "Patient name is required"),
    mobile_no: z
        .string()
        .min(1, "Mobile no is required")
        .max(11, "Mobile must be 11 characters"),
    appointment_dateTime: z
        .string()
        .min(1, "Date is required"),
    department_id: z
        .string()
        .min(1, "Department is required"),
    consultant_id: z
        .string()
        .min(1, "Consultant is required"),
    message: z
        .string()
        .min(1, "Message is required")
})

export type MakeAppointmentSchema = z.infer<typeof makeAppointmentSchema>

export const makeTickersSechema = z.object({
    title: z
        .string()
        .min(1, "Title is required"),
    url: z
        .string()
        .min(1, "url is required")
})

export type MakeTickersSchema = z.infer<typeof makeTickersSechema>