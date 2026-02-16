import { getAllBlogs } from "./_ServerComponents/action"

export default function Dashboard() {
  const getAllBlogsData = getAllBlogs()
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header / Action */}
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

      {/* Main Content */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard! Here you can manage your blogs.</p>

        {/* Example Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h2 className="font-semibold text-lg">My First Blog</h2>
            <p className="text-gray-500 text-sm mt-1">Created on Feb 16, 2026</p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h2 className="font-semibold text-lg">Another Blog</h2>
            <p className="text-gray-500 text-sm mt-1">Created on Feb 15, 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
