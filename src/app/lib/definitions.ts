import { z } from 'zod'

export const SignupFormSchema = z.object({
    fullname: z.string().min(2, { message: 'Name must be at least 2 characthers long. ' }).trim(),
    username: z.string().min(2, { message: 'Username must be at least 2 characthers long. ' }).trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string()
        .min(8, { message: 'Be at least 8 characthers long' })
        .regex(/[a-zA-Z]/, { message: 'Contains at least one letter. ' })
        .regex(/[0-9]/, { message: 'Contains at least one number. ' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Contains at least one special character. ' }).trim(),
    confirm_password: z.string()
        .min(8, { message: 'Be at least 8 characthers long' })
        .regex(/[a-zA-Z]/, { message: 'Contains at least one letter. ' })
        .regex(/[0-9]/, { message: 'Contains at least one number. ' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Contains at least one special character. ' }).trim()
})

export type FormState =
    | {
        errors?: {
            fullname?: string[]
            username?: string[]
            email?: string[]
            password?: string[]
            confirm_password?: string[]
        }
        message?: string
        type?: string
    }
    | undefined
