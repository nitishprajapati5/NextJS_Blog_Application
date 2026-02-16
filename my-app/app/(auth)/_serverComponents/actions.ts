"use server"

import { jsonWebTokenGeneration } from "@/app/lib/getSession";
import { connectDB } from "@/app/lib/mongoose";
import { User } from "@/app/models/User";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export  async function login(
    prevState:any,
    formData:FormData
){
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if(!email || !password){
        return {error:"Email and Password is Required!"}
    }

    try {
        await connectDB()

        const user = await User.findOne({email:email})
        console.log(user)
        if(!user){
            return {error:"User Not Found!"}
        }

        const token = jsonWebTokenGeneration(user.id,user.email);

        (await cookies()).set('access_token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:'lax',
            path:"/",
            maxAge:60 * 60 * 24 * 1
        })

    } catch (error) {
        console.log(error)
        return {error:"Something went wrong!"}
    }
    redirect("/dashboard")

}

export async function register( 
    prevState:any,
    formData:FormData){
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try{

    await connectDB()

    const existingUser = await User.findOne({email:email})
    if(existingUser){
        return {error:"User Already Exits"}
    }

    const user = await User.create({email:email,password:password,name:email})
    console.log(user)


    } catch (error) {
        console.log(error)
        return {error:"Something went wrong!"}
    }

    redirect("/dashboard")

}