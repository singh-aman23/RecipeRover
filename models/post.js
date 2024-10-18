import mongoose, { models, Schema } from "mongoose";

const postSchema = new Schema(
  {
    dishName: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: String,
      required: true,
    },
    servings: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    dishType: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userName : {
      type : String,
      required : true
    },
    image : {
      type : String,
      required : true
    }
  },
  { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", postSchema);
export default Post;
