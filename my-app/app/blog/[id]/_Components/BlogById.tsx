import { IBlogs } from "@/app/dashboard/page"

interface BlogByIdProps {
  data: IBlogs
}

export default function BlogById({ data }: BlogByIdProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <div><a href="/dashboard" className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition">Back to Dashboard</a></div>
        <div>
          <h2 className="text-sm font-medium text-gray-500">Title</h2>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">
            {data.title}
          </h1>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500">Content</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            {data.content}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <h2 className="text-sm font-medium text-gray-500">Author</h2>
          <p className="text-gray-800 font-semibold mt-1">
            {data.author.name}
          </p>
        </div>

      </div>
    </div>
  )
}
