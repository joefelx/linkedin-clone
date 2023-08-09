import User from "../types/User";
import Post from "../types/Post";

const dummyUser: User[] = [
  {
    id: "0",
    name: "Joe Felix",
    email: "joefelix@email.com",
    followers: [],
    following: [],
    connections: [],
    about: "this is felix",
    headline: "hello",
    city: "Dindigul",
    profileImg: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    skills: [],
    languages: [],
  },
  {
    id: "1",
    name: "Jeffrey",
    email: "jeffrey@email.com",
    followers: [],
    following: [],
    connections: [],
    about: "this is jeffrey",
    headline: "hello",
    city: "Dindigul",
    profileImg: "https://www.pngall.com/wp-content/uploads/5/Profile.png",
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    skills: [],
    languages: [],
  },
];

const dummyPost: Post[] = [
  {
    id: "0",
    userId: "0",
    caption: "This is the post",
    containMedia: true,
    mediaType: "image",
    media: [
      "https://th.bing.com/th/id/R.e1707c345d5ac10c80a674030e606643?rik=pOsTg5KBoLuNvw&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f08%2fimage-de-paysage.jpg&ehk=1O5SWKkGpZ8yU%2b%2fAnLXG1v8k6BKxgyiXgHbOWBW1ir0%3d&risl=1&pid=ImgRaw&r=0",
    ],
    likes: ["1"],
    comments: [{ commenterId: "1", comment: "Awesome Post" }],
    repost: [],
  },
];

export { dummyUser, dummyPost };
