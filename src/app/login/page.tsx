// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function Login() {
//   const router = useRouter();
//   const [user, setUser] = React.useState({
//     email: "",
//     password: "",
//   });
//   const [buttondisabled, setButtonDisabled] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   const onLogin = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/login", user);
//       console.log("login success", response.data);
//       toast.success("Login Success");
//       router.push("/profile ");
//     } catch (error: any) {
//       console.log("login failled", error.message);
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user.email.length > 0 && user.password.length > 0) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
//       <h1 className="mb-4">{ loading ? "Processing" : "Login"}</h1>
//       <hr />
//       <label htmlFor="userName">email</label>
//       <input
//         className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus-border-gray-600 "
//         type="text"
//         id="email"
//         value={user.email}
//         onChange={(e) => setUser({ ...user, email: e.target.value })}
//         placeholder="email"
//       />
//       <label htmlFor="userName">password</label>
//       <input
//         className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus-border-gray-600 "
//         type="password"
//         id="password"
//         value={user.password}
//         onChange={(e) => setUser({ ...user, password: e.target.value })}
//         placeholder="password"
//       />
//       <button
//         onClick={onLogin}
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus-border-gray-600 "
//       >
//         Login
//       </button>
//       <Link href="/signup">Visit Signup page</Link>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttondisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/login", user);
      console.log("login success", response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.error("login failed", error.response?.data?.error || error.message);
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
      <h1 className="mb-4">{loading ? "Processing..." : "Login"}</h1>
      <hr />
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
        onClick={onLogin}
        disabled={buttondisabled || loading}
        className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ${
          buttondisabled || loading ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Processing..." : "Login"}
      </button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  );
}
