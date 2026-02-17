import { IBlogs } from "@/app/dashboard/page";

interface BlogByIdProps {
  data: IBlogs;
}

export default function BlogById({ data }: BlogByIdProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 transition-colors duration-300">
        
        <div>
          <a
            href="/dashboard"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow hover:opacity-80 transition"
          >
            Back to Dashboard
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Title</h2>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-1">
            {data.title}
          </h1>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Content</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
            {data.content}
          </p>
        </div>

        {/* Tags */}
        <div>
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 dark:bg-blue-700 dark:text-blue-300 rounded-full transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Author</h2>
          <p className="text-gray-800 dark:text-gray-100 font-semibold mt-1">
            {data.author.name}
          </p>
        </div>

      </div>
    </div>
  );
}
