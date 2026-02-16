"use server"
import { getSession } from "@/app/lib/getSession";
import { connectDB } from "@/app/lib/mongoose";
import { Blog } from "@/app/models/Blog";
import { User } from "@/app/models/User";
import { redirect } from "next/navigation";


export async function getAllBlogs(){
   try {
     const user = await getSession()
    if(!user){
        redirect("/login")
    }

    await connectDB();

    const getAllBlogsFromDataBase = await Blog.find().populate("author","name")
    console.log(getAllBlogsFromDataBase)
    return getAllBlogsFromDataBase;
   } catch (error) {
      console.log(error)
      return {error:"Something went Wrong!"}
   }

}

export async function getBlogsById(prevState:any,formData:FormData){
    const user = await getSession()
    if(!user){
        redirect("/login")
    }
}

export async function CreateBlog(prevState:any,formData:FormData){
    try {
        const user = await getSession()
    if(!user){
        redirect("/login")
    }

    await connectDB()

    const formTitle = formData.get("title") as string;
    const formContent = formData.get("content") as string;
    const tags = formData.get("tags") as string;

    if(!formTitle || !formContent || !tags){
        return {error:"Please enter required Information!"}
    }
    const formTags = tags.split(",");

    console.log(formTags)

    const blogData = await Blog.create({title:formTitle,content:formContent,tags:formTags,author:user.id})

    return {
        message:"Blog Created Successfully"
    }
    } catch (error) {
        console.log(error)
        return {error:"Something Went Wrong!"}
    }
}

export async function EditBlog(prevState:any,formData:FormData){
    const user = await getSession()
    if(!user){
        redirect("/login")
    }

    await connectDB();


}