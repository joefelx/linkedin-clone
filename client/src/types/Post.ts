type Media = "image" | "video" | "document";

interface Comment {
  commenterId: string;
  comment: string;
}

interface Post {
  id: string;
  userId?: string;
  caption: string;
  containMedia: Boolean;
  mediaType: Media;
  media: Array<string>;
  likes: Array<string>;
  comments: Array<Comment>;
  repost: Array<string>;
}

export default Post;
export type { Media, Comment };
