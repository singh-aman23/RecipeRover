"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./signup-form.module.css";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("All fields are necessary");
      return;
    }

    try {
      const resUserExists = await fetch("/api/userExists", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({email})
      });

      const {user} = await resUserExists.json();
      if(user){
        setError("User already exists");
        return;
      }

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setError("");
        router.push("/get-started/login");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration : ", error);
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.authForm}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" className={classes.image} />
        </Link>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={classes.input}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={classes.input}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={classes.input}
        />
        {error && (
          <div className={classes.error}>
            <p>{error}</p>
          </div>
        )}
        <button className={classes.getStarted}>Sign Up</button>{" "}
        <div className={classes.register}>
          <p>
            Already have an account?{" "}
            <span>
              <Link href="/get-started/login">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
