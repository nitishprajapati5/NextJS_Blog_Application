"use client";

import { SessionUser } from "@/app/lib/getSession";
import { IBlogsData } from "../page";
import ThemeToggle from "./ThemeToggle";

interface DashboardComponentProps {
  data: IBlogsData;
  user: SessionUser | null;
}

export default function DashboardComponent({
  data,
  user,
}: DashboardComponentProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-6 transition-colors duration-300">
      
      <div className="w-full max-w-4xl flex justify-end gap-3 mb-6">
        <a href="/blog/create">
          <button
            type="button"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow hover:opacity-80 transition"
          >
            Create Blog
          </button>
        </a>

        <ThemeToggle />
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4 transition-colors duration-300">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to your dashboard! Here you can manage your blogs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((d) => (
            <div
              key={d._id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition bg-gray-50 dark:bg-gray-700"
            >
              <h2 className="font-semibold text-lg">{d.title}</h2>

              <div className="truncate text-sm text-gray-600 dark:text-gray-300">
                {d.content}
              </div>

              <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                {d.tags.map((s, index) => (
                  <span key={index}>#{s} </span>
                ))}
              </div>

              <div className="flex flex-row mt-4 gap-2">
                {user?.id === d.author._id && (
                  <a href={`/blog/edit/${d._id}`}>
                    <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow hover:opacity-80 transition">
                      Edit
                    </button>
                  </a>
                )}

                <a href={`/blog/${d._id}`}>
                  <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow hover:opacity-80 transition">
                    View
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
