import React, { useState } from "react";
import { HiPhotograph } from "react-icons/hi";

const CreatePostBox = ({ close }) => {
  const [input, setInput] = useState("");

  function handlePost() {}

  return (
    <div className="absolute h-full w-full flex items-center justify-center backdrop-blur-sm bg-white/30 z-10">
      <div className="w-1/2 h-full bg-white p-5 rounded-lg">
        <div className="w-full flex justify-end">
          <button onClick={() => close(false)}>X</button>
        </div>
        <div className="flex w-full h-96 bg-slate-600">
          <textarea
            className="h-full w-full p-2 focus:outline-none"
            placeholder="What do you want to talk about?"
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div>
          <HiPhotograph className=" text-xl text-gray mx-2" />
        </div>
        <hr className="border-b border-borderLine" />
        <div className="pt-5">
          <button
            className="bg-linkedinBlue text-white text-md px-3 py-2 rounded-3xl"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostBox;
