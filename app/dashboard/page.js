"use client";
import Navbar from "@/components/navbar";
import classes from "./page.module.css";
import Link from "next/link";
import DashboardPostGrid from "@/components/dashboard-post-grid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const {data : session} = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() => {
      if(!session?.user?.email) return;

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`, {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({userEmail : session.user.email})
        });

        if(!res.ok){
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log("Error fetching posts: ", error);
      }
    };
    fetchPosts();
    
  }, [session]);
  
  return (
    <>
      <Navbar />
      <div className={classes.dashboard}>
        <header className={classes.dashboardHeader}>
          <h1>Manage Your Postings</h1>
          <p>Here you can manage your existing postings.</p>
          <Link href="/new-post">
            <button>Create New Post</button>
          </Link>
        </header>
      </div>
      <DashboardPostGrid posts = {posts}/>
    </>
  );
}
