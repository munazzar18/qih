'use server'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const url = process.env.NEXT_PUBLIC_API_URL as string

export const LoginAction = async (formData: FormData) => {
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        const response = await fetch(`${url}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json();


        (await cookies()).set('token', data.token, {
            httpOnly: true,
            secure: true,
        });

        (await cookies()).set('user', JSON.stringify(data.user), {
            httpOnly: true,
            secure: true,
        })

        return data
    } catch (error) {
        return error
    }
}


export const LogoutAction = async () => {
    const cookieStore = cookies();
    (await cookieStore).delete('token');
    (await cookieStore).delete('user')
    // revalidatePath('/auth/login')
    // redirect('/auth/login')
    return
}


export const DepartmentCreateAction = async (formData: FormData) => {
    const token = (await cookies()).get('token')?.value
    const title = formData.get('title')
    try {
        const response = await fetch(`${url}departments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title })
        })
        const data = await response.json();
        return data
    } catch (error) {
        return error
    }
}

export const EditDepartmentAction = async (formData: FormData) => {
    const token = (await cookies()).get('token')?.value
    const id = formData.get('id')
    const title = formData.get('title')
    try {
        const response = await fetch(`${url}departments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title })
        })
        const data = await response.json();
        return data
    } catch (error) {
        return error
    }
}

export const ConsultantCreateAction = async (formData: FormData) => {
    const token = (await cookies()).get('token')?.value
    const name = formData.get('name')
    const email = formData.get('email')
    const office_extention = formData.get('office_extention')
    const photo = formData.get('photo')
    const department_id = Number(formData.get('department_id'))
    try {
        const response = await fetch(`${url}consultants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                email,
                office_extention,
                photo,
                department_id
            })
        })
        const data = await response.json();
        return data
    } catch (error) {
        return error
    }
}