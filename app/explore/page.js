'use client';
import classes from './page.module.css';
import PostGrid from "@/components/post-grid";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function Explore() {
  const {data : session} = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts(){
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/explore`, {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({})
        });
        if(!res.ok){
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log("Error loading posts: ", error);
      }
    }
    getPosts();
  }, [session]);
  return (
    <>
      <Navbar />
      <div className={classes.buttonContainer}>
        <Link href="/new-post">
          <button className={classes.newPost}>Create New Post</button>
        </Link>
      </div>
      <PostGrid posts = {posts}/>
    </>
  );
}
