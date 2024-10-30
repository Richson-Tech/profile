"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUp() {
    const router = useRouter(); 

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    userName: "",
  });
    const [buttonDisable, setButtondisabled] = React.useState(false)

  const onSignUp = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
      <h1 className="mb-4">SignUp</h1>
      <hr />
      <label htmlFor="userName">userName</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus-border-gray-600 "
        type="text"
        id="username"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="userName">email</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus-border-gray-600 "
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="userName">password</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus-border-gray-600 "
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
          />
          <button onClick={SignUp } className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus-border-gray-600 ">
            Signup  
          </button>
          <Link href="/login">Visit Login page</Link>
    </div>
  );
}
