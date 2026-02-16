"use client"

import { CreateBlog } from "@/app/dashboard/_ServerComponents/action"
import { useActionState } from "react"


export default function CreateBlogPage() {
    const [state,formAction,pending] = useActionState(CreateBlog,null)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form action={formAction} className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create a New Blog
        </h1>

        {/* Title */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter your title"
            name="title"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Content</label>
          <textarea
            placeholder="Enter content here"
            rows={6}
            name="content"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        {/* Tags */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Tags</label>
          <input
            type="text"
            name="tags"
            placeholder="Comma separated tags"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Create Blog
        </button>
      </form>
    </div>
  )
}
