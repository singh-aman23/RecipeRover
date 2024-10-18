import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectMongoDB();
        const {userEmail} = await req.json();
        const posts = await Post.find({userEmail : userEmail});
        return NextResponse.json({posts});
    } catch (error) {
        return NextResponse.json({error : "Internal server error"}, {status : 500});
    }
}