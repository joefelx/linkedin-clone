import { useQuery } from "@apollo/client";
import { ALLPOST } from "../queries/postQueries";
import Post from "./Post";
import PostType from "../types/Post";
import { Key } from "react";

function Feed() {
  const { loading, error, data } = useQuery(ALLPOST);

  const RenderPost = () => {
    return (
      <>
        {data.posts?.map((p: PostType, index: Key | null | undefined) => (
          // eslint-disable-next-line react/jsx-key
          <Post key={index} post={p} />
        ))}
      </>
    );
  };

  return <>{loading ? "Loading" : <RenderPost />}</>;
}

export default Feed;
