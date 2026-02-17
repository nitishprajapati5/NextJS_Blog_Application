"use client"

import { CreateBlog } from "@/app/dashboard/_ServerComponents/action"
import { useActionState } from "react"
import { useRouter } from "next/navigation"


export default function CreateBlogPage() {
  const router = useRouter()
    const [state,formAction,pending] = useActionState(CreateBlog,null)
    const handleSubmit = () => {
      router.push("/dashboard")
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form action={formAction} className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1><a href="/dashboard" className="px-4 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"><button onClick={() => handleSubmit()}>Back</button></a></h1>
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create a New Blog
        </h1>

        <span className="text-red-500 flex justify-center items-center">{state?.error}</span>
        <span className="text-green-500 flex justify-center items-center">{state?.message}</span>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter your title"
            name="title"
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Content</label>
          <textarea
            placeholder="Enter content here"
            rows={6}
            name="content"
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Tags</label>
          <input
            type="text"
            name="tags"
            placeholder="Comma separated tags"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          {pending ? "Creating Your Blog...." : "Create Blog"} 
        </button>
      </form>
    </div>
  )
}
