import mongoose from "mongoose";
import Post, { Media } from "../types/Post";

const postSchema = new mongoose.Schema<Post>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  caption: {
    type: String,
  },
  containMedia: {
    type: Boolean,
    required: true,
  },
  mediaType: {
    type: String,
  },
  media: [
    {
      type: String,
    },
  ],
  likes: [
    {
      type: String,
    },
  ],
  comments: [
    {
      type: String,
    },
  ],
  repost: [
    {
      type: String,
    },
  ],
});

export default mongoose.model<Post>("Post", postSchema);
