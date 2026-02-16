import mongoose, { Schema, models } from "mongoose"
import { User } from "./User"

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { 
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [{ type: String }],
  },
  { timestamps: true }
)

export const Blog = models.Blog || mongoose.model("Blog", BlogSchema)
