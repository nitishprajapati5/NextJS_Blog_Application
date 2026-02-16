"use client"

import { useActionState } from "react"
import { login } from "../_serverComponents/actions"

export default function Login() {
  const [state, formAction, pending] = useActionState(login, null)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action={formAction}
        className="w-full max-w-md p-8 rounded-xl shadow-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {state?.error && (
          <p className="text-red-500 text-sm text-center">
            {state.error}
          </p>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {pending ? "Signing in..." : "Sign In"}
        </button>
              <a href="/register">Don't have account ? Register here</a>
      </form>
    </div>
  )
}
