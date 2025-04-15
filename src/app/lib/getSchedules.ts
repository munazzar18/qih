"use server"
import { cookies } from "next/headers"
const url = process.env.NEXT_PUBLIC_API_URL as string

export const getConsultantSchedules = async (id: number) => {

    const token = ((await cookies()).get('token')?.value)
    try {
        const res = await fetch(`${url}schedules/consultant/${id}`,
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
        const data = await res.json()

        return data
    } catch (error) {
        return error
    }
}

export const getSlotsByDate = async (consultantId: number, date: string,) => {
    console.log("Consultant ID: ", consultantId)
    console.log("Date: ", date)
    try {
        const res = await fetch(`${url}public/schedules/${consultantId}/${date}`,
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',

                },
            })
        const data = await res.json()
        console.log("Data: ", data)
        return data
    } catch (error) {
        return error
    }
}
