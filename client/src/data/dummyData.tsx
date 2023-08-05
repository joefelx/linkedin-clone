import User from "../types/User";
import Post from "../types/Post";

const dummyUser: User[] = [
  {
    id: 0,
    name: "Joe Felix",
    headline: "hello",
    city: "Dindigul",
    profileImg: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
  },
];

const dummyPost: Post[] = [
  {
    id: 0,
    userId: 0,
    caption: "This is the post",
    mediaType: "image",
    mediaURL:
      "https://th.bing.com/th/id/R.e1707c345d5ac10c80a674030e606643?rik=pOsTg5KBoLuNvw&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f08%2fimage-de-paysage.jpg&ehk=1O5SWKkGpZ8yU%2b%2fAnLXG1v8k6BKxgyiXgHbOWBW1ir0%3d&risl=1&pid=ImgRaw&r=0",
    likes: [],
    comments: [],
    repost: [],
    postAt: new Date("18-07-2023"),
  },
];

export { dummyUser, dummyPost };
