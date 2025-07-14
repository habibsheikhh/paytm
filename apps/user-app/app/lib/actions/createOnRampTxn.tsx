"use server"
 
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import {prisma} from "@repo/db/client"


export  const  createOnRampTxn  =  async(amount: number, provider: string) => {
    const session = await getServerSession(authOptions)
    const userId = session.user.id
    const token = Math.random().toString() // In real , token will come from bamk api
    if(!userId){
        return {
            message: "User not logged in"
        }
    }
    prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            amount: amount,
            status: "Processing",
            startTime: new Date(),
            provider,
            token: token
        }
    })
    return {
        message: "OnRamp Transaction Added"
    }
}