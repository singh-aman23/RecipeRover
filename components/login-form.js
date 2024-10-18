"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./login-form.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.push("/explore");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.authForm}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" className={classes.image} />
        </Link>
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
        <button className={classes.getStarted}>Log In</button>{" "}
        <div className={classes.register}>
          <p>
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/get-started/signup">Register</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
