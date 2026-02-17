"use client";

import { EditBlog } from "@/app/dashboard/_ServerComponents/action";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { IBlogs } from "@/app/dashboard/page";

interface BlogEditComponentProps {
  data: IBlogs;
}

export default function BlogEditComponent({ data }: BlogEditComponentProps) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(EditBlog, null);

  const handleSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <form
        action={formAction}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 transition-colors duration-300"
      >
        <div>
          <a href="/dashboard">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-semibold hover:opacity-80 transition"
            >
              Back
            </button>
          </a>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
          Update/Edit Blog
        </h1>

        {state?.error && (
          <span className="text-red-500 flex justify-center items-center">
            {state.error}
          </span>
        )}
        {state?.message && (
          <span className="text-green-500 flex justify-center items-center">
            {state.message}
          </span>
        )}

        <input type="hidden" value={data._id} name="id" />

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter your title"
            name="title"
            defaultValue={data.title}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            Content
          </label>
          <textarea
            placeholder="Enter content here"
            rows={6}
            name="content"
            defaultValue={data.content}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            placeholder="Comma separated tags"
            defaultValue={data.tags}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg font-semibold hover:opacity-80 transition"
        >
          {pending ? "Updating Blog..." : "Update/Edit Blog"}
        </button>
      </form>
    </div>
  );
}
