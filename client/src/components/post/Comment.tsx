import { NextPage } from "next";
import type { Comment } from "@/types/Post";
import { useQuery } from "@apollo/client";
import { POST_USER } from "@/queries/postQueries";

const Comment: NextPage<Comment> = ({ commenterId, comment }) => {
  function userByComment(commenterId: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(POST_USER, {
      variables: { id: commenterId },
    });

    if (!loading) {
      return data.user;
    }
  }
  return (
    <div className=" bg-stone-300 rounded-md p-2">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden ">
          <img
            src={userByComment(commenterId)?.profileImg}
            alt="commenter image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-2">
          <p className="text-sm font-bold">
            {userByComment(commenterId)?.name}
          </p>
          <p className="text-xs text-gray">
            {userByComment(commenterId)?.headline}
          </p>
        </div>
      </div>
      <div className="my-2">{comment}</div>
    </div>
  );
};

export default Comment;
