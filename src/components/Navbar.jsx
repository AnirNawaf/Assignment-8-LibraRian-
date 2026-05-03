"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);

    toast.success("Logout successful!");
  };

  const linkClass = (path) =>
    pathname === path ? "px-3 py-1 rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 via-teal-400 to-emerald-400 text-white font-semibold shadow" : "px-3 py-1 rounded-md hover:bg-white/20 transition";

  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow px-6">

      <div className="navbar-start">
        <Link href="/" className="text-4xl font-bold">
          LibraRian
        </Link>
      </div>

      <div className="navbar-center gap-6 hidden md:flex">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>

        <Link href="/all-books" className={linkClass("/all-books")}>
          All Books
        </Link>

        <Link href="/my-profile" className={linkClass("/my-profile")}>
          My Profile
        </Link>
      </div>

      <div className="navbar-end">
        {!user ? (
          <Link href="/login" className="btn bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow">
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} className="btn font-bold bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-500 to-red-500 text-white shadow" >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}