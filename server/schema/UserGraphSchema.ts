import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

// Enum Types
const JobType = new GraphQLEnumType({
  name: "Job",
  values: {
    FULLTIME: {
      value: "Full-time",
    },
    PARTTIME: {
      value: "Part-time",
    },
    SELFEMPOLYED: {
      value: "Self-employed",
    },
    FREELANCE: {
      value: "Freelance",
    },
    INTERNSHIP: {
      value: "Internship",
    },
    TRAINEE: {
      value: "Trainee",
    },
  },
});
const LocationType = new GraphQLEnumType({
  name: "Location",
  values: {
    ONSITE: {
      value: "On-site",
    },
    HYBRID: {
      value: "Hybrid",
    },
    REMOTE: {
      value: "Remote",
    },
  },
});
const ProficiencyType = new GraphQLEnumType({
  name: "Proficiency",
  values: {
    ELEMENTARY: {
      value: "Elementary proficiency",
    },
    LIMITEDWORKING: {
      value: "Limited working proficiency",
    },
    PROFESSIONAL: {
      value: "Professional working proficiency",
    },
    FULL: {
      value: "Full professional proficiency",
    },
    NATIVE: {
      value: "Native or bilingual proficiency",
    },
  },
});

// Object Types
const Language = new GraphQLObjectType({
  name: "Language",
  fields: () => ({
    language: {
      type: GraphQLString,
    },
    proficiency: {
      type: ProficiencyType,
    },
  }),
});
const Experience = new GraphQLObjectType({
  name: "Experience",
  fields: () => ({
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
  }),
});
const Certification = new GraphQLObjectType({
  name: "Certification",
  fields: () => ({
    name: { type: GraphQLString },
    organization: { type: GraphQLString },
    issueDate: { type: GraphQLString },
    expirationDate: { type: GraphQLString },
    credentialId: { type: GraphQLString },
    credentialURL: { type: GraphQLString },
    skills: { type: new GraphQLList(GraphQLString) },
  }),
});
const Education = new GraphQLObjectType({
  name: "Education",
  fields: () => ({
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
  }),
});
const Project = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    skills: { type: new GraphQLList(GraphQLString) },
    media: { type: new GraphQLList(GraphQLString) },
    currentlyWorking: { type: GraphQLBoolean },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    contributors: { type: new GraphQLList(GraphQLString) },
  }),
});

// User Object Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    followers: {
      type: new GraphQLList(GraphQLString),
    },
    following: {
      type: new GraphQLList(GraphQLString),
    },
    connections: {
      type: new GraphQLList(GraphQLString),
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
    experience: {
      type: new GraphQLList(Experience),
    },
    education: {
      type: new GraphQLList(Education),
    },
    certifications: {
      type: new GraphQLList(Certification),
    },
    projects: {
      type: new GraphQLList(Project),
    },
    skills: {
      type: new GraphQLList(GraphQLString),
    },
    languages: {
      type: new GraphQLList(Language),
    },
    createdAt: {
      type: GraphQLString,
    },
  }),
});

export default UserType;
export {
  Language,
  Experience,
  Education,
  Certification,
  Project,
  JobType,
  LocationType,
  ProficiencyType,
};
