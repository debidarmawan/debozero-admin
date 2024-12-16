'use server'

import { serviceUserRegister } from "../data/services/auth";
import { redirect } from "next/navigation";
import { FormState, SignupFormSchema } from "@/app/lib/definitions";

export async function signUp(state: FormState, formData: FormData): Promise<FormState> {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        fullname: formData.get('fullname'),
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            type: 'error'
        }
    }

    const { fullname, username, email, password, confirm_password } = validatedFields.data

    const reqData = {
        name: fullname,
        username: username,
        email: email,
        password: password,
        confirm_password: confirm_password,
    }

    try {
        const responseData = await serviceUserRegister(reqData)

        if (responseData.code != 200) {
            return {
                message: "Failed to Register.",
                type: 'error'
            };
        }
    } catch (error) {
        console.log(error)
        return {
            message: "Internal Server Error.",
            type: 'error'
        };
    }

    redirect('/auth/signin');
}