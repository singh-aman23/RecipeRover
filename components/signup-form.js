"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./signup-form.module.css";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Link href = '/get-started/login'>
          <button className={classes.getStarted}>Sign Up</button>{" "}
        </Link>
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
