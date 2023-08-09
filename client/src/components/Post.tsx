"use client";
import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import User from "../types/User";
import PostType from "../types/Post";
import { dummyPost, dummyUser } from "../data/dummyData";
import { BsHandThumbsUp } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";

import AvatarImg from "../assets/avatar.jpg";
import { NextPage } from "next";
import { ALL_USERS, USER } from "..//queries/userQueries";

type AppProps = {
  post: PostType;
};

const Post: NextPage<AppProps> = ({ post }) => {
  const [postUser, setPostUser] = useState<User>(dummyUser[0]);

  const POST_USER = gql`
    query User($id: String!) {
      user(id: $id) {
        name
        headline
        profileImg
      }
    }
  `;

  const { loading, error, data } = useQuery(POST_USER, {
    variables: { id: post.userId },
  });

  useEffect(() => {
    setPostUser(data?.user);
  }, [loading]);

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
    <div className="bg-white h-auto min-h-full w-5/12 text-sm rounded-md my-2 border border-borderLine">
      {/* user data */}
      <div className="flex justify-between items-center py-2 px-3">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={postUser?.profileImg}
              alt="postUser"
            />
          </div>
          <div className="ml-2">
            <h2 className="font-bold">{postUser?.name}</h2>
            <p className="text-gray text-xs">{postUser?.headline}</p>
            <p className="text-gray text-xs">1hr</p>
          </div>
        </div>

        <button className=" text-linkedinBlue font-bold">Connect</button>
      </div>
      {/* post captions */}
      <div className="px-3 text-sm">
        <p>{post.caption}</p>
      </div>
      {/* post media */}
      <div className="h-[45rem] flex items-center justify-center">
        <img
          className="h-full object-cover"
          src={post.media[0]}
          alt="postImg"
        />
      </div>
      {/* post like, comments, repos count */}
      <div className="mx-3 py-2 text-xs text-gray flex justify-between border-b border-borderLine">
        <section className="">
          <span>{post.likes.length} others</span>
        </section>
        <section className="flex justify-between items-start">
          <span>{post.comments.length} comments</span>
          <span className="mx-1">.</span>
          <span>{post.repost.length} reposts</span>
        </section>
      </div>
      {/* buttons */}
      <ul className="flex justify-evenly py-5">
        <li className="text-sm font-bold text-gray flex items-center justify-between cursor-pointer">
          <BsHandThumbsUp className="text-[28px]" />
          Like
        </li>
        <li className="text-sm font-bold text-gray flex items-center justify-between cursor-pointer">
          <svg
            className="text-gray w-7"
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
          >
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
          </svg>
          Comment
        </li>
        <li className="text-sm font-bold text-gray flex items-center justify-between cursor-pointer">
          <BiRepost className="text-[28px]" />
          Repost
        </li>
        <li className="text-sm font-bold text-gray flex items-center justify-between cursor-pointer">
          <svg
            className="text-gray w-7"
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>
          Send
        </li>
      </ul>

      <div className="p-5">
        {post?.comments.map((c) => (
          // eslint-disable-next-line react/jsx-key
          <div className=" bg-stone-300 rounded-md p-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={userByComment(c.commenterId)?.profileImg}
                  alt="commenter image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm font-bold">
                  {userByComment(c.commenterId)?.name}
                </p>
                <p className="text-xs text-gray">
                  {userByComment(c.commenterId)?.headline}
                </p>
              </div>
            </div>
            <div className="my-2">{c.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
