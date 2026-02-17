import { getSession } from "../lib/getSession"
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

type IBlogsData = IBlogs[]

export default async function Dashboard() {
  const getAllBlogsData:IBlogsData = await getAllBlogs()
  const user = await getSession()

  console.log(getAllBlogsData)

  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <div className="w-full max-w-4xl flex justify-end mb-6">
       <a href = "/blog/create">
         <button
          type="button"
          
          className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
        >
          Create Blog
        </button>
       </a>
      </div>

         <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard! Here you can manage your blogs.</p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

         {getAllBlogsData.map((d,index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition">
            <h2 className="font-semibold text-lg">{d.title}</h2>
            <div className="truncate">{d.content}</div>
            {d.tags.map((s,index) => <span key={index}>{'#'}{s}{" "}</span>)}

            <div className="flex flex-row">
              {user?.id === d.author._id && (<div>
              <a href={`/blog/edit/${d._id}`}><button className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition">Edit</button></a>
            </div> )}
            <div className="px-2">
              <a className="cursor-pointer" href={`/blog/${d._id}`}><button  className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition">View</button></a>
            </div>
            </div>
          </div>
         ))}
        </div>
      </div>
    </div>
  )
}
