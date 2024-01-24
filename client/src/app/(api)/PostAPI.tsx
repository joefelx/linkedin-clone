import { CREATE_POST } from "@/mutations/postMutations";
import { Media } from "@/types/Post";
import { useMutation } from "@apollo/client";

export function CreatePost(
  userId: String,
  caption: String,
  containMedia: Boolean,
  mediaType: Media,
  media: Array<String>
) {
  const [createPost, { loading, data, error }] = useMutation(CREATE_POST, {
    variables: {
      userId,
      caption,
      containMedia,
      mediaType,
      media,
    },
  });

  return { createPost, loading, data, error };
}
