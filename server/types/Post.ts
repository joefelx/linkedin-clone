type Media = "image" | "video" | "document";

interface Post {
  id: string;
  userId?: string;
  caption: string;
  containMedia: Boolean;
  mediaType: Media;
  media: Array<string>;
  likes: Array<string>;
  comments: Array<string>;
  repost: Array<string>;
}

export default Post;
export { Media };
