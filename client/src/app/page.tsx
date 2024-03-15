"use client";

import CreatePost from "@/components/post/CreatePost";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
import checkUser from "@/utils/checkUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CreatePostBox from "@/components/CreatePostBox";

export default function Home() {
  let user = checkUser();
  
  const router = useRouter();
  const [createPost, setCreatePost] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <div className="w-full h-full bg-secondaryWhite">
      <Header />
      {createPost && <CreatePostBox close={setCreatePost} />}
      <div className="flex flex-col items-center">
        <CreatePost user={user} clicked={setCreatePost} />
        <Feed />
      </div>
    </div>
  );
}
