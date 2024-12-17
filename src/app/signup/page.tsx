"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisable, setButtondisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.response?.data || error.message);
      toast.error(
        error.response?.data.error || "An error occurred during signup."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtondisabled(!user.email || !user.password || !user.username);
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
      <h1 className="mb-4 text-4xl font-semibold">
        {loading ? "Signing up..." : "Sign Up"}
      </h1>
      <hr />

      <label htmlFor="username">Username</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />

      <button
        onClick={onSignUp}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        disabled={buttonDisable || loading}
      >
        {loading ? "Signing Up..." : buttonDisable ? "No Sign Up" : "Sign Up"}
      </button>

      <Link href="/login">Login Page</Link>
    </div>
  );
}
