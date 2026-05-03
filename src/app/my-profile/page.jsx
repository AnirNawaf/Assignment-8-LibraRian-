"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser({
        name: savedUser.name || savedUser.email.split("@")[0],
        email: savedUser.email,
        image:
          savedUser.image || "https://i.ibb.co.com/4pDNDk1/avatar.png",
      });
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">

        <h1> Please login first </h1>

        <Link href="/login" className="btn btn-primary mt-4"> Login </Link>
        
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-6">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body items-center text-center">
          <img src={user.image} alt={user.name} className="w-28 h-28 rounded-full object-cover" />

          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p>{user.email}</p>

          <Link href="/update-profile" className="btn btn-primary mt-4">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}