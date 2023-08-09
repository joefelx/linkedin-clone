"use client";

import { useQuery } from "@apollo/client";
import Post from "./Post";
import { ALLPOST } from "../queries/postQueries";
import { useEffect, useState } from "react";
import PostType from "@/types/Post";

function Feed() {
  const { loading, error, data } = useQuery(ALLPOST);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          {data.posts?.map((p: PostType) => (
            <Post post={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
