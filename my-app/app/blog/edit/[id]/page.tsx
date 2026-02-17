import { getBlogById } from "@/app/dashboard/_ServerComponents/action"
import { IBlogs } from "@/app/dashboard/page"
import BlogEditComponent from "./_Components/BlogEditComponent"

interface PageProps {
    params:Promise<{id:string}>
}

export default async function EditPage({params}:PageProps){
    
    const {id} = await params

    const getEditableDataById:IBlogs = await getBlogById(id)

    const data = JSON.parse(JSON.stringify(getEditableDataById))
    
    return (
        <BlogEditComponent data={data} />
    )
}