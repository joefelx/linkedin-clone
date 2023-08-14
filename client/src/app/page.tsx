"use client";

import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="w-full h-full bg-secondaryWhite">
      <Header />
      <div className="flex flex-col items-center">
        <CreatePost />
        <Feed />
      </div>
    </div>
  );
}
