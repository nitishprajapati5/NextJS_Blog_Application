import { getBlogById } from "@/app/dashboard/_ServerComponents/action";
import BlogById from "./_Components/BlogById";
import { IBlogs } from "@/app/dashboard/page";

interface PageProps {
  params: Promise<{ id: string }>;
}

type getSingleBlogById = IBlogs

export default async function BlogId(
    {params}:PageProps
){
    const {id} = await params
    const getSingleBlog:getSingleBlogById = await getBlogById(id)
    console.log(getSingleBlog)
    return (
        <BlogById data={getSingleBlog} />
    )
}