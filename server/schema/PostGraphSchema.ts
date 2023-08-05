import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const MediaType = new GraphQLEnumType({
  name: "Media",
  values: {
    IMG: {
      value: "image",
    },
    VID: {
      value: "video",
    },
    DOC: {
      value: "document",
    },
  },
});

const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    commenterId: {
      type: GraphQLString,
    },
    comment: {
      type: GraphQLString,
    },
  }),
});

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLString },
    caption: { type: GraphQLString },
    containMedia: { type: GraphQLBoolean },
    mediaType: { type: MediaType },
    media: { type: GraphQLList(GraphQLString) },
    likes: { type: GraphQLList(GraphQLString) },
    comments: { type: GraphQLList(CommentType) },
    repost: { type: GraphQLList(GraphQLString) },
  }),
});

export default PostType;
export { MediaType };
