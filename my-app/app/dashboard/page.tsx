import { getSession } from "../lib/getSession"
import DashboardComponent from "./_Components/DashboardComponent"
import ThemeToggle from "./_Components/ThemeToggle"
import { getAllBlogs } from "./_ServerComponents/action"

export interface IBlogs {
  _id:string,
  title:string,
  content:string,
  author:Author,
  tags:string[]
}

export interface Author {
  _id:string,
  name:string
}

export type IBlogsData = IBlogs[]

export default async function Dashboard() {
  const getAllBlogsData:IBlogsData = await getAllBlogs()
  const user = await getSession()

  console.log(getAllBlogsData)

  

  return (
    <DashboardComponent data={JSON.parse(JSON.stringify(getAllBlogsData))} user={user} />
  )
}
