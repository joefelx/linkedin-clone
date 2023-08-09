import User from "../models/User";
import Post from "../models/Post";

import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import UserType, {
  JobType,
  LocationType,
  ProficiencyType,
} from "./UserGraphSchema";
import PostType, { MediaType } from "./PostGraphSchema";

import { authenticateUser, registerUser } from "../config/auth";

const AuthData = new GraphQLObjectType({
  name: "AuthData",
  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find();
      },
    },
    postByUser: {
      type: new GraphQLList(PostType),
      args: {
        userId: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Post.find({ userId: args.userId });
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: {
      type: AuthData,
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
        email: {
          type: GraphQLNonNull(GraphQLString),
        },
        password: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        return registerUser(args.name, args.email, args.password);
      },
    },
    login: {
      type: AuthData,
      args: {
        email: {
          type: GraphQLNonNull(GraphQLString),
        },
        password: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        return authenticateUser(args.email, args.password);
      },
    },
    updateUserBio: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: {
          type: GraphQLString,
        },
        headline: {
          type: GraphQLString,
        },
        city: {
          type: GraphQLString,
        },
        profileImg: {
          type: GraphQLString,
        },
        about: {
          type: GraphQLString,
        },
        skills: {
          type: new GraphQLList(GraphQLString),
        },
      },
      async resolve(parent, args) {
        return await User.findByIdAndUpdate(args.id, {
          name: args.name,
          headline: args.headline,
          city: args.city,
          profileImg: args.profileImg,
          about: args.about,
          skills: args.skills,
        });
      },
    },
    connection: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        connectionId: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        const currentUser = await User.findById(args.id);
        const connectionUser = await User.findById(args.connectionId);

        if (
          !currentUser?.connections?.includes(args.connectionId) &&
          !connectionUser?.connections?.includes(args.id)
        ) {
          await currentUser?.updateOne({
            $push: { connections: args.connectionId },
          });
          await connectionUser?.updateOne({
            $push: { connections: args.id },
          });
          return await User.findById(args.id);
        }
        return "Already in connection";
      },
    },
    follow: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        followerId: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        await User.findByIdAndUpdate(args.id, {
          $push: { followers: args.followerId },
        });
        await User.findByIdAndUpdate(args.followerId, {
          $push: { following: args.id },
        });
        return await User.findById(args.id);
      },
    },
    unfollow: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        followerId: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        await User.findByIdAndUpdate(args.id, {
          $pull: { followers: args.followerId },
        });
        await User.findByIdAndUpdate(args.followerId, {
          $pull: { following: args.id },
        });
        return await User.findById(args.id);
      },
    },
    addExperience: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        company: { type: GraphQLString },
        type: { type: JobType },
        location: { type: LocationType },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        industry: { type: GraphQLString },
        description: { type: GraphQLString },
        profileHeadline: { type: GraphQLString },
        skills: { type: new GraphQLList(GraphQLString) },
        media: { type: new GraphQLList(GraphQLString) },
      },
      async resolve(parent, args) {
        await User.findByIdAndUpdate(args.id, {
          $push: {
            experience: {
              title: args.title,
              company: args.company,
              type: args.type,
              location: args.location,
              startDate: args.startDate,
              endDate: args.endDate,
              industry: args.industry,
              profileHeadline: args.profileHeadline,
              skills: args.skills,
            },
          },
        });

        return await User.findById(args.id);
      },
    },
    addEducation: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        degree: { type: GraphQLString },
        field: { type: GraphQLString },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        grade: { type: GraphQLString },
        activities: { type: GraphQLString },
        description: { type: GraphQLString },
        skills: { type: new GraphQLList(GraphQLString) },
        media: { type: new GraphQLList(GraphQLString) },
      },
      async resolve(parent, args) {
        await User.findByIdAndUpdate(args.id, {
          $push: {
            education: {
              name: args.name,
              degree: args.degree,
              field: args.field,
              startDate: args.startDate,
              endDate: args.endDate,
              grade: args.grade,
              activities: args.activities,
              description: args.description,
              skills: args.skills,
              media: args.media,
            },
          },
        });

        return await User.findById(args.id);
      },
    },
    addCertification: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        organization: { type: GraphQLString },
        issueDate: { type: GraphQLString },
        expirationDate: { type: GraphQLString },
        credentialId: { type: GraphQLString },
        credentialURL: { type: GraphQLString },
        skills: { type: new GraphQLList(GraphQLString) },
      },
      async resolve(parent, args) {
        await User.findByIdAndUpdate(args.id, {
          $push: {
            certifications: {
              name: args.name,
              organization: args.organization,
              issueDate: args.issueDate,
              expirationDate: args.expirationDate,
              credentialId: args.credentialId,
              credentialURL: args.credentialURL,
              skills: args.skills,
            },
          },
        });

        return await User.findById(args.id);
      },
    },
    addProject: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        skills: { type: new GraphQLList(GraphQLString) },
        media: { type: new GraphQLList(GraphQLString) },
        currentlyWorking: { type: GraphQLBoolean },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        contributors: { type: new GraphQLList(GraphQLString) },
      },
      async resolve(parent, args) {
        await User.findByIdAndUpdate(args.id, {
          $push: {
            projects: {
              name: args.name,
              description: args.description,
              skills: args.skills,
              media: args.media,
              currentlyWorking: args.currentlyWorking,
              startDate: args.startDate,
              endDate: args.endDate,
              contributors: args.contributors,
            },
          },
        });

        return await User.findById(args.id);
      },
    },
    addLanguage: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        language: {
          type: GraphQLString,
        },
        proficiency: {
          type: ProficiencyType,
        },
      },
      async resolve(parent, args) {
        await User.findByIdAndUpdate(args.id, {
          $push: {
            languages: {
              language: args.language,
              proficiency: args.proficiency,
            },
          },
        });

        return await User.findById(args.id);
      },
    },
    createPost: {
      type: PostType,
      args: {
        userId: { type: GraphQLString },
        caption: { type: GraphQLString },
        containMedia: { type: GraphQLBoolean },
        mediaType: { type: MediaType },
        media: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parent, args) {
        const post = new Post({
          userId: args.userId,
          caption: args.caption,
          containMedia: args.containMedia,
          mediaType: args.mediaType,
          media: args.media,
        });

        return await post.save();
      },
    },
    like: {
      type: PostType,
      args: {
        postId: { type: GraphQLString },
        likedUserId: { type: GraphQLString },
      },
      async resolve(parent, args) {
        await Post.findByIdAndUpdate(args.postId, {
          $push: {
            likes: args.likedUserId,
          },
        });
        return await Post.findById(args.postId);
      },
    },
    comment: {
      type: PostType,
      args: {
        postId: { type: GraphQLString },
        commenterId: { type: GraphQLString },
        commentText: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const post = await Post.findById(args.postId);

        await post?.updateOne({
          $push: {
            comments: {
              commenterId: args.commenterId,
              comment: args.commentText,
            },
          },
        });

        return await Post.findById(args.postId);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
