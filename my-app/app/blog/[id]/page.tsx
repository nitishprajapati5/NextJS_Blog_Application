import { getBlogById } from "@/app/dashboard/_ServerComponents/action";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogId(
    {params}:PageProps
){
    const {id} = await params
    const getSingleBlog = getBlogById(id)
    return (
        <div>{id}</div>
    )
}