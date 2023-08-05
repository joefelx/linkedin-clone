import mongoose from "mongoose";
import User, {
  Education,
  Experience,
  Certification,
  Language,
  Project,
} from "../types/User";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      default: "",
      required: true,
    },
    email: {
      type: String,
      default: "",
      required: true,
    },
    password: {
      type: String,
      default: "",
      required: true,
    },
    followers: {
      type: Array<User>,
      default: [],
    },
    following: {
      type: Array<User>,
      default: [],
    },
    connections: {
      type: Array<User>,
      default: [],
    },
    headline: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    profileImg: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    experience: {
      type: Array<Experience>,
      default: [],
    },
    education: {
      type: Array<Education>,
      default: [],
    },
    certifications: {
      type: Array<Certification>,
      default: [],
    },
    projects: {
      type: Array<Project>,
      default: [],
    },
    skills: {
      type: Array,
      default: [],
    },
    languages: {
      type: Array<Language>,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.pre<User>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); // 10 rounds of salt
    this.password = hashedPassword;
    next();
  } catch (err: any) {
    return next(err);
  }
});

export default mongoose.model<User>("User", userSchema);
