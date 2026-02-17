"use server"
import { getSession } from "@/app/lib/getSession";
import { Blog } from "@/app/models/Blog";
import { User } from "@/app/models/User";
import { connectDB } from "@/app/lib/mongoose";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function getAllBlogs() {
   try {
     const user = await getSession();
     if (!user) redirect("/login");

     await connectDB();

     const blogs = await Blog.find()
       .populate("author", "name")
       .lean();

     return JSON.parse(JSON.stringify(blogs)); 
   } catch (error) {
      console.log(error);
      return { error: "Something went Wrong!" };
   }
}

export async function getBlogById(id:string){
   try {
     const user = await getSession()
    if(!user){
        redirect("/login")
    }

    console.log("ID",id)

    await connectDB();

    const blog = await Blog.findById(id)
       .populate("author", "name")
       .lean();
 
    console.log(blog)
    return blog
   } catch (error) {
        console.log(error)
        return {error:"Something went wrong!"}
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
   try {
        const user = await getSession()
    if(!user){
        redirect("/login")
    }

    await connectDB()

    const formTitle = formData.get("title") as string;
    const formContent = formData.get("content") as string;
    const tags = formData.get("tags") as string;
    const id = formData.get("id") as string;

    if(!id){
        return {error:"Please make sure you are Edit Valid Blog!"}
    }

    if(!formTitle || !formContent || !tags){
        return {error:"Please enter required Information!"}
    }
    const formTags = tags.split(",");

    console.log(formTags)

    const updatedBlogData = await Blog.findOneAndUpdate({_id:id,author:user.id},{title:formTitle,content:formContent,tags:formTags},{new : true})

    if(!updatedBlogData){
        return {error:"Blog not found or unauthorized.!"}
    }

    revalidatePath(`/blog/edit/${id}`)
    revalidatePath("/dashboard")

    return {
        message:"Blog Updated Successfully"
    }
    } catch (error) {
        console.log(error)
        return {error:"Something Went Wrong!"}
    }



}