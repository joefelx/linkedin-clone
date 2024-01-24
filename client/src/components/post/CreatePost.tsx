import { HiPhotograph } from "react-icons/hi";
import { PiVideoFill, PiArticleMediumLight } from "react-icons/pi";
import { BsCalendarDateFill } from "react-icons/bs";

const CreatePost = ({ user, clicked }) => {
  let listStyling =
    "flex items-center text-sm text-gray font-bold cursor-pointer";

  return (
    <div className="bg-white min-h-16 h-auto w-5/12 text-sm rounded-md my-2 border border-borderLine">
      {/* profile image and textfield */}
      <section className="flex justify-between p-4 h-auto">
        <div className="w-12 h-12">
          <img
            className="w-full object-cover"
            src={user?.profileImg}
            alt="profile"
          />
        </div>
        <div
          className="min-h-12 h-auto w-full ml-2 flex rounded-full overflow-hidden border border-gray"
          onClick={() => clicked(true)}
        >
          <input
            className="flex w-full h-full px-4 outline-none"
            type="text"
            placeholder="Start a post"
          />
        </div>
      </section>
      {/* media options buttons */}
      <ul className="px-10 pt-2 pb-4 w-full flex justify-between items-center">
        <li className={listStyling}>
          <HiPhotograph className=" text-xl text-blue-500 mx-2" />
          Photo
        </li>
        <li className={listStyling}>
          <PiVideoFill className=" text-xl text-green-600 mx-2" />
          Video
        </li>
        <li className={listStyling}>
          <BsCalendarDateFill className=" text-lg text-amber-600 mx-2" />
          Event
        </li>
        <li className={listStyling}>
          <PiArticleMediumLight className=" text-xl text-red-600 mx-2" />
          Write Article
        </li>
      </ul>
    </div>
  );
};

export default CreatePost;
