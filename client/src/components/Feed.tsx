import { useQuery } from "@apollo/client";
import { ALLPOST } from "../queries/postQueries";
import Post from "./Post";
import PostType from "../types/Post";

function Feed() {
  const { loading, error, data } = useQuery(ALLPOST);

  const RenderPost = () => {
    return (
      <>
        {data.posts?.map((p: PostType) => (
          // eslint-disable-next-line react/jsx-key
          <Post post={p} />
        ))}
      </>
    );
  };

  return <>{loading ? "Loading" : <RenderPost />}</>;
}

export default Feed;
