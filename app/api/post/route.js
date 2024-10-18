import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      dishName,
      ingredients,
      instructions,
      cookingTime,
      servings,
      difficulty,
      category,
      dishType,
      userEmail,
      userName,
      image
    } = await req.json();

    await connectMongoDB();
    await Post.create({
      dishName,
      ingredients,
      instructions,
      cookingTime,
      servings,
      difficulty,
      category,
      dishType,
      userEmail,
      userName,
      image
    });

    return NextResponse.json(
      { messsage: "post created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "unexpected error occured: ", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req){
  try {
    await connectMongoDB();
    const {id} = await req.json();
    const result = await Post.findByIdAndDelete(id);
    if(!result){
      return NextResponse.json({message : "Post not found"}, {status : 404});
    }
    return NextResponse.json({message : "Post deleted"}, {status : 200});
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({message : "Internal server error"},{status : 500});
  }
}
